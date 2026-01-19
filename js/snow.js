document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    count: 50,
    chars: ['❄', '❅', '❆', '•', '❄️', '✴︎'],
    key: 'snowEnabled' 
  };

  const btn = document.querySelector('.snow-toggle-btn');
  if (!btn) return;

 
  let isEnabled = localStorage.getItem(CONFIG.key) !== 'false';

  // --- Core Functions ---

  const createSnowflake = () => {
    if (!isEnabled) return;

    const flake = document.createElement('div');
    flake.classList.add('snowflake-item');
    flake.textContent = CONFIG.chars[Math.floor(Math.random() * CONFIG.chars.length)];

    const size = Math.random() * 1.5 + 0.5;
    const duration = Math.random() * 8 + 8;
    const drift = (Math.random() - 0.5) * 200;
    
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.fontSize = `${size}em`;
    flake.style.top = '-50px'; 
    flake.style.setProperty('--drift', `${drift}px`);
    
    const delay = Math.random() * 15;
    flake.style.animation = `snowfall ${duration}s linear ${delay}s infinite`;

    document.body.appendChild(flake);
  };

  const initSnowfall = () => {
 
    if (document.querySelector('.snowflake-item')) return;

    let created = 0;
    const batchCreate = () => {
    
      if (!isEnabled) return; 
      
      for (let i = 0; i < 5 && created < CONFIG.count; i++) {
        createSnowflake(); 
        created++;
      }
      if (created < CONFIG.count) requestAnimationFrame(batchCreate);
    };
    batchCreate();
  };

  const clearSnow = () => {
    document.querySelectorAll('.snowflake-item').forEach(el => el.remove());
  };

  const createRipple = (e) => {
    const wave = document.createElement('span');
    wave.className = 'wave';
    const rect = btn.getBoundingClientRect();
    wave.style.left = `${e.clientX - rect.left}px`;
    wave.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove());
  };

  // --- State Management ---

  const updateState = (active) => {
    isEnabled = active;
    localStorage.setItem(CONFIG.key, active); 
    
    if (active) {
      btn.classList.add('active');
      initSnowfall();
    } else {
      btn.classList.remove('active');
      clearSnow();
    }
  };

  // --- Event Listeners ---

  btn.addEventListener('click', (e) => {
    createRipple(e);
    updateState(!isEnabled);
  });

  // --- Initial Setup ---
  
  setTimeout(() => btn.classList.add('show'), 100);

  updateState(isEnabled);
});