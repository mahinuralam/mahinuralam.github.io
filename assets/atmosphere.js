(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.motion-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  try { paused = localStorage.getItem('portfolio-motion-paused') === 'true'; } catch (_) {}

  function syncMotion() {
    root.dataset.motion = paused || reducedMotion.matches ? 'paused' : 'running';
    toggle.hidden = reducedMotion.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume background motion' : 'Pause background motion';
  }
  toggle.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('portfolio-motion-paused', String(paused)); } catch (_) {}
    syncMotion();
  });
  reducedMotion.addEventListener('change', syncMotion);
  function syncVisibility() { root.dataset.pageHidden = String(document.hidden); }
  document.addEventListener('visibilitychange', syncVisibility);
  syncVisibility();
  syncMotion();
})();
