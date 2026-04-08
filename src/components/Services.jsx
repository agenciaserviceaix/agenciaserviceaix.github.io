import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SERVICES = [
  {
    num: '01',
    icon: '◈',
    name: 'Web Élite',
    desc: 'Sites et applications React d\'exception — animations 3D, vitesse maximale, expérience sur mesure pour les marques qui refusent la médiocrité.',
    tags: ['React', 'Three.js', 'Performance'],
  },
  {
    num: '02',
    icon: '◎',
    name: 'Voice-Agent IA',
    desc: 'Agents vocaux intelligents disponibles 24/7 pour qualifier vos prospects, répondre à vos clients et générer des rendez-vous — sans intervention humaine.',
    tags: ['IA Générative', '24/7', 'Multilingue'],
  },
  {
    num: '03',
    icon: '◇',
    name: 'VTO Jewelry',
    desc: 'Virtual Try-On alimenté par l\'IA : vos clients essaient vos bijoux depuis leur smartphone avant d\'acheter. Taux de conversion x3.',
    tags: ['AR/VR', 'E-commerce', 'Mobile'],
  },
]

export default function Services() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titre depuis la gauche
      gsap.from('.srv-label', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0, x: -30, duration: 0.9, ease: 'power2.out',
      })
      gsap.from('.srv-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0, x: -45, duration: 1.1, ease: 'power3.out', delay: 0.1,
      })
      gsap.from('.srv-subtitle', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        opacity: 0, x: -25, duration: 0.9, ease: 'power2.out', delay: 0.22,
      })

      // Cartes stagger depuis la droite
      gsap.from('.srv-card', {
        scrollTrigger: { trigger: '.srv-grid', start: 'top 80%' },
        opacity: 0, x: 55, stagger: 0.12, duration: 0.9, ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" style={styles.section}>
      <style>{css}</style>

      <div style={styles.layout}>
        <div style={styles.left}>
          <p className="srv-label">Nos expertises</p>
          <h2 className="srv-title">
            Ce que nous<br /><em>créons pour vous</em>
          </h2>
          <p className="srv-subtitle">
            Trois offres pensées pour les entreprises qui veulent dominer leur marché digital,
            sans compromis sur la qualité.
          </p>
        </div>

        <div className="srv-grid">
          {SERVICES.map(s => (
            <article key={s.num} className="srv-card">
              <div className="srv-card-top">
                <span className="srv-num">{s.num}</span>
                <span className="srv-icon">{s.icon}</span>
              </div>
              <h3 className="srv-name">{s.name}</h3>
              <p className="srv-desc">{s.desc}</p>
              <div className="srv-tags">
                {s.tags.map(t => <span key={t} className="srv-tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { background: 'var(--ivoire)', padding: '120px 60px' },
  layout:  { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', maxWidth: 1200, margin: '0 auto' },
  left:    { position: 'sticky', top: 120 },
}

const css = `
  .srv-label {
    font-family: var(--sans); font-size: 0.6rem; font-weight: 400;
    letter-spacing: 0.45em; text-transform: uppercase;
    color: var(--or-sombre); margin-bottom: 20px;
  }
  .srv-title {
    font-family: var(--serif);
    font-size: clamp(2rem, 4vw, 3.4rem);
    font-weight: 300; line-height: 1.2;
    color: var(--encre); margin-bottom: 20px; letter-spacing: 0.01em;
  }
  .srv-title em { font-style: italic; color: var(--or-sombre); }
  .srv-subtitle {
    font-family: var(--sans); font-size: 0.9rem; font-weight: 300;
    color: var(--pierre); line-height: 1.9; max-width: 400px;
  }

  .srv-grid { display: grid; gap: 3px; }

  .srv-card {
    background: var(--creme); padding: 40px 36px;
    border-left: 2px solid transparent;
    transition: border-color 0.4s, background 0.35s, transform 0.35s;
  }
  .srv-card:hover {
    border-color: var(--or); background: #FBF5EC;
    transform: translateX(4px);
  }

  .srv-card-top {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 18px;
  }
  .srv-num {
    font-family: var(--serif); font-size: 0.7rem;
    color: var(--or); letter-spacing: 0.25em; opacity: 0.6;
  }
  .srv-icon {
    font-size: 1.2rem; color: var(--or); opacity: 0.45;
  }
  .srv-name {
    font-family: var(--serif); font-size: 1.45rem; font-weight: 400;
    color: var(--encre); margin-bottom: 14px; letter-spacing: 0.02em;
  }
  .srv-desc {
    font-family: var(--sans); font-size: 0.86rem; font-weight: 300;
    color: var(--pierre); line-height: 1.85; margin-bottom: 20px;
  }
  .srv-tags { display: flex; gap: 8px; flex-wrap: wrap; }
  .srv-tag {
    font-family: var(--sans); font-size: 0.58rem; font-weight: 400;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--or-sombre); border: 1px solid rgba(168,136,32,0.3);
    padding: 4px 10px;
  }

  @media (max-width: 900px) {
    #services { padding: 80px 24px !important; }
    #services > div { grid-template-columns: 1fr !important; gap: 40px !important; }
    .srv-left { position: static !important; }
  }
`
