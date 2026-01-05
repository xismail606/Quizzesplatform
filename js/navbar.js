/* ===================================
   Navigation Bar 
=================================== */

function initNavbar() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (!menuToggle || !navLinks) {
    console.warn('Navigation elements not found');
    return;
  }
  
  const menuIcon = menuToggle.querySelector('i');

  // Toggle menu on button click
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    
    // Change icon
    if (navLinks.classList.contains('active')) {
      if (menuIcon) menuIcon.className = 'fas fa-times';
      document.body.style.overflow = 'hidden'; 
    } else {
      if (menuIcon) menuIcon.className = 'fas fa-bars';
      document.body.style.overflow = ''; 
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      if (menuIcon) {
        menuIcon.className = 'fas fa-bars';
      }
      document.body.style.overflow = ''; 
    });
  });

  // Set active link based on current page
  setActiveLink();
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuIcon) {
          menuIcon.className = 'fas fa-bars';
        }
        document.body.style.overflow = ''; 
      }
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      if (menuIcon) {
        menuIcon.className = 'fas fa-bars';
      }
      document.body.style.overflow = '';
    }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuIcon) {
          menuIcon.className = 'fas fa-bars';
        }
        document.body.style.overflow = '';
      }
    }, 250);
  });

  function hideButtonsOnMobile() {
    const buttons = navLinks.querySelectorAll('button, .settings-btn, i.fa-cog, i.fa-gear');
    if (window.innerWidth <= 768) {
      buttons.forEach(btn => {
        btn.style.display = 'none';
      });
    } else {
      buttons.forEach(btn => {
        btn.style.display = '';
      });
    }
  }

  //resize
  hideButtonsOnMobile();
  window.addEventListener('resize', hideButtonsOnMobile);
}

// Set active link based on current page
function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.links a').forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Manually set active page (optional function)
function setActivePage(page) {
  document.querySelectorAll('.links a').forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
document.querySelector('.logo').addEventListener('click', () => {
  window.location.href = './index.html';
});

// Initialize navbar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}