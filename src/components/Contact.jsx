import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Contact() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 72%' },
        defaults: { ease: 'power3.out' },
      })
      tl.from('.ct-label',   { opacity: 0, y: 20, duration: 0.8 })
        .from('.ct-title',   { opacity: 0, y: 38, duration: 1.1 },  '-=0.4')
        .from('.ct-divider', { scaleX: 0, duration: 1.2, ease: 'power3.inOut', transformOrigin: 'center' }, '-=0.5')
        .from('.ct-sub',     { opacity: 0, y: 22, duration: 0.9 },  '-=0.4')
        .from('.ct-cta',     { opacity: 0, scale: 0.92, duration: 1, ease: 'back.out(1.4)' }, '-=0.4')
        .from('.ct-note',    { opacity: 0, y: 10, duration: 0.7 },  '-=0.4')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="contact" style={styles.section}>
      <style>{css}</style>

      <p className="ct-label" style={styles.label}>Parlons-nous</p>
      <h2 className="ct-title" style={styles.title}>
        Demandez votre<br /><em>audit IA gratuit.</em>
      </h2>

      <div className="ct-divider" style={styles.divider}>
        <span style={styles.dLine} />
        <span style={styles.dDia} />
        <span style={styles.dLine} />
      </div>

      <p className="ct-sub" style={styles.sub}>
        Analysons ensemble votre potentiel digital. 30 minutes. Sans engagement.<br />
        Nous revenons vers vous sous 24h avec un plan d'action concret.
      </p>

      <a
        className="ct-cta"
        href="mailto:agenciaserviceaix@gmail.com?subject=Demande%20audit%20IA%20gratuit"
        style={styles.cta}
      >
        Réserver mon audit gratuit
      </a>

      <p className="ct-note" style={styles.note}>
        agenciaserviceaix@gmail.com · Réponse sous 24h · Sans engagement
      </p>
    </section>
  )
}

const styles = {
  section: {
    background: 'var(--ivoire)', textAlign: 'center',
    padding: '140px 40px',
  },
  label: {
    fontFamily: 'var(--sans)', fontSize: '0.6rem', fontWeight: 400,
    letterSpacing: '0.45em', textTransform: 'uppercase',
    color: 'var(--or-sombre)', marginBottom: 20, display: 'block',
  },
  title: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2rem, 4vw, 3.4rem)',
    fontWeight: 300, lineHeight: 1.2,
    color: 'var(--encre)', marginBottom: 0, letterSpacing: '0.01em',
  },
  divider: {
    display: 'flex', alignItems: 'center', gap: 20,
    margin: '32px auto 0', maxWidth: 180,
  },
  dLine: { flex: 1, height: 1, background: 'var(--or)', opacity: 0.35 },
  dDia:  { width: 5, height: 5, background: 'var(--or)', transform: 'rotate(45deg)', display: 'block' },
  sub: {
    fontFamily: 'var(--sans)', fontSize: '0.92rem', fontWeight: 300,
    color: 'var(--pierre)', lineHeight: 1.9,
    maxWidth: 500, margin: '40px auto 52px',
  },
  cta: {
    display: 'inline-block',
    border: '1px solid var(--or)',
    color: 'var(--encre)', background: 'transparent',
    fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 400,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    padding: '20px 56px', transition: 'background 0.4s, color 0.4s',
    textDecoration: 'none',
  },
  note: {
    marginTop: 28, fontFamily: 'var(--sans)',
    fontSize: '0.68rem', fontWeight: 300,
    color: 'var(--pierre)', letterSpacing: '0.12em',
  },
}

const css = `
  .ct-title em { font-style: italic; color: var(--or-sombre); }
  .ct-cta:hover { background: var(--or) !important; color: var(--onyx) !important; }

  @media (max-width: 768px) {
    #contact { padding: 80px 24px !important; }
    .ct-cta { padding: 16px 32px !important; }
  }
`
