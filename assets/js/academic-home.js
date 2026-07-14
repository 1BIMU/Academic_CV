(function () {
  "use strict";

  document.documentElement.classList.add("js-ready");

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      try {
        document.execCommand("copy") ? resolve() : reject(new Error("Copy failed"));
      } catch (error) {
        reject(error);
      }
      document.body.removeChild(helper);
    });
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-copy-citation]");
    if (!button) return;

    var container = button.closest(".research-card, .citation-box");
    var source = container && container.querySelector(".citation-source");
    if (!source) return;

    var label = button.querySelector("[data-copy-label]");
    var originalLabel = label ? label.textContent : "Copy BibTeX";

    copyText(source.value.trim()).then(function () {
      button.classList.add("is-copied");
      if (label) label.textContent = "Copied!";
      button.setAttribute("aria-label", "BibTeX copied");
      window.setTimeout(function () {
        button.classList.remove("is-copied");
        if (label) label.textContent = originalLabel;
        button.setAttribute("aria-label", "Copy BibTeX citation");
      }, 1800);
    }).catch(function () {
      if (label) label.textContent = "Select & copy";
      source.removeAttribute("aria-hidden");
      source.removeAttribute("tabindex");
      source.classList.add("citation-source--fallback");
      source.focus();
      source.select();
    });
  });

  var revealItems = document.querySelectorAll("[data-reveal]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  revealItems.forEach(function (item, index) {
    item.style.setProperty("--reveal-delay", Math.min(index % 4, 3) * 70 + "ms");
    observer.observe(item);
  });
}());
