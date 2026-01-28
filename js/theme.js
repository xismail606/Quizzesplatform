const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const applyTheme = (theme) => {
  if (theme === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }
};

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);


themeToggle.addEventListener('click', () => {

  const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  applyTheme(newTheme);
});

setTimeout(() => {
  themeToggle.classList.add('show');
}, 100);