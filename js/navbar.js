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

  // Helper function to close menu
  function closeMenu() {
    navLinks.classList.remove('active');
    if (menuIcon) menuIcon.className = 'fas fa-bars';
    document.body.style.overflow = '';
  }

  // Toggle menu on button click
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    
    // Change icon and body overflow
    if (navLinks.classList.contains('active')) {
      if (menuIcon) menuIcon.className = 'fas fa-times';
      document.body.style.overflow = 'hidden';
    } else {
      closeMenu();
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Set active link based on current page
  setActiveLink();
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      if (navLinks.classList.contains('active')) {
        closeMenu();
      }
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  // Handle buttons visibility on mobile
  function hideButtonsOnMobile() {
    // Update selector based on your actual HTML structure
    const buttons = document.querySelectorAll('.nav-actions button, .nav-actions .settings-btn');
    
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

  // Initialize button visibility
  hideButtonsOnMobile();

  // Handle window resize with debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Close menu if switching to desktop view
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        closeMenu();
      }
      // Update button visibility
      hideButtonsOnMobile();
    }, 250);
  });

  // Logo click handler
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  }
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

// Initialize navbar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}