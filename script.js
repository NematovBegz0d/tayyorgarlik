// Maktab Maslahatchisi — Tayyorgarlik ilovasi (sidebar layout + Audio TTS)
(function () {
  "use strict";

  const STORAGE_KEY = "maslahatchi_progress_v1";
  const THEME_KEY = "maslahatchi_theme";
  const ACTIVE_KEY = "maslahatchi_active_group";

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
    document.getElementById("themeToggle").textContent = icon + " Kun/tun";
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
  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function groupItems(group) {
    let arr = [];
    group.sections.forEach((sid) => {
      const sec = SECTION_MAP[sid];
      if (sec) arr = arr.concat(sec.items);
    });
    return arr;
  }
  function groupDone(group) {
    return groupItems(group).filter((it) => progress[it._id]).length;
  }

  // ================================================================
  // AUDIO TTS MODULI
  // ================================================================
  const TTS = (function () {
    let preferredLang = null;
    let isReady = false;
    let currentBtn = null;

    // Tillarni ustuvorlik bo'yicha sinab ko'ramiz
    const LANG_PRIORITY = ["tr-TR", "uz-UZ", "uz", "tr", "ru-RU", "en-US"];

    function getVoices() {
      return window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    }

    function pickBestLang() {
      if (preferredLang) return preferredLang;
      const voices = getVoices();
      if (!voices.length) return "tr-TR";
      for (const lang of LANG_PRIORITY) {
        const found = voices.find((v) =>
          v.lang.toLowerCase().startsWith(lang.toLowerCase().substring(0, 5))
        );
        if (found) {
          preferredLang = found.lang;
          return preferredLang;
        }
      }
      return "tr-TR";
    }

    function init(cb) {
      if (!window.speechSynthesis) return;
      if (getVoices().length > 0) {
        isReady = true;
        if (cb) cb();
      } else {
        window.speechSynthesis.onvoiceschanged = function () {
          isReady = true;
          if (cb) cb();
        };
      }
    }

    function stop() {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      if (currentBtn) {
        currentBtn.classList.remove("tts-playing");
        currentBtn.title = "Ovoz bilan o'qi";
        currentBtn = null;
      }
    }

    function speak(text, btn, onDone) {
      if (!window.speechSynthesis) {
        alert("Brauzeringiz ovoz funksiyasini qo'llab-quvvatlamaydi.");
        return;
      }

      // Avvalgi ovozni to'xtat
      stop();

      const lang = pickBestLang();
      const voices = getVoices();
      const voice = voices.find((v) =>
        v.lang.toLowerCase().startsWith(lang.toLowerCase().substring(0, 5))
      ) || voices[0];

      const utt = new SpeechSynthesisUtterance(text);
      if (voice) utt.voice = voice;
      utt.lang = lang;
      utt.rate = 0.88;
      utt.pitch = 1.0;

      currentBtn = btn;
      if (btn) {
        btn.classList.add("tts-playing");
        btn.title = "To'xtatish";
      }

      utt.onend = function () {
        if (currentBtn === btn) {
          if (btn) {
            btn.classList.remove("tts-playing");
            btn.title = "Ovoz bilan o'qi";
          }
          currentBtn = null;
        }
        if (onDone) onDone();
      };

      utt.onerror = function () {
        if (btn) {
          btn.classList.remove("tts-playing");
          btn.title = "Ovoz bilan o'qi";
        }
        currentBtn = null;
      };

      window.speechSynthesis.speak(utt);
    }

    function speakQA(q, a, btn) {
      // Avval savol, keyin "Javob:" so'ng javob o'qiladi
      speak(q, btn, function () {
        setTimeout(function () {
          speak("Javob: " + a, btn);
        }, 700);
      });
    }

    return { init, speak, speakQA, stop, isSupported: !!window.speechSynthesis };
  })();

  // TTS ni ishga tushir
  TTS.init();

  // ================================================================
  // GLOBAL AUDIO PANEL (o'qish tezligi + to'xtatish tugmasi)
  // ================================================================
  function injectAudioPanel() {
    const panel = document.createElement("div");
    panel.id = "audio-panel";
    panel.innerHTML =
      '<span id="audio-status" class="audio-status-text">🔊 Ovoz tayyor</span>' +
      '<label class="audio-rate-label">Tezlik: ' +
      '<select id="audio-rate">' +
      '<option value="0.7">Sekin</option>' +
      '<option value="0.88" selected>Normal</option>' +
      '<option value="1.1">Tez</option>' +
      '<option value="1.3">Juda tez</option>' +
      "</select></label>" +
      '<button id="audio-stop" class="audio-stop-btn" title="To\'xtatish">⏹ To\'xtat</button>';
    document.body.appendChild(panel);

    document.getElementById("audio-stop").addEventListener("click", function () {
      TTS.stop();
      document.getElementById("audio-status").textContent = "🔊 To'xtatildi";
    });

    document.getElementById("audio-rate").addEventListener("change", function () {
      // Keyingi o'qishlarda ishlaydi (global rate)
      window._ttsRate = parseFloat(this.value);
    });
    window._ttsRate = 0.88;
  }
  injectAudioPanel();

  // ================================================================
  // SIDEBAR
  // ================================================================
  const content = document.getElementById("content");
  const groupNav = document.getElementById("groupNav");
  let activeGroupId = localStorage.getItem(ACTIVE_KEY) || STUDY_GROUPS[0].id;
  if (!STUDY_GROUPS.some((g) => g.id === activeGroupId)) activeGroupId = STUDY_GROUPS[0].id;

  function renderSidebar() {
    groupNav.innerHTML = "";
    STUDY_GROUPS.forEach((g) => {
      const btn = document.createElement("button");
      btn.className = "group-item" + (g.id === activeGroupId ? " active" : "");
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
    STUDY_GROUPS.forEach((g) => {
      const btn = groupNav.querySelector('.group-item[data-group="' + g.id + '"]');
      if (btn) {
        const c = btn.querySelector(".group-item-count");
        c.textContent = groupDone(g) + "/" + groupItems(g).length;
      }
    });
  }

  // ================================================================
  // ITEM QURILISHI — 🔊 TUGMA QOSHILDI
  // ================================================================
  function buildItem(it) {
    const item = document.createElement("div");
    item.className = "item" + (progress[it._id] ? " done" : "");
    item.dataset.search = (it.q + " " + it.a + " " + (it.keys || []).join(" ")).toLowerCase();

    const qRow = document.createElement("div");
    qRow.className = "item-q";

    // ✓ belgisi
    const check = document.createElement("button");
    check.className = "item-check" + (progress[it._id] ? " checked" : "");
    check.innerHTML = progress[it._id] ? "✓" : "";
    check.title = "Yodladim deb belgilash";
    check.addEventListener("click", (e) => {
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
    qText.className = "item-q-text";
    qText.textContent = it.q;

    const qChev = document.createElement("span");
    qChev.className = "item-q-chevron";
    qChev.textContent = "▼";

    // ================================================================
    // 🔊 OVOZ TUGMASI
    // ================================================================
    const ttsBtn = document.createElement("button");
    ttsBtn.className = "tts-btn";
    ttsBtn.title = "Ovoz bilan o'qi";
    ttsBtn.innerHTML = "🔊";
    ttsBtn.addEventListener("click", function (e) {
      e.stopPropagation();

      // Agar hozir o'qilayotgan bo'lsa — to'xtat
      if (ttsBtn.classList.contains("tts-playing")) {
        TTS.stop();
        return;
      }

      // Javobni ham ochib, keyin o'qi
      item.classList.add("expanded");
      document.getElementById("audio-status").textContent = "🔊 O'qilmoqda...";

      const rate = window._ttsRate || 0.88;
      // Savol o'qi
      const q = it.q;
      const a = it.a;

      const utt1 = new SpeechSynthesisUtterance("Savol: " + q);
      const voices = window.speechSynthesis.getVoices();
      const LANG_PRIORITY = ["tr-TR", "uz-UZ", "uz", "tr", "ru-RU", "en-US"];
      let voice = null;
      for (const lang of LANG_PRIORITY) {
        voice = voices.find((v) => v.lang.toLowerCase().startsWith(lang.toLowerCase().substring(0, 5)));
        if (voice) break;
      }
      if (voice) utt1.voice = voice;
      utt1.rate = rate;
      utt1.pitch = 1.0;

      ttsBtn.classList.add("tts-playing");
      ttsBtn.title = "To'xtatish";

      const utt2 = new SpeechSynthesisUtterance("Javob: " + a);
      if (voice) utt2.voice = voice;
      utt2.rate = rate;
      utt2.pitch = 1.0;

      utt1.onend = function () {
        setTimeout(function () {
          if (ttsBtn.classList.contains("tts-playing")) {
            window.speechSynthesis.speak(utt2);
          }
        }, 600);
      };

      utt2.onend = function () {
        ttsBtn.classList.remove("tts-playing");
        ttsBtn.title = "Ovoz bilan o'qi";
        document.getElementById("audio-status").textContent = "🔊 Tayyor";
      };

      utt1.onerror = utt2.onerror = function () {
        ttsBtn.classList.remove("tts-playing");
        ttsBtn.title = "Ovoz bilan o'qi";
        document.getElementById("audio-status").textContent = "🔊 Xato";
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utt1);
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
        it.keys.map((k) => '<span class="key-tag">' + escapeHtml(k) + "</span>").join("") + "</div>";
    }
    ansWrap.innerHTML = '<div class="item-a-text">' + escapeHtml(it.a) + "</div>" + keysHtml;

    item.appendChild(qRow);
    item.appendChild(ansWrap);
    return item;
  }

  // ---- render active group ----
  function renderActiveGroup() {
    const group = STUDY_GROUPS.find((g) => g.id === activeGroupId);
    content.innerHTML = "";

    const heading = document.createElement("div");
    heading.className = "group-heading";
    const items = groupItems(group);
    heading.innerHTML =
      '<span class="group-heading-icon">' + group.icon + "</span>" +
      "<div><h2>" + escapeHtml(group.title) + "</h2>" +
      "<p>" + items.length + " ta savol-javob</p></div>";
    content.appendChild(heading);

    group.sections.forEach((sid) => {
      const sec = SECTION_MAP[sid];
      if (!sec) return;
      const sub = document.createElement("div");
      sub.className = "subsection";
      const showSubTitle = group.sections.length > 1;
      sub.innerHTML = showSubTitle
        ? '<div class="subsection-title">' + sec.icon + " " + escapeHtml(sec.title) + "</div>" +
          '<div class="subsection-intro">' + escapeHtml(sec.intro) + "</div>"
        : '<div class="subsection-intro">' + escapeHtml(sec.intro) + "</div>";
      sec.items.forEach((it) => sub.appendChild(buildItem(it)));
      content.appendChild(sub);
    });
  }

  // ---- search ----
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");

  function renderSearch(q) {
    TTS.stop();
    content.innerHTML = "";
    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.innerHTML = '<span class="group-heading-icon">🔍</span><div><h2>Qidiruv natijalari</h2><p>"' + escapeHtml(q) + '"</p></div>';
    content.appendChild(heading);

    let count = 0;
    STUDY_DATA.forEach((sec) => {
      const matched = sec.items.filter((it) =>
        (it.q + " " + it.a + " " + (it.keys || []).join(" ")).toLowerCase().indexOf(q) !== -1);
      if (!matched.length) return;
      const sub = document.createElement("div");
      sub.className = "subsection";
      sub.innerHTML = '<div class="subsection-title">' + sec.icon + " " + escapeHtml(sec.title) + "</div>";
      matched.forEach((it) => {
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
    [item.querySelector(".item-q-text"), item.querySelector(".item-a-text")].forEach((el) => {
      if (!el) return;
      const original = el.textContent;
      const idx = original.toLowerCase().indexOf(q);
      if (idx === -1) return;
      el.innerHTML = escapeHtml(original.slice(0, idx)) +
        "<mark>" + escapeHtml(original.slice(idx, idx + q.length)) + "</mark>" +
        escapeHtml(original.slice(idx + q.length));
    });
  }

  function doSearch() {
    const q = searchInput.value.trim().toLowerCase();
    clearSearch.classList.toggle("visible", q.length > 0);
    if (q) renderSearch(q);
    else renderActiveGroup();
  }
  function clearSearchState() {
    searchInput.value = "";
    clearSearch.classList.remove("visible");
  }

  searchInput.addEventListener("input", doSearch);
  clearSearch.addEventListener("click", () => { clearSearchState(); renderActiveGroup(); searchInput.focus(); });

  // ---- progress bar ----
  function updateProgress() {
    const done = Object.keys(progress).filter((k) => progress[k]).length;
    const pct = totalItems ? Math.round((done / totalItems) * 100) : 0;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressPercent").textContent = pct + "%";
    document.getElementById("progressCount").textContent = done + " / " + totalItems;
  }

  // ---- controls ----
  document.getElementById("expandAll").addEventListener("click", () => {
    content.querySelectorAll(".item").forEach((i) => i.classList.add("expanded"));
  });
  document.getElementById("collapseAll").addEventListener("click", () => {
    content.querySelectorAll(".item").forEach((i) => i.classList.remove("expanded"));
    TTS.stop();
  });
  document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("Barcha progress tozalansinmi? Bu amalni qaytarib bo'lmaydi.")) {
      progress = {};
      saveProgress(progress);
      renderSidebar();
      updateProgress();
      if (searchInput.value.trim()) doSearch(); else renderActiveGroup();
    }
  });

  // ---- mobile sidebar ----
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  function openSidebar() { sidebar.classList.add("open"); overlay.classList.add("visible"); }
  function closeSidebar() { sidebar.classList.remove("open"); overlay.classList.remove("visible"); }
  document.getElementById("menuToggle").addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  // ---- back to top ----
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---- init ----
  renderSidebar();
  renderActiveGroup();
  updateProgress();
})();
