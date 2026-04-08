import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function APropos() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image depuis la gauche
      gsap.from('.ap-image', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        opacity: 0, x: -65, duration: 1.2, ease: 'power3.out',
      })
      // Texte depuis la droite, en stagger
      gsap.from('.ap-label, .ap-title, .ap-sub, .ap-body, .ap-detail', {
        scrollTrigger: { trigger: ref.current, start: 'top 66%' },
        opacity: 0, x: 45,
        stagger: 0.1, duration: 0.95, ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="apropos" style={styles.section}>
      <style>{css}</style>
      <div style={styles.layout}>

        {/* Visuel gauche */}
        <div className="ap-image" style={styles.image}>
          <div style={styles.imageInner}>
            <p style={styles.imageCaption}>
              Cours Mirabeau<br />Aix-en-Provence
            </p>
          </div>
          <div style={styles.imageBadge}>
            <span style={styles.badgeText}>Micro-entreprise locale</span>
          </div>
        </div>

        {/* Texte droite */}
        <div style={styles.content}>
          <p className="ap-label" style={styles.label}>L'agence</p>
          <h2 className="ap-title" style={styles.title}>
            Enracinés à Aix,<br />
            <em>connectés au monde.</em>
          </h2>
          <p className="ap-sub" style={styles.sub}>
            AgenciaService est une micro-entreprise fondée à Aix-en-Provence,
            spécialisée dans les solutions digitales haut de gamme et l'intégration
            de l'intelligence artificielle pour les marques premium.
          </p>
          <p className="ap-body" style={styles.body}>
            Nous accompagnons artisans d'exception, bijoutiers, hôtels de luxe et PME
            ambitieuses pour les aider à atteindre une nouvelle dimension digitale.
          </p>
          <div className="ap-detail" style={styles.detail}>
            <p>
              Notre philosophie : écouter, proposer, réaliser — sans jargon,
              sans délais inutiles, sans mauvaises surprises.
            </p>
            <br />
            <p style={{ fontStyle: 'italic', color: 'var(--or-sombre)' }}>
              Votre succès est notre seul indicateur.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = {
  section: { background: 'var(--creme)', padding: '120px 60px' },
  layout: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 100, alignItems: 'center',
    maxWidth: 1200, margin: '0 auto',
  },
  image: {
    position: 'relative', height: 520,
    background: 'linear-gradient(135deg, var(--onyx), #2A1408)',
    overflow: 'hidden',
  },
  imageInner: {
    position: 'absolute', inset: 22,
    border: '1px solid rgba(212,175,55,0.22)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  imageCaption: {
    fontFamily: 'var(--serif)', fontSize: '0.82rem',
    fontStyle: 'italic', color: 'rgba(212,175,55,0.38)',
    letterSpacing: '0.2em', textAlign: 'center', lineHeight: 2.2,
  },
  imageBadge: {
    position: 'absolute', bottom: 28, left: 28,
    background: 'rgba(212,175,55,0.12)', backdropFilter: 'blur(8px)',
    border: '1px solid rgba(212,175,55,0.25)',
    padding: '8px 16px',
  },
  badgeText: {
    fontFamily: 'var(--sans)', fontSize: '0.6rem', fontWeight: 300,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--or)',
  },
  label: {
    fontFamily: 'var(--sans)', fontSize: '0.6rem', fontWeight: 400,
    letterSpacing: '0.45em', textTransform: 'uppercase',
    color: 'var(--or-sombre)', marginBottom: 20,
  },
  title: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
    fontWeight: 300, lineHeight: 1.25,
    color: 'var(--encre)', marginBottom: 24, letterSpacing: '0.01em',
  },
  sub: {
    fontFamily: 'var(--sans)', fontSize: '0.92rem', fontWeight: 300,
    color: 'var(--pierre)', lineHeight: 1.9, marginBottom: 20,
  },
  body: {
    fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 300,
    color: 'var(--pierre)', lineHeight: 1.85, marginBottom: 24,
  },
  detail: {
    fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 300,
    color: 'var(--pierre)', lineHeight: 1.9,
    paddingTop: 28, borderTop: '1px solid var(--sable)',
  },
}

const css = `
  .ap-title em { font-style: italic; color: var(--or-sombre); }

  @media (max-width: 900px) {
    #apropos { padding: 80px 24px !important; }
    #apropos > div { grid-template-columns: 1fr !important; gap: 40px !important; }
    .ap-image { height: 280px !important; }
  }
`
