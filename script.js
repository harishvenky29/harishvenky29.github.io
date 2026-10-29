// Harish Venkatesan portfolio: site-wide behaviour
// (mobile navigation menu and footer year)
(function () {
  // ── Footer year ──
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ── Mobile navigation menu ──
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });
  // close after choosing a section, tapping elsewhere, or pressing Escape
  nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); toggle.focus(); }
  });
  // reset if the window grows past the phone layout
  window.matchMedia('(min-width: 768px)').addEventListener('change', m => { if (m.matches) setOpen(false); });
})();