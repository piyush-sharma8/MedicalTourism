// ============================================================
// MOBILE HAMBURGER MENU — FIXED VERSION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  const body = document.body;

  // ===== HAMBURGER TOGGLE =====
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      mainNav.classList.toggle('open');
      
      // Body scroll lock
      if (mainNav.classList.contains('open')) {
        body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
      } else {
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ===== CLOSE MENU ON LINK CLICK (Mobile) =====
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ===== CLOSE MENU ON OUTSIDE CLICK =====
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = mainNav.contains(e.target);
      const isClickOnHamburger = hamburger.contains(e.target);
      
      if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('open')) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // ===== DROPDOWN TOGGLE FOR MOBILE =====
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        const parent = this.closest('.dropdown');
        parent.classList.toggle('open');
      }
    });
  });

  // ===== BACK TO TOP BUTTON =====
  const backBtn = document.getElementById('backToTop');
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

  // ===== SCROLL REVEAL (Intersection Observer) =====
  const revealElements = document.querySelectorAll(
    '.section-header, .explore-card, .treatment-card, .hospital-card, ' +
    '.india-item, .why-card, .journey-step, .testimonial-card'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  // ===== ACTIVE NAV LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== GOOGLE FORM URL (replace once) =====
  const GOOGLE_FORM_URL = 'YOUR_GOOGLE_FORM_URL_HERE';
  console.log('Google Form URL placeholder:', GOOGLE_FORM_URL);

  // ===== RESIZE HANDLER: Close menu on resize to desktop =====
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      if (mainNav.classList.contains('open')) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });

});
