// Maktab Maslahatchisi — Tayyorgarlik ilovasi (Android TTS optimized)
(function () {
  "use strict";

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

  // ---- storage ----
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
  let progress = loadProgress();

  // ---- theme ----
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

  // ---- helpers ----
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
  //  TTS MODULI — Android Chrome uchun optimallashtirilgan
  // ================================================================
  const TTS = (function () {
    const synth = window.speechSynthesis;
    let uzVoice  = null;   // o'zbek ovozi (Android Google TTS)
    let fallback = null;   // zaxira ovoz
    let activeBtn = null;
    let rate = 0.88;

    // Android Chrome da ovozlar kech yuklanadi — kutamiz
    function loadVoices() {
      const voices = synth.getVoices();
      // 1-ustuvorlik: uz-UZ (Android Google TTS — sof o'zbek)
      uzVoice = voices.find(v => /^uz/i.test(v.lang));
      // 2-ustuvorlik: tr-TR (turk — o'zbekchani aniq o'qiydi)
      if (!uzVoice) fallback = voices.find(v => /^tr/i.test(v.lang));
      // 3-ustuvorlik: birinchi mavjud ovoz
      if (!uzVoice && !fallback) fallback = voices[0] || null;
    }

    if (synth) {
      loadVoices();
      synth.onvoiceschanged = loadVoices;
    }

    function bestVoice() { return uzVoice || fallback; }

    function setRate(r) { rate = r; }

    // Android da uzun matn "freeze" qilmasligi uchun
    // matnni qismlarga bo'lib o'qiymiz
    function splitText(text) {
      // Vergul va nuqta bo'yicha bo'laklarga ajratamiz (~150 belgi)
      const parts = [];
      const sentences = text.split(/(?<=[.!?,:;])\s+|(?<=\s{2,})/);
      let chunk = "";
      sentences.forEach(s => {
        if ((chunk + s).length > 150) {
          if (chunk) parts.push(chunk.trim());
          chunk = s;
        } else {
          chunk += (chunk ? " " : "") + s;
        }
      });
      if (chunk.trim()) parts.push(chunk.trim());
      return parts.length ? parts : [text];
    }

    function speakParts(parts, idx, onDone) {
      if (idx >= parts.length) { if (onDone) onDone(); return; }
      const utt = new SpeechSynthesisUtterance(parts[idx]);
      const v = bestVoice();
      if (v) utt.voice = v;
      utt.lang  = v ? v.lang : "uz-UZ";
      utt.rate  = rate;
      utt.pitch = 1.0;
      utt.onend   = () => speakParts(parts, idx + 1, onDone);
      utt.onerror = () => { stop(); };
      // Android Chrome "stall" bug workaround
      setTimeout(() => synth.speak(utt), idx === 0 ? 0 : 50);
    }

    function speak(text, btn, onDone) {
      if (!synth) return;
      stop();
      activeBtn = btn;
      if (btn) { btn.classList.add("tts-playing"); btn.textContent = "⏹"; btn.title = "To'xtatish"; }
      const parts = splitText(text);
      speakParts(parts, 0, () => {
        if (activeBtn === btn) finish(btn);
        if (onDone) onDone();
      });
    }

    function finish(btn) {
      if (btn) { btn.classList.remove("tts-playing"); btn.textContent = "🔊"; btn.title = "Ovoz bilan o'qi"; }
      activeBtn = null;
      const st = document.getElementById("audio-status");
      if (st) st.textContent = "🔊 Tayyor";
    }

    function stop() {
      synth && synth.cancel();
      if (activeBtn) finish(activeBtn);
    }

    function isPlaying() { return synth && synth.speaking; }

    return { speak, stop, setRate, isPlaying, bestVoice,
             supported: !!synth };
  })();

  // ================================================================
  //  AUDIO PANEL (pastki o'ng burchak)
  // ================================================================
  function injectAudioPanel() {
    const p = document.createElement("div");
    p.id = "audio-panel";
    p.innerHTML =
      '<span id="audio-status" class="audio-status-text">🔊 Tayyor</span>' +
      '<label class="audio-rate-label">Tezlik:' +
      '<select id="audio-rate">' +
      '<option value="0.7">Sekin</option>' +
      '<option value="0.88" selected>Normal</option>' +
      '<option value="1.05">Tez</option>' +
      '<option value="1.25">Juda tez</option>' +
      '</select></label>' +
      '<button id="audio-stop" class="audio-stop-btn">⏹ To\'xtat</button>';
    document.body.appendChild(p);

    document.getElementById("audio-rate").addEventListener("change", function () {
      TTS.setRate(parseFloat(this.value));
    });
    document.getElementById("audio-stop").addEventListener("click", () => {
      TTS.stop();
      document.getElementById("audio-status").textContent = "🔊 To'xtatildi";
    });
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
      btn.className   = "group-item" + (g.id === activeGroupId ? " active" : "");
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
  //  ITEM QURILISHI — 🔊 TUGMA
  // ================================================================
  function buildItem(it) {
    const item = document.createElement("div");
    item.className    = "item" + (progress[it._id] ? " done" : "");
    item.dataset.search = (it.q + " " + it.a + " " + (it.keys||[]).join(" ")).toLowerCase();

    // Savol qatori
    const qRow = document.createElement("div");
    qRow.className = "item-q";

    // ✓ belgisi
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

    // Savol matni
    const qText = document.createElement("div");
    qText.className = "item-q-text";
    qText.textContent = it.q;

    // ▼ belgisi
    const qChev = document.createElement("span");
    qChev.className = "item-q-chevron";
    qChev.textContent = "▼";

    // ================================================================
    //  🔊 OVOZ TUGMASI
    // ================================================================
    const ttsBtn = document.createElement("button");
    ttsBtn.className   = "tts-btn";
    ttsBtn.textContent = "🔊";
    ttsBtn.title       = "Ovoz bilan o'qi";

    ttsBtn.addEventListener("click", e => {
      e.stopPropagation();

      // Agar shu tugma o'qiyotgan bo'lsa — to'xtat
      if (ttsBtn.classList.contains("tts-playing")) {
        TTS.stop();
        return;
      }

      // Javobni ochib qo'yamiz
      item.classList.add("expanded");

      const st = document.getElementById("audio-status");
      if (st) st.textContent = "🔊 O'qilmoqda...";

      // Avval savol, so'ng javob o'qiladi
      TTS.speak("Savol: " + it.q, ttsBtn, () => {
        // Savol tugadi — 800ms kutib javobni o'qi
        setTimeout(() => {
          if (!ttsBtn.classList.contains("tts-playing")) {
            // Foydalanuvchi to'xtatmagan bo'lsa davom et
            TTS.speak("Javob: " + it.a, ttsBtn, () => {
              if (st) st.textContent = "🔊 Tayyor";
            });
          }
        }, 800);
      });
    });

    qRow.appendChild(check);
    qRow.appendChild(qText);
    qRow.appendChild(ttsBtn);
    qRow.appendChild(qChev);
    qRow.addEventListener("click", () => item.classList.toggle("expanded"));

    // Javob bloki
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

  // ---- render active group ----
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

  // ---- qidiruv ----
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
      matched.forEach(it => { const el = buildItem(it); el.classList.add("expanded"); highlight(el,q); sub.appendChild(el); count++; });
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

  // ---- progress ----
  function updateProgress() {
    const done = Object.keys(progress).filter(k => progress[k]).length;
    const pct  = totalItems ? Math.round(done/totalItems*100) : 0;
    document.getElementById("progressFill").style.width    = pct + "%";
    document.getElementById("progressPercent").textContent = pct + "%";
    document.getElementById("progressCount").textContent   = done + " / " + totalItems;
  }

  // ---- tugmalar ----
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

  // ---- mobil sidebar ----
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  function openSidebar()  { sidebar.classList.add("open");    overlay.classList.add("visible"); }
  function closeSidebar() { sidebar.classList.remove("open"); overlay.classList.remove("visible"); }
  document.getElementById("menuToggle").addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  // ---- yuqoriga ----
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 400));
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---- ishga tushirish ----
  renderSidebar();
  renderActiveGroup();
  updateProgress();
})();
