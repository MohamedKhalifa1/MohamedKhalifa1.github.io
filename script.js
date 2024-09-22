const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  let theme = 'light';
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
  }

  localStorage.setItem('theme', theme);
});
