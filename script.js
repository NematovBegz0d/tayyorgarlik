// Maktab Maslahatchisi — Tayyorgarlik ilovasi
(function () {
  "use strict";

  const STORAGE_KEY = "maslahatchi_progress_v1";
  const THEME_KEY = "maslahatchi_theme";

  // Har bir item uchun unikal id yaratish
  let itemIndex = 0;
  STUDY_DATA.forEach((sec) => {
    sec.items.forEach((it) => {
      it._id = sec.id + "_" + itemIndex++;
    });
  });

  const totalItems = itemIndex;

  // ---- Progress storage ----
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }
  let progress = loadProgress();

  // ---- Theme ----
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    document.getElementById("themeToggle").textContent = t === "dark" ? "☀️" : "🌙";
  }
  let theme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(theme);
  document.getElementById("themeToggle").addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  });

  // ---- Render ----
  const content = document.getElementById("content");
  const nav = document.getElementById("sectionNav");

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function render() {
    content.innerHTML = "";
    nav.innerHTML = "";

    STUDY_DATA.forEach((sec) => {
      // nav chip
      const chip = document.createElement("button");
      chip.className = "nav-chip";
      chip.textContent = sec.icon + " " + sec.title;
      chip.addEventListener("click", () => {
        const el = document.getElementById("sec-" + sec.id);
        el.classList.add("open");
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      nav.appendChild(chip);

      // section
      const section = document.createElement("section");
      section.className = "section";
      section.id = "sec-" + sec.id;

      const doneCount = sec.items.filter((it) => progress[it._id]).length;

      const header = document.createElement("div");
      header.className = "section-header";
      header.innerHTML =
        '<span class="section-icon">' + sec.icon + "</span>" +
        '<div class="section-title-wrap">' +
        '<div class="section-title">' + escapeHtml(sec.title) + "</div>" +
        '<div class="section-intro">' + escapeHtml(sec.intro) + "</div>" +
        "</div>" +
        '<span class="section-badge" data-sec="' + sec.id + '">' + doneCount + "/" + sec.items.length + "</span>" +
        '<span class="section-chevron">▼</span>';
      header.addEventListener("click", () => section.classList.toggle("open"));
      section.appendChild(header);

      const body = document.createElement("div");
      body.className = "section-body";

      sec.items.forEach((it) => {
        const item = document.createElement("div");
        item.className = "item" + (progress[it._id] ? " done" : "");
        item.dataset.search = (it.q + " " + it.a + " " + (it.keys || []).join(" ")).toLowerCase();
        item.dataset.id = it._id;

        const qRow = document.createElement("div");
        qRow.className = "item-q";

        const check = document.createElement("button");
        check.className = "item-check" + (progress[it._id] ? " checked" : "");
        check.innerHTML = progress[it._id] ? "✓" : "";
        check.title = "Yodladim deb belgilash";
        check.addEventListener("click", (e) => {
          e.stopPropagation();
          if (progress[it._id]) {
            delete progress[it._id];
          } else {
            progress[it._id] = true;
          }
          saveProgress(progress);
          item.classList.toggle("done");
          check.classList.toggle("checked");
          check.innerHTML = progress[it._id] ? "✓" : "";
          updateSectionBadge(sec);
          updateProgress();
        });

        const qText = document.createElement("div");
        qText.className = "item-q-text";
        qText.textContent = it.q;

        const qChev = document.createElement("span");
        qChev.className = "item-q-chevron";
        qChev.textContent = "▼";

        qRow.appendChild(check);
        qRow.appendChild(qText);
        qRow.appendChild(qChev);
        qRow.addEventListener("click", () => item.classList.toggle("expanded"));

        const ansWrap = document.createElement("div");
        ansWrap.className = "item-a";
        let keysHtml = "";
        if (it.keys && it.keys.length) {
          keysHtml =
            '<div class="keys-label">🔑 KALIT SO\'ZLAR</div><div class="keys-wrap">' +
            it.keys.map((k) => '<span class="key-tag">' + escapeHtml(k) + "</span>").join("") +
            "</div>";
        }
        ansWrap.innerHTML =
          '<div class="item-a-text">' + escapeHtml(it.a) + "</div>" + keysHtml;

        item.appendChild(qRow);
        item.appendChild(ansWrap);
        body.appendChild(item);
      });

      section.appendChild(body);
      content.appendChild(section);
    });

    // birinchi bo'limni ochib qo'yamiz
    const first = content.querySelector(".section");
    if (first) first.classList.add("open");

    updateProgress();
  }

  function updateSectionBadge(sec) {
    const badge = document.querySelector('.section-badge[data-sec="' + sec.id + '"]');
    if (badge) {
      const doneCount = sec.items.filter((it) => progress[it._id]).length;
      badge.textContent = doneCount + "/" + sec.items.length;
    }
  }

  function updateProgress() {
    const done = Object.keys(progress).filter((k) => progress[k]).length;
    const pct = totalItems ? Math.round((done / totalItems) * 100) : 0;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressPercent").textContent = pct + "%";
    document.getElementById("progressCount").textContent = done + " / " + totalItems;
  }

  // ---- Search ----
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");

  function doSearch() {
    const q = searchInput.value.trim().toLowerCase();
    clearSearch.classList.toggle("visible", q.length > 0);

    let anyVisible = false;
    document.querySelectorAll(".section").forEach((section) => {
      let sectionHas = false;
      section.querySelectorAll(".item").forEach((item) => {
        const match = !q || item.dataset.search.indexOf(q) !== -1;
        item.classList.toggle("hidden", !match);
        if (match) {
          sectionHas = true;
          anyVisible = true;
          highlight(item, q);
        }
      });
      section.classList.toggle("hidden", q && !sectionHas);
      if (q && sectionHas) {
        section.classList.add("open");
      }
    });

    let nr = document.getElementById("noResults");
    if (q && !anyVisible) {
      if (!nr) {
        nr = document.createElement("div");
        nr.id = "noResults";
        nr.className = "no-results";
        nr.textContent = "Hech narsa topilmadi 🔍";
        content.appendChild(nr);
      }
    } else if (nr) {
      nr.remove();
    }
  }

  function highlight(item, q) {
    const qText = item.querySelector(".item-q-text");
    const aText = item.querySelector(".item-a-text");
    [qText, aText].forEach((el) => {
      if (!el) return;
      const original = el.dataset.orig || el.textContent;
      el.dataset.orig = original;
      if (!q) {
        el.textContent = original;
        return;
      }
      const idx = original.toLowerCase().indexOf(q);
      if (idx === -1) {
        el.textContent = original;
        return;
      }
      el.innerHTML =
        escapeHtml(original.slice(0, idx)) +
        "<mark>" + escapeHtml(original.slice(idx, idx + q.length)) + "</mark>" +
        escapeHtml(original.slice(idx + q.length));
    });
  }

  searchInput.addEventListener("input", doSearch);
  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    doSearch();
    searchInput.focus();
  });

  // ---- Controls ----
  document.getElementById("expandAll").addEventListener("click", () => {
    document.querySelectorAll(".section").forEach((s) => s.classList.add("open"));
  });
  document.getElementById("collapseAll").addEventListener("click", () => {
    document.querySelectorAll(".section").forEach((s) => s.classList.remove("open"));
  });
  document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("Barcha progress tozalansinmi? Bu amalni qaytarib bo'lmaydi.")) {
      progress = {};
      saveProgress(progress);
      render();
    }
  });

  // ---- Back to top ----
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---- Init ----
  render();
})();
