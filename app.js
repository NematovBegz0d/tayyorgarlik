/* ===== Maktab Maslahatchisi — ilova mantiqi ===== */
(function () {
  "use strict";

  var data = window.APP_DATA;
  var nav = document.getElementById("nav");
  var content = document.getElementById("content");
  var searchInput = document.getElementById("searchInput");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");
  var menuToggle = document.getElementById("menuToggle");
  var themeToggle = document.getElementById("themeToggle");
  var toTop = document.getElementById("toTop");
  var main = document.getElementById("main");
  var progressFill = document.getElementById("progressFill");
  var progressText = document.getElementById("progressText");

  var STORE_READ = "mm_read_items";
  var STORE_THEME = "mm_theme";
  var activeSection = data.sections[0].id;
  var query = "";

  /* ---------- helpers ---------- */
  function totalItems() {
    var n = 0;
    data.sections.forEach(function (s) {
      s.groups.forEach(function (g) { n += g.items.length; });
    });
    return n;
  }

  function getRead() {
    try { return JSON.parse(localStorage.getItem(STORE_READ) || "{}"); }
    catch (e) { return {}; }
  }
  function setRead(obj) {
    try { localStorage.setItem(STORE_READ, JSON.stringify(obj)); } catch (e) {}
  }
  function itemId(si, gi, ii) { return si + "-" + gi + "-" + ii; }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlight(text, q) {
    var safe = esc(text);
    if (!q) return safe;
    var terms = q.trim().split(/\s+/).filter(Boolean).map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    });
    if (!terms.length) return safe;
    var re = new RegExp("(" + terms.join("|") + ")", "gi");
    return safe.replace(re, '<mark class="hl">$1</mark>');
  }

  function matchesItem(item, q) {
    var hay = (item.q + " " + item.a + " " + (item.keys || []).join(" ")).toLowerCase();
    return q.split(/\s+/).filter(Boolean).every(function (t) {
      return hay.indexOf(t) !== -1;
    });
  }

  /* ---------- progress ---------- */
  function updateProgress() {
    var read = getRead();
    var done = Object.keys(read).filter(function (k) { return read[k]; }).length;
    var total = totalItems();
    var pct = total ? Math.round((done / total) * 100) : 0;
    progressFill.style.width = pct + "%";
    progressText.textContent = pct + "%";
  }

  /* ---------- sidebar nav ---------- */
  function buildNav() {
    nav.innerHTML = "";
    data.sections.forEach(function (s) {
      var count = s.groups.reduce(function (a, g) { return a + g.items.length; }, 0);
      var btn = document.createElement("button");
      btn.className = "nav-item" + (s.id === activeSection ? " active" : "");
      btn.dataset.id = s.id;
      btn.innerHTML =
        '<span class="nav-icon">' + s.icon + "</span>" +
        "<span>" + esc(s.label) + "</span>" +
        '<span class="nav-count">' + count + "</span>";
      btn.addEventListener("click", function () {
        query = "";
        searchInput.value = "";
        activeSection = s.id;
        renderSection();
        closeSidebar();
        main.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      nav.appendChild(btn);
    });
  }

  function setActiveNav() {
    Array.prototype.forEach.call(nav.children, function (b) {
      b.classList.toggle("active", b.dataset.id === activeSection && !query);
    });
  }

  /* ---------- render a Q&A card ---------- */
  function makeCard(item, id, q) {
    var read = getRead();
    var card = document.createElement("div");
    card.className = "card";
    card.dataset.id = id;

    var keysHtml = "";
    if (item.keys && item.keys.length) {
      keysHtml =
        '<div class="keys"><span class="keys-label">🔑 Kalit so\'zlar</span>' +
        item.keys.map(function (k) {
          return '<span class="key-chip">' + highlight(k, q) + "</span>";
        }).join("") +
        "</div>";
    }

    card.innerHTML =
      '<button class="card-q" type="button">' +
        '<span class="q-mark">S</span>' +
        '<span class="q-text">' + highlight(item.q, q) + "</span>" +
        '<span class="chevron">▾</span>' +
      "</button>" +
      '<div class="card-body"><div class="card-body-inner">' +
        '<div class="answer">' + highlight(item.a, q) + "</div>" +
        keysHtml +
      "</div></div>";

    var qBtn = card.querySelector(".card-q");
    var body = card.querySelector(".card-body");

    qBtn.addEventListener("click", function () {
      var isOpen = card.classList.toggle("open");
      if (isOpen) {
        body.style.maxHeight = body.scrollHeight + "px";
        // mark as read on open
        var r = getRead();
        if (!r[id]) { r[id] = true; setRead(r); updateProgress(); }
      } else {
        body.style.maxHeight = 0;
      }
    });

    return card;
  }

  /* ---------- render section ---------- */
  function renderSection() {
    setActiveNav();
    var section = data.sections.filter(function (s) { return s.id === activeSection; })[0];
    if (!section) return;

    content.innerHTML = "";

    var head = document.createElement("div");
    head.className = "section-head";
    head.innerHTML =
      '<span class="eyebrow">' + section.icon + " " + esc(section.label) + "</span>" +
      "<h1>" + esc(section.heading || section.label) + "</h1>";
    content.appendChild(head);

    if (section.principle) {
      var pr = document.createElement("div");
      pr.className = "principle";
      pr.innerHTML =
        '<span class="p-icon">📌</span>' +
        '<div class="p-text"><b>Asosiy tamoyil</b>' + esc(section.principle) + "</div>";
      content.appendChild(pr);
    }

    var si = data.sections.indexOf(section);
    section.groups.forEach(function (g, gi) {
      var groupEl = document.createElement("div");
      groupEl.className = "group";
      var title = document.createElement("div");
      title.className = "group-title";
      title.innerHTML = esc(g.title);
      groupEl.appendChild(title);

      g.items.forEach(function (item, ii) {
        groupEl.appendChild(makeCard(item, itemId(si, gi, ii), ""));
      });
      content.appendChild(groupEl);
    });
  }

  /* ---------- render search results ---------- */
  function renderSearch() {
    content.innerHTML = "";
    setActiveNav();

    var head = document.createElement("div");
    head.className = "section-head";
    head.innerHTML =
      '<span class="eyebrow">🔍 Qidiruv</span>' +
      "<h1>Natijalar: \u201C" + esc(query) + "\u201D</h1>";
    content.appendChild(head);

    var found = 0;
    data.sections.forEach(function (s, si) {
      var matches = [];
      s.groups.forEach(function (g, gi) {
        g.items.forEach(function (item, ii) {
          if (matchesItem(item, query)) matches.push({ item: item, id: itemId(si, gi, ii) });
        });
      });
      if (!matches.length) return;
      found += matches.length;

      var groupEl = document.createElement("div");
      groupEl.className = "group";
      var title = document.createElement("div");
      title.className = "group-title";
      title.innerHTML = s.icon + " " + esc(s.label);
      groupEl.appendChild(title);
      matches.forEach(function (m) {
        groupEl.appendChild(makeCard(m.item, m.id, query));
      });
      content.appendChild(groupEl);
    });

    if (!found) {
      var empty = document.createElement("div");
      empty.className = "empty";
      empty.innerHTML =
        '<span class="e-icon">🤔</span>' +
        "<p>Hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.</p>";
      content.appendChild(empty);
    }
  }

  function render() {
    if (query) renderSearch(); else renderSection();
    window.scrollTo({ top: 0 });
  }

  /* ---------- search input ---------- */
  var searchTimer;
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      query = searchInput.value.trim().toLowerCase();
      render();
    }, 160);
  });

  /* ---------- sidebar (mobile) ---------- */
  function openSidebar() { sidebar.classList.add("open"); overlay.classList.add("show"); }
  function closeSidebar() { sidebar.classList.remove("open"); overlay.classList.remove("show"); }
  menuToggle.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) closeSidebar(); else openSidebar();
  });
  overlay.addEventListener("click", closeSidebar);

  /* ---------- theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    themeToggle.textContent = t === "dark" ? "☀️" : "🌙";
  }
  var savedTheme = "light";
  try { savedTheme = localStorage.getItem(STORE_THEME) || "light"; } catch (e) {}
  applyTheme(savedTheme);
  themeToggle.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(STORE_THEME, next); } catch (e) {}
  });

  /* ---------- to top ---------- */
  window.addEventListener("scroll", function () {
    toTop.classList.toggle("show", window.scrollY > 400);
  });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- init ---------- */
  buildNav();
  render();
  updateProgress();
})();
