// ========== SLG HOUSEKEEPING SERVICES - MAIN SCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
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

    // ===== GSAP STACKED CARDS =====
    if (window.gsap) {
      if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }

      const stackedGroups = document.querySelectorAll('[data-stack-cards]');

      stackedGroups.forEach(group => {
        const cards = group.querySelectorAll('[data-stack-card]');
        if (!cards.length) return;

        window.gsap.set(cards, {
          transformOrigin: 'center top',
          willChange: 'transform'
        });

        const timelineConfig = {
          defaults: { ease: 'power3.out' }
        };

        if (window.ScrollTrigger) {
          timelineConfig.scrollTrigger = {
            trigger: group,
            start: 'top 85%',
            once: true
          };
        }

        const tl = window.gsap.timeline(timelineConfig);

        tl.from(cards, {
          y: (index) => (cards.length - index - 1) * 18,
          rotate: (index) => (cards.length / 2 - index) * 2.5,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          immediateRender: false
        });
      });
    }
  });
  
