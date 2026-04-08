import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Testimonial() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 72%' },
        defaults: { ease: 'power3.out' },
      })
      tl.from('.testi-mark',  { opacity: 0, scale: 0.6, duration: 0.7 })
        .from('.testi-quote', { opacity: 0, y: 35, duration: 1.1 },     '-=0.2')
        .from('.testi-line',  { scaleX: 0, duration: 1, ease: 'power3.inOut', transformOrigin: 'left' }, '-=0.5')
        .from('.testi-name',  { opacity: 0, x: -20, duration: 0.8 },   '-=0.4')
        .from('.testi-role',  { opacity: 0, x: -15, duration: 0.7 },   '-=0.5')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} style={styles.section}>
      <style>{css}</style>
      <div style={styles.inner}>
        <span className="testi-mark" style={styles.mark}>"</span>
        <blockquote className="testi-quote" style={styles.quote}>
          AgenciaService a transformé notre présence digitale. Notre boutique virtuelle
          dépasse maintenant notre chiffre d'affaires en boutique physique.
          L'agent IA répond à nos clients à 2h du matin — c'est surréaliste.
        </blockquote>
        <div style={styles.attribution}>
          <div className="testi-line" style={styles.line} />
          <div>
            <p className="testi-name" style={styles.name}>Sophie Martin</p>
            <p className="testi-role" style={styles.role}>Directrice · Or Azur, Bijouterie · Aix-en-Provence</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#0D0B06', padding: '120px 60px',
  },
  inner: {
    maxWidth: 780, margin: '0 auto',
  },
  mark: {
    fontFamily: 'var(--serif)', fontSize: '6rem', lineHeight: 0.8,
    color: 'var(--or)', opacity: 0.3, display: 'block', marginBottom: 24,
  },
  quote: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
    fontWeight: 300, fontStyle: 'italic', lineHeight: 1.65,
    color: '#F0E8D8', marginBottom: 48, letterSpacing: '0.01em',
  },
  attribution: {
    display: 'flex', alignItems: 'center', gap: 28,
  },
  line: {
    width: 50, height: 1, background: 'var(--or)', opacity: 0.5, flexShrink: 0,
  },
  name: {
    fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400,
    color: '#F0E8D8', marginBottom: 4,
  },
  role: {
    fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 300,
    letterSpacing: '0.18em', color: 'rgba(190,168,120,0.55)',
    textTransform: 'uppercase',
  },
}

const css = `
  @media (max-width: 768px) {
    section { padding: 80px 24px !important; }
    blockquote { font-size: 1.3rem !important; }
  }
`
