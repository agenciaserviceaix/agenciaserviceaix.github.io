import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const STATS = [
  { prefix: '+', value: 18,  suffix: '%', label: 'Taux de conversion' },
  { prefix: '',  value: 24,  suffix: '/7', label: 'Disponibilité IA' },
  { prefix: '+', value: 340, suffix: '%', label: 'Engagement digital' },
]

function StatItem({ prefix, value, suffix, label, delay }) {
  const numRef = useRef()

  useEffect(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: 'power2.out',
      delay,
      scrollTrigger: { trigger: numRef.current, start: 'top 80%', once: true },
      onUpdate: () => {
        if (numRef.current)
          numRef.current.textContent = prefix + Math.round(obj.val) + suffix
      },
    })
  }, [])

  return (
    <div style={styles.item}>
      <span ref={numRef} style={styles.val}>{prefix}0{suffix}</span>
      <span style={styles.label}>{label}</span>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stats-heading', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        opacity: 0, y: 30, duration: 1, ease: 'power2.out',
      })
      gsap.from('.stats-divider', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
        scaleX: 0, duration: 1.3, ease: 'power3.inOut',
        transformOrigin: 'center', delay: 0.2,
      })
      gsap.from('[data-stat]', {
        scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
        opacity: 0, y: 28, scale: 0.92,
        stagger: 0.15, duration: 0.9, ease: 'back.out(1.5)',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>{css}</style>

      <p className="stats-heading" style={styles.label}>Résultats mesurables</p>
      <h2 className="stats-heading" style={styles.title}>
        Des chiffres qui<br /><em>parlent d'eux-mêmes.</em>
      </h2>

      <div className="stats-divider" style={styles.divider}>
        <span style={styles.dLine} />
        <span style={styles.dDia} />
        <span style={styles.dLine} />
      </div>

      <div className="stats-row" style={styles.row}>
        {STATS.map((s, i) => (
          <div key={s.label} data-stat style={styles.item}>
            <StatItem {...s} delay={i * 0.1} />
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: 'var(--onyx-doux)', padding: '120px 40px',
    textAlign: 'center',
  },
  label: {
    fontFamily: 'var(--sans)', fontSize: '0.6rem', fontWeight: 400,
    letterSpacing: '0.45em', textTransform: 'uppercase',
    color: 'var(--or)', marginBottom: 20, display: 'block',
  },
  title: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: 300, lineHeight: 1.2,
    color: '#F0E8D8', marginBottom: 40, letterSpacing: '0.01em',
  },
  divider: {
    display: 'flex', alignItems: 'center', gap: 20,
    margin: '0 auto 72px', maxWidth: 180,
  },
  dLine: { flex: 1, height: 1, background: 'var(--or)', opacity: 0.3 },
  dDia:  { width: 5, height: 5, background: 'var(--or)', transform: 'rotate(45deg)', display: 'block' },
  row:   { display: 'flex', justifyContent: 'center', gap: 80, flexWrap: 'wrap' },
  item:  { textAlign: 'center' },
  val: {
    fontFamily: 'var(--serif)', fontSize: '4.2rem', fontWeight: 300,
    color: 'var(--or-clair)', lineHeight: 1, display: 'block',
  },
  label2: {
    fontFamily: 'var(--sans)', fontSize: '0.62rem', fontWeight: 300,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'rgba(190,168,120,0.5)', marginTop: 10, display: 'block',
  },
}

const css = `
  .stats-heading em { font-style: italic; color: var(--or-clair); }

  [data-stat] .val {
    font-family: var(--serif); font-size: 4.2rem; font-weight: 300;
    color: var(--or-clair); line-height: 1; display: block;
  }
  [data-stat] .label {
    font-family: var(--sans); font-size: 0.62rem; font-weight: 300;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(190,168,120,0.5); margin-top: 10px; display: block;
  }

  @media (max-width: 600px) {
    [data-stat] .val { font-size: 3rem; }
  }
`
