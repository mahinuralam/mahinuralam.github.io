/* Md Mahinur Alam · homepage interactions (no dependencies). */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------------------------------------------------------------- theme */
  /* Light is the default; dark applies only after a visitor picks it. */
  var themeBtn = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function effectiveTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncTheme() {
    var dark = effectiveTheme() === "dark";
    if (themeMeta) { themeMeta.setAttribute("content", dark ? "#0d1117" : "#ffffff"); }
    if (!themeBtn) { return; }
    var next = dark ? "light" : "dark";
    themeBtn.setAttribute("aria-label", "Switch to " + next + " theme");
    themeBtn.setAttribute("title", "Switch to " + next + " theme");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("mma-theme-choice", next); } catch (e) {}
      syncTheme();
    });
  }
  syncTheme();

  /* ------------------------------------------------------------ menu (narrow) */
  var nav = document.getElementById("site-nav");
  var navBtn = document.getElementById("nav-toggle");

  function setMenu(open) {
    if (!nav || !navBtn) { return; }
    nav.classList.toggle("is-open", open);
    navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (nav && navBtn) {
    navBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) { setMenu(false); } });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target) && !navBtn.contains(e.target)) { setMenu(false); }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setMenu(false); } });
  }

  /* ------------------------------------------------- highlight current section */
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
  var linkFor = {};
  navLinks.forEach(function (a) { linkFor[a.getAttribute("href").slice(1)] = a; });
  var tracked = Object.keys(linkFor).map(function (id) { return document.getElementById(id); }).filter(Boolean);

  function markCurrent(id) {
    navLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
    if (linkFor[id]) { linkFor[id].setAttribute("aria-current", "true"); }
  }

  if ("IntersectionObserver" in window && tracked.length) {
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
      for (var i = 0; i < tracked.length; i++) {
        if (visible[tracked[i].id]) { markCurrent(tracked[i].id); return; }
      }
    }, { rootMargin: "-90px 0px -55% 0px", threshold: 0 });
    tracked.forEach(function (el) { spy.observe(el); });
  }

  /* --------------------------------------------------------------- lightbox */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbCap = document.getElementById("lightbox-cap");
  var lbClose = document.getElementById("lightbox-close");
  var lastFocus = null;

  function openLightbox(img, caption) {
    if (!lb) { return; }
    lastFocus = document.activeElement;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || "";
    lbCap.textContent = caption || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }
  function closeLightbox() {
    if (!lb || lb.hidden) { return; }
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) { lastFocus.focus(); }
  }
  Array.prototype.forEach.call(document.querySelectorAll(".hl__zoom"), function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".hl");
      var title = card ? card.querySelector(".hl__title") : null;
      openLightbox(btn.querySelector("img"), title ? title.textContent.trim() : "");
    });
  });
  if (lb) {
    lbClose.addEventListener("click", closeLightbox);
    lb.addEventListener("click", function (e) { if (e.target === lb) { closeLightbox(); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeLightbox(); } });
  }

  /* ---------------------------------------------------- publication filter */
  var input = document.getElementById("pub-filter");
  var countEl = document.getElementById("pub-count");
  var emptyEl = document.getElementById("pub-empty");
  var groups = Array.prototype.slice.call(document.querySelectorAll(".pub-group"));
  var allPubs = Array.prototype.slice.call(document.querySelectorAll("#publications .pub"));
  var kics = document.getElementById("kics");
  var kicsWasOpen = kics ? kics.open : false;
  var total = allPubs.length;
  Array.prototype.forEach.call(document.querySelectorAll("[data-pub-total]"), function (el) { el.textContent = String(total); });
  if (countEl) { countEl.textContent = total + " papers and manuscripts"; }

  allPubs.forEach(function (li) { li.setAttribute("data-text", li.textContent.replace(/\s+/g, " ").toLowerCase()); });

  function applyFilter() {
    var q = (input.value || "").trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    var shown = 0;
    allPubs.forEach(function (li) {
      var text = li.getAttribute("data-text");
      var ok = terms.every(function (t) { return text.indexOf(t) !== -1; });
      li.hidden = !ok;
      if (ok) { shown++; }
    });
    groups.forEach(function (g) {
      var any = g.querySelector(".pub:not([hidden])");
      g.hidden = !any;
    });
    if (kics) {
      if (q && kics.querySelector(".pub:not([hidden])")) { kics.open = true; }
      else if (!q) { kics.open = kicsWasOpen; }
    }
    if (countEl) { countEl.textContent = q ? shown + " of " + total + " shown" : total + " papers and manuscripts"; }
    if (emptyEl) { emptyEl.hidden = shown !== 0; }
  }
  if (input) {
    input.addEventListener("input", applyFilter);
    if (kics) { kics.addEventListener("toggle", function () { if (!input.value.trim()) { kicsWasOpen = kics.open; } }); }
  }

  /* ------------------------------------------------------------- copy email */
  Array.prototype.forEach.call(document.querySelectorAll(".copy-btn[data-copy]"), function (btn) {
    var label = btn.querySelector("span");
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      function done(msg) {
        if (!label) { return; }
        label.textContent = msg;
        setTimeout(function () { label.textContent = "Copy"; }, 1800);
      }
      function fallback() {
        var span = btn.parentNode.querySelector("a");
        if (span && window.getSelection) {
          var r = document.createRange();
          r.selectNodeContents(span);
          var s = window.getSelection();
          s.removeAllRanges();
          s.addRange(r);
          done("Selected");
        }
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { done("Copied"); }, fallback);
        } else { fallback(); }
      } catch (e) { fallback(); }
    });
  });

  /* ------------------------------------------------------------ back to top */
  var topBtn = document.getElementById("to-top");
  if (topBtn) {
    var onScroll = function () { topBtn.classList.toggle("is-on", window.scrollY > 700); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    topBtn.addEventListener("click", function () {
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* ------------------------------------- print every collapsed list in full */
  var openedForPrint = [];
  window.addEventListener("beforeprint", function () {
    openedForPrint = Array.prototype.filter.call(document.querySelectorAll("details:not([open])"), function (d) { d.open = true; return true; });
  });
  window.addEventListener("afterprint", function () {
    openedForPrint.forEach(function (d) { d.open = false; });
    openedForPrint = [];
  });

  /* ------------------------------------------- external links in a new tab */
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="http"]'), function (a) {
    if (a.hostname && a.hostname !== location.hostname) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });
})();
