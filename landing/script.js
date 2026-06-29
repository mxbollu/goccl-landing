(function () {
  const panels = Array.from(document.querySelectorAll("[data-screen-panel]"));
  const root = document.documentElement;
  let ticking = false;

  function clamp(value) {
    return Math.min(1, Math.max(0, value));
  }

  function update() {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight || root.clientHeight;
    const maxScroll = Math.max(1, root.scrollHeight - viewportHeight);

    root.style.setProperty("--page-progress", (scrollY / maxScroll).toFixed(4));

    panels.forEach((panel) => {
      const panelTop = panel.offsetTop;
      const distance = Math.max(1, panel.offsetHeight - viewportHeight);
      const progress = clamp((scrollY - panelTop) / distance);
      const image = panel.querySelector(".screen-image");
      const imageHeight = image ? image.getBoundingClientRect().height : 0;
      const maxLift = Math.max(0, imageHeight - viewportHeight + 128);

      panel.style.setProperty("--progress", progress.toFixed(4));
      panel.style.setProperty("--lift", `${Math.round(progress * maxLift)}px`);
      panel.classList.toggle(
        "is-active",
        progress > 0.02 && progress < 0.98
      );
    });

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", update);
  update();
})();
