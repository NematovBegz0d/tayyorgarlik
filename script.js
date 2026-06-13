// Maktab Maslahatchisi — ElevenLabs TTS (o'zbek ovozi)
(function () {
  "use strict";

  // ================================================================
  //  ElevenLabs sozlamalari — bu yerda o'zgartiring
  // ================================================================
  const EL_API_KEY  = "sk_f75ba0926b1f80752373e951d77f29c05f4439ceee93ac08";
  const EL_VOICE_ID = "IKne3meq5aSn9XLyUdCD"; // Charlie — ko'p tilda yaxshi
  const EL_MODEL    = "eleven_multilingual_v2"; // o'zbek tili uchun eng yaxshi model
  // ================================================================

  const STORAGE_KEY = "maslahatchi_progress_v1";
  const THEME_KEY   = "maslahatchi_theme";
  const ACTIVE_KEY  = "maslahatchi_active_group";

  const SECTION_MAP = {};
  let itemIndex = 0;
  STUDY_DATA.forEach((sec) => {
    SECTION_MAP[sec.id] = sec;
    sec.items.forEach((it) => { it._id = sec.id + "_" + itemIndex++; });
  });
  const totalItems = itemIndex;

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
  let progress = loadProgress();

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    const icon = t === "dark" ? "☀️" : "🌙";
    document.getElementById("themeToggle").textContent       = icon + " Kun/tun";
    document.getElementById("themeToggleMobile").textContent = icon;
  }
  let theme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(theme);
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("themeToggleMobile").addEventListener("click", toggleTheme);

  function escapeHtml(s) {
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }
  function groupItems(g) {
    let arr = [];
    g.sections.forEach((sid) => { const s = SECTION_MAP[sid]; if (s) arr = arr.concat(s.items); });
    return arr;
  }
  function groupDone(g) { return groupItems(g).filter((it) => progress[it._id]).length; }

  // ================================================================
  //  ElevenLabs TTS MODULI
  // ================================================================
  const TTS = (function () {
    let currentAudio = null;
    let currentBtn   = null;
    let speed        = 1.0;
    const cache      = {}; // matn -> blob URL (kredit tejash)

    function setSpeed(s) { speed = s; }

    function stop() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }
      if (currentBtn) {
        currentBtn.classList.remove("tts-playing");
        currentBtn.textContent = "🔊";
        currentBtn.title = "Ovoz bilan o'qi";
        currentBtn = null;
      }
      setStatus("🔊 Tayyor");
    }

    function setStatus(txt) {
      const el = document.getElementById("audio-status");
      if (el) el.textContent = txt;
    }

    async function fetchAudio(text) {
      // Cache tekshir — bir xil matn uchun qayta so'rov yo'q
      if (cache[text]) return cache[text];

      const resp = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/" + EL_VOICE_ID + "/stream",
        {
          method: "POST",
          headers: {
            "xi-api-key":   EL_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text:       text,
            model_id:   EL_MODEL,
            voice_settings: {
              stability:         0.5,
              similarity_boost:  0.8,
              style:             0.0,
              use_speaker_boost: true,
            },
          }),
        }
      );

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.detail?.message || "ElevenLabs xato: " + resp.status);
      }

      const blob = await resp.blob();
      const url  = URL.createObjectURL(blob);
      cache[text] = url; // keshga saqla
      return url;
    }

    async function speak(text, btn, onDone) {
      stop();
      currentBtn = btn;
      if (btn) {
        btn.classList.add("tts-playing");
        btn.textContent = "⏳";
        btn.title = "Yuklanmoqda...";
      }
      setStatus("⏳ Yuklanmoqda...");

      try {
        const url   = await fetchAudio(text);
        const audio = new Audio(url);
        audio.playbackRate = speed;
        currentAudio = audio;

        if (btn) {
          btn.textContent = "⏹";
          btn.title = "To'xtatish";
        }
        setStatus("🔊 O'qilmoqda...");

        audio.onended = () => {
          if (currentBtn === btn) {
            if (btn) {
              btn.classList.remove("tts-playing");
              btn.textContent = "🔊";
              btn.title = "Ovoz bilan o'qi";
            }
            currentAudio = null;
            currentBtn   = null;
            setStatus("🔊 Tayyor");
          }
          if (onDone) onDone();
        };

        audio.onerror = () => {
          stop();
          setStatus("❌ Audio xato");
        };

        audio.play();
      } catch (err) {
        stop();
        console.error(err);
        if (err.message.includes("401")) {
          setStatus("❌ API key xato");
        } else if (err.message.includes("quota") || err.message.includes("credit")) {
          setStatus("❌ Kredit tugadi");
        } else {
          setStatus("❌ " + err.message);
        }
      }
    }

    // Savol → pauza → Javob ketma-ket o'qish
    function speakQA(q, a, btn) {
      speak("Savol: " + q, btn, () => {
        setTimeout(() => {
          if (!currentAudio) { // foydalanuvchi to'xtatmagan bo'lsa
            speak("Javob: " + a, btn);
          }
        }, 700);
      });
    }

    return { speak, speakQA, stop, setSpeed, supported: true };
  })();

  // ================================================================
  //  AUDIO PANEL
  // ================================================================
  function injectAudioPanel() {
    const p = document.createElement("div");
    p.id = "audio-panel";
    p.innerHTML =
      '<span id="audio-status" class="audio-status-text">🔊 Tayyor</span>' +
      '<label class="audio-rate-label">Tezlik:' +
      '<select id="audio-rate">' +
      '<option value="0.8">Sekin</option>' +
      '<option value="1.0" selected>Normal</option>' +
      '<option value="1.25">Tez</option>' +
      '<option value="1.5">Juda tez</option>' +
      '</select></label>' +
      '<button id="audio-stop" class="audio-stop-btn">⏹ To\'xtat</button>';
    document.body.appendChild(p);

    document.getElementById("audio-rate").addEventListener("change", function () {
      TTS.setSpeed(parseFloat(this.value));
    });
    document.getElementById("audio-stop").addEventListener("click", () => TTS.stop());
  }
  injectAudioPanel();

  // ================================================================
  //  SIDEBAR
  // ================================================================
  const content  = document.getElementById("content");
  const groupNav = document.getElementById("groupNav");
  let activeGroupId = localStorage.getItem(ACTIVE_KEY) || STUDY_GROUPS[0].id;
  if (!STUDY_GROUPS.some(g => g.id === activeGroupId)) activeGroupId = STUDY_GROUPS[0].id;

  function renderSidebar() {
    groupNav.innerHTML = "";
    STUDY_GROUPS.forEach(g => {
      const btn = document.createElement("button");
      btn.className     = "group-item" + (g.id === activeGroupId ? " active" : "");
      btn.dataset.group = g.id;
      const items = groupItems(g);
      btn.innerHTML =
        '<span class="group-item-icon">' + g.icon + "</span>" +
        '<span class="group-item-text">' + escapeHtml(g.title) + "</span>" +
        '<span class="group-item-count">' + groupDone(g) + "/" + items.length + "</span>";
      btn.addEventListener("click", () => {
        TTS.stop();
        activeGroupId = g.id;
        localStorage.setItem(ACTIVE_KEY, activeGroupId);
        clearSearchState();
        renderSidebar();
        renderActiveGroup();
        closeSidebar();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      groupNav.appendChild(btn);
    });
  }

  function updateSidebarCounts() {
    STUDY_GROUPS.forEach(g => {
      const btn = groupNav.querySelector('.group-item[data-group="' + g.id + '"]');
      if (btn) btn.querySelector(".group-item-count").textContent =
        groupDone(g) + "/" + groupItems(g).length;
    });
  }

  // ================================================================
  //  ITEM — 🔊 TUGMA (ElevenLabs)
  // ================================================================
  function buildItem(it) {
    const item = document.createElement("div");
    item.className    = "item" + (progress[it._id] ? " done" : "");
    item.dataset.search = (it.q + " " + it.a + " " + (it.keys||[]).join(" ")).toLowerCase();

    const qRow = document.createElement("div");
    qRow.className = "item-q";

    const check = document.createElement("button");
    check.className = "item-check" + (progress[it._id] ? " checked" : "");
    check.innerHTML = progress[it._id] ? "✓" : "";
    check.title = "Yodladim";
    check.addEventListener("click", e => {
      e.stopPropagation();
      if (progress[it._id]) delete progress[it._id]; else progress[it._id] = true;
      saveProgress(progress);
      item.classList.toggle("done");
      check.classList.toggle("checked");
      check.innerHTML = progress[it._id] ? "✓" : "";
      updateSidebarCounts();
      updateProgress();
    });

    const qText = document.createElement("div");
    qText.className   = "item-q-text";
    qText.textContent = it.q;

    const qChev = document.createElement("span");
    qChev.className   = "item-q-chevron";
    qChev.textContent = "▼";

    // 🔊 TUGMA
    const ttsBtn = document.createElement("button");
    ttsBtn.className   = "tts-btn";
    ttsBtn.textContent = "🔊";
    ttsBtn.title       = "Ovoz bilan o'qi";

    ttsBtn.addEventListener("click", e => {
      e.stopPropagation();
      if (ttsBtn.classList.contains("tts-playing")) {
        TTS.stop();
        return;
      }
      item.classList.add("expanded");
      TTS.speakQA(it.q, it.a, ttsBtn);
    });

    qRow.appendChild(check);
    qRow.appendChild(qText);
    qRow.appendChild(ttsBtn);
    qRow.appendChild(qChev);
    qRow.addEventListener("click", () => item.classList.toggle("expanded"));

    const ansWrap = document.createElement("div");
    ansWrap.className = "item-a";
    let keysHtml = "";
    if (it.keys && it.keys.length) {
      keysHtml = '<div class="keys-label">🔑 KALIT SO\'ZLAR</div><div class="keys-wrap">' +
        it.keys.map(k => '<span class="key-tag">' + escapeHtml(k) + "</span>").join("") + "</div>";
    }
    ansWrap.innerHTML = '<div class="item-a-text">' + escapeHtml(it.a) + "</div>" + keysHtml;

    item.appendChild(qRow);
    item.appendChild(ansWrap);
    return item;
  }

  function renderActiveGroup() {
    const group = STUDY_GROUPS.find(g => g.id === activeGroupId);
    content.innerHTML = "";
    const heading = document.createElement("div");
    heading.className = "group-heading";
    const items = groupItems(group);
    heading.innerHTML =
      '<span class="group-heading-icon">' + group.icon + "</span>" +
      "<div><h2>" + escapeHtml(group.title) + "</h2>" +
      "<p>" + items.length + " ta savol-javob</p></div>";
    content.appendChild(heading);
    group.sections.forEach(sid => {
      const sec = SECTION_MAP[sid];
      if (!sec) return;
      const sub = document.createElement("div");
      sub.className = "subsection";
      const showTitle = group.sections.length > 1;
      sub.innerHTML = showTitle
        ? '<div class="subsection-title">' + sec.icon + " " + escapeHtml(sec.title) + "</div>" +
          '<div class="subsection-intro">' + escapeHtml(sec.intro) + "</div>"
        : '<div class="subsection-intro">' + escapeHtml(sec.intro) + "</div>";
      sec.items.forEach(it => sub.appendChild(buildItem(it)));
      content.appendChild(sub);
    });
  }

  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");

  function renderSearch(q) {
    TTS.stop();
    content.innerHTML = "";
    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.innerHTML = '<span class="group-heading-icon">🔍</span><div><h2>Qidiruv natijalari</h2><p>"' +
      escapeHtml(q) + '"</p></div>';
    content.appendChild(heading);
    let count = 0;
    STUDY_DATA.forEach(sec => {
      const matched = sec.items.filter(it =>
        (it.q + " " + it.a + " " + (it.keys||[]).join(" ")).toLowerCase().includes(q));
      if (!matched.length) return;
      const sub = document.createElement("div");
      sub.className = "subsection";
      sub.innerHTML = '<div class="subsection-title">' + sec.icon + " " + escapeHtml(sec.title) + "</div>";
      matched.forEach(it => {
        const el = buildItem(it);
        el.classList.add("expanded");
        highlight(el, q);
        sub.appendChild(el);
        count++;
      });
      content.appendChild(sub);
    });
    if (!count) {
      const nr = document.createElement("div");
      nr.className = "no-results";
      nr.textContent = "Hech narsa topilmadi 🔍";
      content.appendChild(nr);
    }
  }

  function highlight(item, q) {
    [item.querySelector(".item-q-text"), item.querySelector(".item-a-text")].forEach(el => {
      if (!el) return;
      const orig = el.textContent;
      const idx  = orig.toLowerCase().indexOf(q);
      if (idx === -1) return;
      el.innerHTML = escapeHtml(orig.slice(0,idx)) +
        "<mark>" + escapeHtml(orig.slice(idx, idx+q.length)) + "</mark>" +
        escapeHtml(orig.slice(idx+q.length));
    });
  }

  function doSearch() {
    const q = searchInput.value.trim().toLowerCase();
    clearSearch.classList.toggle("visible", q.length > 0);
    if (q) renderSearch(q); else renderActiveGroup();
  }
  function clearSearchState() { searchInput.value = ""; clearSearch.classList.remove("visible"); }
  searchInput.addEventListener("input", doSearch);
  clearSearch.addEventListener("click", () => { clearSearchState(); renderActiveGroup(); searchInput.focus(); });

  function updateProgress() {
    const done = Object.keys(progress).filter(k => progress[k]).length;
    const pct  = totalItems ? Math.round(done/totalItems*100) : 0;
    document.getElementById("progressFill").style.width    = pct + "%";
    document.getElementById("progressPercent").textContent = pct + "%";
    document.getElementById("progressCount").textContent   = done + " / " + totalItems;
  }

  document.getElementById("expandAll").addEventListener("click", () =>
    content.querySelectorAll(".item").forEach(i => i.classList.add("expanded")));
  document.getElementById("collapseAll").addEventListener("click", () => {
    content.querySelectorAll(".item").forEach(i => i.classList.remove("expanded"));
    TTS.stop();
  });
  document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("Barcha progress tozalansinmi?")) {
      progress = {};
      saveProgress(progress);
      renderSidebar();
      updateProgress();
      if (searchInput.value.trim()) doSearch(); else renderActiveGroup();
    }
  });

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  function openSidebar()  { sidebar.classList.add("open");    overlay.classList.add("visible"); }
  function closeSidebar() { sidebar.classList.remove("open"); overlay.classList.remove("visible"); }
  document.getElementById("menuToggle").addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 400));
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  renderSidebar();
  renderActiveGroup();
  updateProgress();
})();
