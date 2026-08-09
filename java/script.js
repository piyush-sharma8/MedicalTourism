// ============================================================
// SIMPLE MOBILE MENU — 100% WORKING
// ============================================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

  // Get menu elements
  var hamburger = document.getElementById('hamburger');
  var mainNav = document.getElementById('mainNav');
  var body = document.body;

  // ===== HAMBURGER CLICK — OPEN/CLOSE MENU =====
  if (hamburger && mainNav) {
    
    hamburger.onclick = function() {
      // Toggle class on hamburger
      this.classList.toggle('active');
      // Toggle class on nav
      mainNav.classList.toggle('open');
      
      // Lock body scroll when menu is open
      if (mainNav.classList.contains('open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    };

    // ===== CLOSE MENU WHEN ANY LINK IS CLICKED =====
    var allLinks = mainNav.querySelectorAll('a');
    for (var i = 0; i < allLinks.length; i++) {
      allLinks[i].onclick = function() {
        // Close menu on mobile only
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          mainNav.classList.remove('open');
          body.style.overflow = '';
        }
      };
    }

    // ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
    document.onclick = function(event) {
      if (window.innerWidth <= 768) {
        var isClickInsideNav = mainNav.contains(event.target);
        var isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger) {
          hamburger.classList.remove('active');
          mainNav.classList.remove('open');
          body.style.overflow = '';
        }
      }
    };

  } // end if hamburger exists

  // ===== DROPDOWN ON MOBILE =====
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  for (var i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].onclick = function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var parent = this.parentElement;
        parent.classList.toggle('open');
      }
    };
  }

  // ===== BACK TO TOP BUTTON =====
  var backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.onscroll = function() {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    };
    backBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // ===== SCROLL REVEAL =====
  var revealElements = document.querySelectorAll(
    '.section-header, .explore-card, .treatment-card, .hospital-card, ' +
    '.india-item, .why-card, .journey-step, .testimonial-card'
  );

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.style.opacity = '1';
          entries[i].target.style.transform = 'translateY(0)';
        }
      }
    }, { threshold: 0.1 });

    for (var i = 0; i < revealElements.length; i++) {
      revealElements[i].style.opacity = '0';
      revealElements[i].style.transform = 'translateY(30px)';
      revealElements[i].style.transition = 'opacity 0.7s, transform 0.7s';
      observer.observe(revealElements[i]);
    }
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

  // ===== CLOSE MENU ON WINDOW RESIZE (Desktop) =====
  window.onresize = function() {
    if (window.innerWidth > 768) {
      if (mainNav && mainNav.classList.contains('open')) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
      }
    }
  };

  console.log('✅ HealVoyage JavaScript loaded successfully!');

});
