// ============================================================
// SIMPLE MOBILE MENU — 100% WORKING
// ============================================================

// Wait for page to load completely
document.addEventListener('DOMContentLoaded', function() {

  console.log('✅ JavaScript loaded!');

  // Get elements
  var hamburger = document.getElementById('hamburger');
  var mainNav = document.getElementById('mainNav');
  var body = document.body;

  // Check if elements exist
  console.log('hamburger:', hamburger);
  console.log('mainNav:', mainNav);

  // ===== HAMBURGER CLICK =====
  if (hamburger && mainNav) {
    
    hamburger.addEventListener('click', function() {
      console.log('Hamburger clicked!');
      this.classList.toggle('active');
      mainNav.classList.toggle('open');
      
      if (mainNav.classList.contains('open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // ===== CLOSE MENU ON LINK CLICK =====
    var allLinks = mainNav.querySelectorAll('a');
    for (var i = 0; i < allLinks.length; i++) {
      allLinks[i].addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          mainNav.classList.remove('open');
          body.style.overflow = '';
        }
      });
    }

    // ===== CLOSE MENU ON OUTSIDE CLICK =====
    document.addEventListener('click', function(event) {
      if (window.innerWidth <= 768) {
        var isClickInsideNav = mainNav.contains(event.target);
        var isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('open')) {
          hamburger.classList.remove('active');
          mainNav.classList.remove('open');
          body.style.overflow = '';
        }
      }
    });

  } else {
    console.error('❌ Hamburger or MainNav not found!');
  }

  // ===== DROPDOWN ON MOBILE =====
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  for (var i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var parent = this.parentElement;
        parent.classList.toggle('open');
      }
    });
  }

  // ===== BACK TO TOP =====
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== ACTIVE NAV LINK =====
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-list a');
  for (var i = 0; i < navLinks.length; i++) {
    var href = navLinks[i].getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      navLinks[i].classList.add('active');
    }
  }

  // ===== CLOSE MENU ON RESIZE =====
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      if (mainNav && mainNav.classList.contains('open')) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
      }
    }
  });

});
