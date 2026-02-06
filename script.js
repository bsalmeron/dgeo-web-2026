(function(){
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle?.querySelector('.theme__icon');
  const text = themeToggle?.querySelector('.theme__text');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Theme: default light
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') body.classList.add('dark');
  updateThemeUI();

  themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeUI();
  });

  function updateThemeUI(){
    const dark = body.classList.contains('dark');
    if (icon) icon.textContent = dark ? '🌙' : '☀️';
    if (text) text.textContent = dark ? 'Oscuro' : 'Claro';
  }

  // Mobile nav
  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close mobile nav after click
  navMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navMenu.classList.contains('open')){
        navMenu.classList.remove('open');
        navToggle?.setAttribute('aria-expanded','false');
      }
    });
  });
})();