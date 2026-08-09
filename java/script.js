// ============================================================
// SUPER SIMPLE MOBILE MENU
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  
  if (hamburger && nav) {
    
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('open');
    });
    
    // Menu close on link click
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          nav.classList.remove('open');
        }
      });
    });
    
  }
  
  // Dropdown on mobile
  document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });
  
  // Back to top
  var backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });
    backBtn.addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
  
  // Active link
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function(link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
  
});
