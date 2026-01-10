/* ===================================
   SNOWFALL EFFECT - FIXED VERSION
=================================== */

const SNOWFLAKE_COUNT = 50; 
const snowChars = ['❄', '❅', '❆', '•', '❄️', '✴︎'];
let snowEnabled = localStorage.getItem('snowEnabled') !== 'false';
let cleanupInterval = null;

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
  
  // Start from random position if immediate
  if (immediate && Math.random() > 0.5) {
    snowflake.style.top = (Math.random() * 50) + 'vh';
  }
  
  document.body.appendChild(snowflake);
  
  // Auto-remove when animation completes (if snow is disabled)
  snowflake.addEventListener('animationiteration', () => {
    if (!snowEnabled) {
      snowflake.remove();
    }
  });
}

function initSnowfall() {
  if (!snowEnabled) return;
  
  let created = 0;
  
  // Create snowflakes in batches for better performance
  const createBatch = () => {
    for (let i = 0; i < 5 && created < SNOWFLAKE_COUNT; i++) {
      createSnowflake(created < SNOWFLAKE_COUNT / 2);
      created++;
    }
    if (created < SNOWFLAKE_COUNT) {
      requestAnimationFrame(createBatch);
    }
  };
  
  createBatch();
}

function removeAllSnowflakes() {
  document.querySelectorAll('.snowflake-item').forEach(flake => {
    flake.style.animation = 'none';
    flake.remove();
  });
}

function createWave(e) {
  const button = e.currentTarget;
  const wave = document.createElement('span');
  wave.classList.add('wave');
  
  // Position wave at click location
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  wave.style.left = x + 'px';
  wave.style.top = y + 'px';
  
  button.appendChild(wave);
  setTimeout(() => wave.remove(), 500);
}

function toggleSnow(e) {
  if (e) createWave(e);
  
  const btn = document.getElementById('snowToggle');
  if (!btn) return;
  
  const icon = btn.querySelector('i');
  
  if (!snowEnabled) {
    // Enable snow
    snowEnabled = true;
    localStorage.setItem('snowEnabled', 'true'); 
    btn.classList.add('active');
    if (icon) icon.className = 'fas fa-snowflake';
    initSnowfall();
  } else {
    // Disable snow
    snowEnabled = false;
    localStorage.setItem('snowEnabled', 'false'); 
    btn.classList.remove('active');
    if (icon) icon.className = 'fas fa-times';
    removeAllSnowflakes();
  }
}

function cleanupOldSnowflakes() {
  if (!snowEnabled) return;
  
  const allSnowflakes = document.querySelectorAll('.snowflake-item');
  
  // If we have too many snowflakes, remove the excess
  if (allSnowflakes.length > SNOWFLAKE_COUNT * 2) {
    const excess = allSnowflakes.length - SNOWFLAKE_COUNT;
    for (let i = 0; i < excess; i++) {
      allSnowflakes[i]?.remove();
    }
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
  
  // Cleanup old snowflakes periodically
  if (cleanupInterval) {
    clearInterval(cleanupInterval);
  }
  cleanupInterval = setInterval(cleanupOldSnowflakes, 5000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (cleanupInterval) {
    clearInterval(cleanupInterval);
  }
});

// Show snow button with animation
window.addEventListener('load', () => {
  const snowBtn = document.querySelector('.snow-toggle-btn');
  if (snowBtn) {
    snowBtn.classList.add('show');
  }
});