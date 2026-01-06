// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check saved theme
const savedTheme = sessionStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    sessionStorage.setItem('theme', 'light');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    sessionStorage.setItem('theme', 'dark');
  }
});

setTimeout(() => {
  themeToggle.classList.add('show');
}, 100);
