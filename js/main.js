// ================================================================
// AgenciaService — Orchestration de l'expérience
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  const intro       = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');
  const skipBtn     = document.getElementById('skip-btn');
  const introLogo   = document.getElementById('intro-logo');
  const loadingWrap = document.getElementById('loading-wrap');

  // ── RÉVÉLATION DU CONTENU ───────────────────────────────────────
  function revealContent() {
    // 1. Cache la barre de chargement
    if (loadingWrap) loadingWrap.style.opacity = '0';

    // 2. Apparition du logo d'intro
    gsap.to(introLogo, {
      opacity: 1,
      y: 0,
      duration: 1.6,
      ease: 'power3.out',
      delay: 0.2,
    });

    // 3. Après un moment, fondu vers le contenu principal
    setTimeout(() => {
      gsap.to(intro, {
        opacity: 0,
        duration: 1.8,
        ease: 'power2.inOut',
        onComplete: () => {
          intro.style.display = 'none';
          mainContent.classList.add('visible');
          animateHero();
        },
      });
    }, 2800);
  }

  // ── ANIMATION HERO ──────────────────────────────────────────────
  function animateHero() {
    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 1, ease: 'power2.out', delay: 0.1 });
    gsap.from('.hero-title',   { opacity: 0, y: 40, duration: 1.2, ease: 'power3.out', delay: 0.3 });
    gsap.from('.hero-sub',     { opacity: 0, y: 30, duration: 1, ease: 'power2.out', delay: 0.6 });
    gsap.from('.hero-cta',     { opacity: 0, y: 20, duration: 0.9, ease: 'power2.out', delay: 0.9 });
    gsap.from('.scroll-hint',  { opacity: 0, duration: 1, delay: 1.8 });
  }

  // ── ANIMATIONS AU SCROLL ─────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .card-reveal, .line-reveal').forEach(el => observer.observe(el));

  // ── NAVIGATION TRANSPARENTE ──────────────────────────────────────
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── SKIP ─────────────────────────────────────────────────────────
  skipBtn.addEventListener('click', () => {
    if (window.AgenciaScene) window.AgenciaScene.skip();
    else revealContent();
  });

  // ── CONNEXION SCÈNE ──────────────────────────────────────────────
  if (window.AgenciaScene) {
    window.AgenciaScene.onDone(revealContent);
  } else {
    // Fallback si Three.js ne charge pas
    setTimeout(revealContent, 500);
  }

});
