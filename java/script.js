// ============================================================
// MOBILE HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
if (!hamburger) return;
const mainNav = document.getElementById('mainNav');
 if (!mainNav) return;     // ← YEH LINE BHI ADD KARO (AGAR HAI TOH)
  

if (hamburger && mainNav) {
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mainNav.classList.toggle('open');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click (for mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mainNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ============================================================
// DROPDOWN TOGGLE FOR MOBILE
// ============================================================
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.closest('.dropdown');
      parent.classList.toggle('open');
    }
  });
});

// ============================================================
// BACK TO TOP BUTTON
// ============================================================
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// SCROLL REVEAL (Intersection Observer)
// ============================================================
const revealElements = document.querySelectorAll('.section-header, .explore-card, .treatment-card, .hospital-card, .india-item, .why-card, .journey-step, .testimonial-card');

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

// ============================================================
// MARQUEE PAUSE ON HOVER (already handled in CSS)
// ============================================================

// ============================================================
// ACTIVE NAV LINK (based on current page)
// ============================================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-list a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ============================================================
// GOOGLE FORM PLACEHOLDER — REPLACE THIS URL
// ============================================================
const GOOGLE_FORM_URL = 'YOUR_GOOGLE_FORM_URL_HERE';
// All "Get Medical Assistance" or form buttons should use this variable.
// In HTML, use: <a href="YOUR_GOOGLE_FORM_URL_HERE" ...>
console.log('Google Form URL placeholder:', GOOGLE_FORM_URL);

// ============================================================
// WHATSAPP & PHONE PLACEHOLDERS
// ============================================================
// Replace these in all HTML files:
// 
// +918529924513
// piyushsharma8529@gmail.com
