// ================================================================
// AgenciaService — Orchestration : Lenis + GSAP ScrollTrigger
// ================================================================

// ── GSAP ─────────────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// ── LENIS SMOOTH SCROLL ──────────────────────────────────────────
const lenis = new Lenis({
  duration:  1.3,
  easing:    t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

lenis.on('scroll', ScrollTrigger.update);

// ── ÉLÉMENTS DOM ─────────────────────────────────────────────────
const intro       = document.getElementById('intro');
const mainContent = document.getElementById('main-content');
const skipBtn     = document.getElementById('skip-btn');
const introLogo   = document.getElementById('intro-logo');
const loadingWrap = document.getElementById('loading-wrap');

// ── NAVIGATION ─────────────────────────────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── FONCTIONS UTILITAIRES ────────────────────────────────────────
function fadeOut(el, duration, cb) {
  gsap.to(el, { opacity: 0, duration, ease: 'power2.inOut', onComplete: cb });
}

// ── RÉVÉLATION HERO ──────────────────────────────────────────────
function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.hero-eyebrow', { opacity: 0, y: 18, duration: 0.9 })
    .from('.hero-title',   { opacity: 0, y: 45, duration: 1.1 }, '-=0.5')
    .from('.hero-sub',     { opacity: 0, y: 28, duration: 0.9 }, '-=0.6')
    .from('.hero-cta',     { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
    .from('.scroll-hint',  { opacity: 0, duration: 1 },          '-=0.2');
}

// ── SÉQUENCE INTRO → CONTENU ──────────────────────────────────────
function revealContent() {
  if (loadingWrap) gsap.to(loadingWrap, { opacity: 0, duration: 0.5 });

  // Logo d'intro apparaît
  gsap.to(introLogo, {
    opacity: 1, y: 0, duration: 1.7, ease: 'power3.out', delay: 0.15,
  });

  // Après un moment : transition vers le contenu
  setTimeout(() => {
    gsap.to(intro, {
      opacity: 0,
      duration: 1.8,
      ease: 'power2.inOut',
      onComplete: () => {
        intro.style.display = 'none';
        mainContent.classList.add('visible');
        animateHero();
        initScrollAnimations();
      },
    });
  }, 3000);
}

// ── ANIMATIONS SCROLL ────────────────────────────────────────────
function initScrollAnimations() {

  // ── Services : sticky reveal ─────────────────────────────────
  gsap.from('.services-left .section-label', {
    scrollTrigger: { trigger: '.services', start: 'top 75%' },
    opacity: 0, x: -30, duration: 0.9, ease: 'power2.out',
  });
  gsap.from('.services-left .section-title', {
    scrollTrigger: { trigger: '.services', start: 'top 70%' },
    opacity: 0, x: -40, duration: 1.1, ease: 'power3.out', delay: 0.12,
  });
  gsap.from('.services-left .section-sub', {
    scrollTrigger: { trigger: '.services', start: 'top 65%' },
    opacity: 0, x: -25, duration: 0.9, ease: 'power2.out', delay: 0.25,
  });
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 82%' },
      opacity: 0, x: 40, duration: 0.8, ease: 'power2.out', delay: i * 0.08,
    });
  });

  // ── Trait de séparation animé ────────────────────────────────
  gsap.utils.toArray('.divider-line').forEach(line => {
    gsap.from(line, {
      scrollTrigger: { trigger: line, start: 'top 85%' },
      scaleX: 0, duration: 1.2, ease: 'power3.inOut', transformOrigin: 'left',
    });
  });

  // ── Pourquoi nous : chiffres apparaissent ────────────────────
  gsap.from('.pourquoi .section-label', {
    scrollTrigger: { trigger: '.pourquoi', start: 'top 70%' },
    opacity: 0, y: 20, duration: 0.8,
  });
  gsap.from('.pourquoi .section-title', {
    scrollTrigger: { trigger: '.pourquoi', start: 'top 65%' },
    opacity: 0, y: 35, duration: 1, delay: 0.12,
  });
  gsap.utils.toArray('.chiffre-item').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: '.chiffres', start: 'top 80%' },
      opacity: 0, y: 30, scale: 0.9, duration: 0.9, ease: 'back.out(1.5)', delay: i * 0.14,
    });
  });

  // ── À propos : image et texte depuis les côtés opposés ───────
  gsap.from('.apropos-image', {
    scrollTrigger: { trigger: '.apropos', start: 'top 70%' },
    opacity: 0, x: -60, duration: 1.2, ease: 'power3.out',
  });
  gsap.from('.apropos-content .section-label', {
    scrollTrigger: { trigger: '.apropos', start: 'top 68%' },
    opacity: 0, x: 40, duration: 0.9, ease: 'power2.out', delay: 0.1,
  });
  gsap.from('.apropos-content .section-title', {
    scrollTrigger: { trigger: '.apropos', start: 'top 65%' },
    opacity: 0, x: 50, duration: 1.1, ease: 'power3.out', delay: 0.2,
  });
  gsap.from('.apropos-content .section-sub', {
    scrollTrigger: { trigger: '.apropos', start: 'top 62%' },
    opacity: 0, x: 35, duration: 0.9, ease: 'power2.out', delay: 0.32,
  });
  gsap.from('.apropos-detail', {
    scrollTrigger: { trigger: '.apropos', start: 'top 58%' },
    opacity: 0, y: 20, duration: 0.9, ease: 'power2.out', delay: 0.45,
  });

  // ── Contact ──────────────────────────────────────────────────
  const ctlTl = gsap.timeline({
    scrollTrigger: { trigger: '.contact', start: 'top 72%' },
  });
  ctlTl
    .from('.contact .section-label',  { opacity: 0, y: 20, duration: 0.8 })
    .from('.contact .section-title',  { opacity: 0, y: 35, duration: 1 },   '-=0.4')
    .from('.contact .section-sub',    { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
    .from('.contact-email',           { opacity: 0, scale: 0.94, duration: 0.9, ease: 'back.out(1.4)' }, '-=0.4')
    .from('.contact-note',            { opacity: 0, y: 10, duration: 0.7 }, '-=0.4');

  // ── Parallax hero ────────────────────────────────────────────
  gsap.to('.hero-canvas-wrap', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    y: '30%',
    ease: 'none',
  });
}

// ── BOUTON SKIP ──────────────────────────────────────────────────
skipBtn.addEventListener('click', () => {
  if (window.AgenciaScene) window.AgenciaScene.skip();
  else revealContent();
});

// ── CONNEXION SCÈNE ──────────────────────────────────────────────
if (window.AgenciaScene) {
  window.AgenciaScene.onDone(revealContent);
} else {
  setTimeout(revealContent, 500);
}
