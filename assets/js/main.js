/* ═══════════════════════════════════════════════════════════
   NASH369 - JavaScript Main
   Automatisation & Solutions Digitales PME
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     MOBILE MENU TOGGLE
     ═══════════════════════════════════════════════════════════ */

  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navbarLinks = navbarMenu.querySelectorAll('a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navbarMenu.contains(event.target);
      const isClickOnToggle = navbarToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && navbarMenu.classList.contains('active')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     SMOOTH SCROLL FOR ANCHOR LINKS
     ═══════════════════════════════════════════════════════════ */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Don't prevent default for # only links
      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const anchorNavHeight = document.querySelector('.anchor-nav')?.offsetHeight || 0;
        const offset = navbarHeight + anchorNavHeight + 20;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ═══════════════════════════════════════════════════════════
     SCROLL ANIMATIONS
     ═══════════════════════════════════════════════════════════ */

  const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    scrollAnimateElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    scrollAnimateElements.forEach(element => {
      element.classList.add('visible');
    });
  }

  /* ═══════════════════════════════════════════════════════════
     FORM VALIDATION
     ═══════════════════════════════════════════════════════════ */

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#E63946';

          // Add error message if not exists
          if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#E63946';
            errorMsg.style.fontSize = '0.875rem';
            errorMsg.style.marginTop = '0.25rem';
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'Ce champ est requis';
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
          }
        } else {
          field.style.borderColor = '';

          // Remove error message if exists
          if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
            field.nextElementSibling.remove();
          }
        }
      });

      // Email validation
      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.value && !emailRegex.test(field.value)) {
          isValid = false;
          field.style.borderColor = '#E63946';

          if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#E63946';
            errorMsg.style.fontSize = '0.875rem';
            errorMsg.style.marginTop = '0.25rem';
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'Email invalide';
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });

    // Remove error styling on input
    const formFields = form.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        if (this.nextElementSibling && this.nextElementSibling.classList.contains('error-message')) {
          this.nextElementSibling.remove();
        }
      });
    });
  });

  /* ═══════════════════════════════════════════════════════════
     NAVBAR SCROLL EFFECT
     ═══════════════════════════════════════════════════════════ */

  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  if (navbar) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Add shadow on scroll
      if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }

      lastScrollTop = scrollTop;
    });
  }

  /* ═══════════════════════════════════════════════════════════
     ACTIVE ANCHOR NAV ITEM
     ═══════════════════════════════════════════════════════════ */

  const anchorNav = document.querySelector('.anchor-nav');

  if (anchorNav) {
    const anchorNavLinks = anchorNav.querySelectorAll('a');
    const sections = [];

    anchorNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          sections.push({ link, section });
        }
      }
    });

    window.addEventListener('scroll', function() {
      let currentSection = null;
      const scrollPosition = window.pageYOffset + 150;

      sections.forEach(({ section }) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      sections.forEach(({ link, section }) => {
        if (section === currentSection) {
          link.style.backgroundColor = '#E63946';
          link.style.color = '#FFFFFF';
        } else {
          link.style.backgroundColor = '';
          link.style.color = '';
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     PARTICLES BACKGROUND EFFECT (2026 STYLE)
     ═══════════════════════════════════════════════════════════ */

  const hero = document.querySelector('.hero');

  if (hero) {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let mouse = {
      x: null,
      y: null,
      radius: 150
    };

    // Set canvas size
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    // Resize canvas on window resize
    window.addEventListener('resize', function() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      init();
    });

    // Mouse position tracking
    hero.addEventListener('mousemove', function(event) {
      const rect = hero.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', function() {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;

        // Random colors from brand palette
        const colors = [
          'rgba(230, 57, 70, 0.8)',   // Primary red
          'rgba(42, 157, 143, 0.8)',  // Secondary green
          'rgba(241, 250, 238, 0.6)'  // Light
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }

        // Floating animation
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }
      }
    }

    // Initialize particles
    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 15000;

      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    // Connect particles with lines
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            opacityValue = 1 - (distance / 100);
            ctx.strokeStyle = 'rgba(230, 57, 70,' + opacityValue + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }

      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }

  /* ═══════════════════════════════════════════════════════════
     ROTATING TEXT CAROUSEL
     ═══════════════════════════════════════════════════════════ */

  // Carousel pour hero-trust (30+ PME accompagnées • 4.9/5 satisfaction • Montpellier)
  const heroTrust = document.querySelector('.hero-trust');

  if (heroTrust) {
    const messages = [
      '30+ PME accompagnées • 4.9/5 satisfaction • Montpellier',
      '500+ heures économisées clients',
      '30K+ posts réseaux sociaux automatisés',
      '5000+ avis Google générés',
      '100% clients satisfaits'
    ];

    let currentIndex = 0;

    function rotateMessage() {
      // Fade out
      heroTrust.style.opacity = '0';
      heroTrust.style.transition = 'opacity 0.5s ease';

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        heroTrust.textContent = messages[currentIndex];

        // Fade in
        heroTrust.style.opacity = '1';
      }, 500);
    }

    // Change message every 3 seconds
    setInterval(rotateMessage, 3000);
  }

  // Carousel pour les stats (500+, 30K+, 5000+, 100%)
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach(statNumber => {
    const originalText = statNumber.textContent;

    // Animation de compteur pour les stats au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(statNumber, originalText);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statNumber);
  });

  function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const isPercentage = target.includes('%');
    const hasPlus = target.includes('+');
    const hasK = target.includes('K');

    // Extract number
    let targetNumber = parseInt(target.replace(/[^\d]/g, ''));

    if (hasK) {
      targetNumber = targetNumber * 1000;
    }

    const increment = targetNumber / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= targetNumber) {
        current = targetNumber;
        clearInterval(timer);
      }

      let displayValue = Math.floor(current);

      if (hasK && displayValue >= 1000) {
        displayValue = (displayValue / 1000).toFixed(0) + 'K';
      }

      if (hasPlus) {
        displayValue += '+';
      }

      if (isPercentage) {
        displayValue += '%';
      }

      element.textContent = displayValue;
    }, 16);
  }

  /* ═══════════════════════════════════════════════════════════
     CONSOLE MESSAGE
     ═══════════════════════════════════════════════════════════ */

  console.log('%cNASH369', 'font-size: 24px; font-weight: bold; color: #E63946;');
  console.log('%cAutomatisation & Solutions Digitales PME', 'font-size: 14px; color: #2A9D8F;');
  console.log('%cIntéressé par nos services ? Contactez-nous : contact@nash369.com', 'font-size: 12px; color: #1D3557;');

})();
