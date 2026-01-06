/* ===================================
   SNOWFALL EFFECT
=================================== */

const SNOWFLAKE_COUNT = 50; 
const snowflakes = [];
const snowChars = ['❄', '❅', '❆', '•', '❄️', '✴︎'];
let snowEnabled = localStorage.getItem('snowEnabled') !== 'false';
let cleanupInterval = null;
let snowCreationTimeouts = []; 


function createSnowflake(immediate = false) {
  if (!snowEnabled) return;
  
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake-item';
  snowflake.style.cssText = `
    position: fixed;
    top: -10px;
    z-index: 9999;
    user-select: none;
    cursor: default;
    color: white;
    opacity: 0.8;
    pointer-events: none;
    will-change: transform;
  `;
  

  snowflake.textContent = snowChars[Math.floor(Math.random() * snowChars.length)];
  

  const size = Math.random() * 1.5 + 0.5;
  snowflake.style.fontSize = size + 'em';

  snowflake.style.left = Math.random() * 100 + 'vw';
  

  const duration = Math.random() * 8 + 8;
  

  const drift = (Math.random() - 0.5) * 100;
  

  const delay = immediate ? 0 : Math.random() * 1;
  

  snowflake.style.animation = `snowfall ${duration}s linear ${delay}s infinite`;
  snowflake.style.setProperty('--drift', drift + 'px');
  

  if (immediate && Math.random() > 0.5) {
    snowflake.style.top = (Math.random() * 50) + 'vh';
  }
  
  document.body.appendChild(snowflake);
  snowflakes.push(snowflake);
}


function initSnowfall() {
  if (!snowEnabled) return;
  

  clearAllSnowTimeouts();
  

  for (let i = 0; i < SNOWFLAKE_COUNT / 2; i++) {
    createSnowflake(true);
  }
  

  for (let i = 0; i < SNOWFLAKE_COUNT / 2; i++) {
    const timeout = setTimeout(() => {
      if (snowEnabled) createSnowflake(false);
    }, i * 50);
    snowCreationTimeouts.push(timeout);
  }
}

function clearAllSnowTimeouts() {
  snowCreationTimeouts.forEach(timeout => clearTimeout(timeout));
  snowCreationTimeouts = [];
}


function removeAllSnowflakes() {
  clearAllSnowTimeouts();

  document.querySelectorAll('.snowflake-item').forEach(flake => {
    flake.style.animation = 'none';
    flake.remove();
  });

  snowflakes.length = 0;
}


function createWave(e) {
  const button = e.currentTarget;
  const wave = document.createElement('span');
  wave.classList.add('wave');
  button.appendChild(wave);
  setTimeout(() => wave.remove(), 500);
}

function toggleSnow(e) {

  if (e) createWave(e);
  
  const btn = document.getElementById('snowToggle');
  if (!btn) return;
  
  const icon = btn.querySelector('i');
  
  if (!snowEnabled) {

    snowEnabled = true;
    localStorage.setItem('snowEnabled', 'true'); 
    btn.classList.add('active');
    if (icon) icon.className = 'fas fa-snowflake';
    initSnowfall();
  } else {

    snowEnabled = false;
    localStorage.setItem('snowEnabled', 'false'); 
    btn.classList.remove('active');
    if (icon) icon.className = 'fas fa-times';
    removeAllSnowflakes();
  }
}


function cleanupOldSnowflakes() {
  if (!snowEnabled) return;
  
  const oldSnowflakes = document.querySelectorAll('.snowflake-item');
  if (oldSnowflakes.length > SNOWFLAKE_COUNT * 2) {

    oldSnowflakes[0]?.remove();
  }
}


function init() {

  const toggleBtn = document.getElementById('snowToggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    
    if (snowEnabled) {

      toggleBtn.classList.add('active');
      if (icon) icon.className = 'fas fa-snowflake';
      initSnowfall();
    } else {

      toggleBtn.classList.remove('active');
      if (icon) icon.className = 'fas fa-times';
    }
    

    toggleBtn.addEventListener('click', toggleSnow);
  }
  

  if (cleanupInterval) {
    clearInterval(cleanupInterval);
  }
  cleanupInterval = setInterval(cleanupOldSnowflakes, 5000);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addEventListener('beforeunload', () => {
  if (cleanupInterval) {
    clearInterval(cleanupInterval);
  }
});