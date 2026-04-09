// ================================================================
// Overlays HTML — apparaissent en overlay sur la scène 3D
// pendant le scroll (Services / Stats / Contact + Titre final)
// ================================================================

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ── Données ───────────────────────────────────────────────────────
const SERVICES = [
  { num: '01', name: 'Web Élite',       desc: 'Sites React d\'exception. Animations 3D, performance maximale, design sur mesure.' },
  { num: '02', name: 'Voice-Agent IA',  desc: 'Agents vocaux intelligents 24/7. Qualification prospects, service client automatisé.' },
  { num: '03', name: 'VTO Jewelry',     desc: 'Virtual Try-On IA : essayage de bijoux sur smartphone. Conversion x3.' },
]

const STATS = [
  { value: '+18%', label: 'Taux de conversion' },
  { value:  '24/7', label: 'Disponibilité IA' },
  { value: '+340%', label: 'Engagement digital' },
]

// ── Composant principal ───────────────────────────────────────────
export default function Overlays() {
  const servRef  = useRef()
  const statsRef = useRef()
  const ctRef    = useRef()
  const titleRef = useRef()

  useEffect(() => {
    // ── Services (scroll 12% → 38%) ─────────────────────────────
    ScrollTrigger.create({
      trigger:  '#scroll-space',
      start:    '12% top',
      end:      '38% top',
      onEnter:  ()      => showPanel(servRef.current),
      onLeave:  ()      => hidePanel(servRef.current),
      onEnterBack: ()   => showPanel(servRef.current),
      onLeaveBack: ()   => hidePanel(servRef.current),
    })
    // Cartes en stagger
    ScrollTrigger.create({
      trigger: '#scroll-space',
      start:   '14% top',
      onEnter: () => {
        gsap.from('.srv-card-ov', {
          opacity: 0, x: 60, stagger: 0.12, duration: 0.85, ease: 'power2.out',
        })
      },
    })

    // ── Stats (scroll 42% → 65%) ─────────────────────────────────
    ScrollTrigger.create({
      trigger:     '#scroll-space',
      start:       '42% top',
      end:         '65% top',
      onEnter:     () => showPanel(statsRef.current),
      onLeave:     () => hidePanel(statsRef.current),
      onEnterBack: () => showPanel(statsRef.current),
      onLeaveBack: () => hidePanel(statsRef.current),
    })
    // Compteurs
    ScrollTrigger.create({
      trigger: '#scroll-space',
      start:   '44% top',
      onEnter: () => {
        gsap.from('.stat-val-ov', {
          opacity: 0, scale: 0.8, stagger: 0.15, duration: 0.9, ease: 'back.out(1.5)',
        })
      },
    })

    // ── Contact + Titre final (scroll 82% → 100%) ────────────────
    ScrollTrigger.create({
      trigger:     '#scroll-space',
      start:       '82% top',
      end:         '100% top',
      onEnter:     () => showPanel(ctRef.current),
      onLeave:     () => hidePanel(ctRef.current),
      onEnterBack: () => showPanel(ctRef.current),
      onLeaveBack: () => hidePanel(ctRef.current),
    })

    // Titre "AgenciaService" à 88%
    ScrollTrigger.create({
      trigger: '#scroll-space',
      start:   '88% top',
      onEnter: () => {
        gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' })
      },
      onLeaveBack: () => {
        gsap.to(titleRef.current, { opacity: 0, y: 30, duration: 0.6 })
      },
    })

    // Animation entrée contact
    ScrollTrigger.create({
      trigger: '#scroll-space',
      start:   '84% top',
      onEnter: () => {
        gsap.from('.ct-inner-ov > *', {
          opacity: 0, y: 28, stagger: 0.12, duration: 0.9, ease: 'power2.out',
        })
      },
    })
  }, [])

  return (
    <>
      <style>{css}</style>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <div ref={servRef} className="overlay-panel" style={{ ...s.panel, top: '50%', transform: 'translateY(-50%)', left: 'auto', right: 40 }}>
        <p className="ov-label">Nos expertises</p>
        <h2 className="ov-title">Ce que nous<br /><em>faisons pour vous</em></h2>
        <div className="ov-divider" />
        {SERVICES.map(sv => (
          <article key={sv.num} className="srv-card-ov">
            <span className="srv-num-ov">{sv.num}</span>
            <h3 className="srv-name-ov">{sv.name}</h3>
            <p className="srv-desc-ov">{sv.desc}</p>
          </article>
        ))}
      </div>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <div ref={statsRef} className="overlay-panel" style={{ ...s.panel, bottom: 60, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <p className="ov-label">Résultats clients</p>
        <div className="stats-row-ov">
          {STATS.map(st => (
            <div key={st.label} className="stat-item-ov">
              <span className="stat-val-ov">{st.value}</span>
              <span className="stat-label-ov">{st.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── TITRE FINAL ───────────────────────────────────────── */}
      <div ref={titleRef} style={s.title}>
        <p className="title-eyebrow">Aix-en-Provence</p>
        <h1 className="title-main">Agencia<em>Service</em></h1>
        <p className="title-tagline">L'IA au service du prestige aixois.</p>
      </div>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <div ref={ctRef} className="overlay-panel" id="contact-overlay" style={{ ...s.panel, bottom: 48, right: 52, textAlign: 'right' }}>
        <div className="ct-inner-ov">
          <p className="ov-label">Parlons-nous</p>
          <h2 className="ov-title" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}>
            Demandez votre<br /><em>audit IA gratuit.</em>
          </h2>
          <p className="ct-sub-ov">30 minutes · Sans engagement · Réponse 24h</p>
          <a
            href="mailto:agenciaserviceaix@gmail.com?subject=Demande%20audit%20IA%20gratuit"
            className="ct-btn-ov"
          >
            Réserver l'audit
          </a>
        </div>
      </div>

      {/* ── SCROLL HINT (tout en bas du 1er écran) ─────────────── */}
      <div style={s.scrollHint}>
        <span className="hint-label">Scrollez pour découvrir</span>
        <span className="hint-arrow" />
      </div>
    </>
  )
}

// ── Helpers ───────────────────────────────────────────────────────
function showPanel(el) {
  if (!el) return
  gsap.killTweensOf(el)
  gsap.to(el, { autoAlpha: 1, duration: 0.7, ease: 'power2.out' })
}
function hidePanel(el) {
  if (!el) return
  gsap.killTweensOf(el)
  gsap.to(el, { autoAlpha: 0, duration: 0.5, ease: 'power2.in' })
}

// ── Styles inline ─────────────────────────────────────────────────
const s = {
  panel: {
    position: 'fixed', zIndex: 800,
    maxWidth: 400, pointerEvents: 'none',
    visibility: 'hidden', opacity: 0,
  },
  title: {
    position: 'fixed', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center', zIndex: 800,
    opacity: 0, translateY: 30,
    pointerEvents: 'none',
  },
  scrollHint: {
    position: 'fixed', bottom: 36, left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
    zIndex: 800, pointerEvents: 'none',
  },
}

// ── CSS ───────────────────────────────────────────────────────────
const css = `
  /* Panels */
  .overlay-panel {
    padding: 32px 36px;
    background: rgba(10,10,8,0.72);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(212,175,55,0.18);
    border-radius: 2px;
  }

  .ov-label {
    font-family: var(--sans); font-size: 0.58rem; font-weight: 400;
    letter-spacing: 0.42em; text-transform: uppercase;
    color: var(--or); margin-bottom: 14px;
  }
  .ov-title {
    font-family: var(--serif);
    font-size: clamp(1.5rem, 2.5vw, 2.1rem);
    font-weight: 300; line-height: 1.25;
    color: var(--creme); margin-bottom: 20px;
  }
  .ov-title em { font-style: italic; color: var(--or-l); }

  .ov-divider {
    width: 40px; height: 1px;
    background: var(--or); opacity: 0.4;
    margin-bottom: 22px;
  }

  /* Service cards */
  .srv-card-ov {
    padding: 16px 0;
    border-bottom: 1px solid rgba(212,175,55,0.1);
  }
  .srv-card-ov:last-child { border-bottom: none; }
  .srv-num-ov {
    font-family: var(--serif); font-size: 0.65rem;
    color: var(--or); letter-spacing: 0.2em; opacity: 0.6;
    display: block; margin-bottom: 4px;
  }
  .srv-name-ov {
    font-family: var(--serif); font-size: 1.1rem; font-weight: 400;
    color: var(--creme); margin-bottom: 6px;
  }
  .srv-desc-ov {
    font-family: var(--sans); font-size: 0.78rem; font-weight: 300;
    color: rgba(190,175,145,0.8); line-height: 1.7;
  }

  /* Stats */
  .stats-row-ov {
    display: flex; gap: 48px; justify-content: center;
    flex-wrap: wrap; margin-top: 16px;
  }
  .stat-item-ov { text-align: center; }
  .stat-val-ov {
    font-family: var(--serif); font-size: 3.2rem; font-weight: 300;
    color: var(--or-l); line-height: 1; display: block;
  }
  .stat-label-ov {
    font-family: var(--sans); font-size: 0.6rem; font-weight: 300;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: rgba(190,170,120,0.55); margin-top: 8px; display: block;
  }

  /* Titre final */
  .title-eyebrow {
    font-family: var(--sans); font-size: 0.62rem; font-weight: 300;
    letter-spacing: 0.42em; text-transform: uppercase;
    color: var(--or); margin-bottom: 16px;
  }
  .title-main {
    font-family: var(--serif);
    font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 300; line-height: 1; letter-spacing: 0.06em;
    color: var(--creme);
    text-shadow: 0 2px 40px rgba(212,175,55,0.3);
  }
  .title-main em { font-style: italic; color: var(--or-l); }
  .title-tagline {
    font-family: var(--serif); font-size: 1.1rem; font-style: italic;
    color: rgba(212,175,55,0.7); margin-top: 18px; letter-spacing: 0.04em;
  }

  /* Contact */
  .ct-inner-ov { display: flex; flex-direction: column; align-items: flex-end; gap: 14px; }
  .ct-sub-ov {
    font-family: var(--sans); font-size: 0.72rem; font-weight: 300;
    color: rgba(190,175,145,0.75); letter-spacing: 0.1em;
  }
  .ct-btn-ov {
    display: inline-block;
    border: 1px solid var(--or); color: var(--or-l);
    font-family: var(--sans); font-size: 0.65rem; font-weight: 400;
    letter-spacing: 0.28em; text-transform: uppercase;
    padding: 14px 28px;
    transition: background 0.3s, color 0.3s;
    pointer-events: all;
    text-decoration: none;
  }
  .ct-btn-ov:hover { background: var(--or); color: var(--onyx); }

  /* Scroll hint */
  .hint-label {
    font-family: var(--sans); font-size: 0.55rem; font-weight: 300;
    letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(212,175,55,0.4);
  }
  .hint-arrow {
    display: block; width: 1px; height: 44px;
    background: linear-gradient(to bottom, rgba(212,175,55,0.4), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%   { transform: scaleY(0); transform-origin: top;    opacity: 0; }
    40%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
    80%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
    100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
  }

  @media(max-width:768px) {
    .overlay-panel { max-width: calc(100vw - 32px); right: 16px !important; left: 16px !important; }
    .stats-row-ov { gap: 24px; }
    .stat-val-ov { font-size: 2.4rem; }
    .title-main { font-size: 3rem; }
  }
`
