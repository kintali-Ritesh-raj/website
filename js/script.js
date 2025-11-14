// ========== SLG HOUSEKEEPING SERVICES - MAIN SCRIPT ==========

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  
  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== SCROLL REVEAL ANIMATION =====
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
});

