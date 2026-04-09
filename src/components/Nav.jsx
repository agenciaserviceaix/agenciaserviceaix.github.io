import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Nav() {
  const ref = useRef()

  useEffect(() => {
    gsap.from(ref.current, { opacity: 0, y: -16, duration: 1.2, delay: 0.5, ease: 'power2.out' })

    const onScroll = () => {
      ref.current?.classList.toggle('scrolled', window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={ref} style={s.nav}>
      <style>{css}</style>
      <a href="#" style={s.logo}>Agencia<em style={s.em}>Service</em></a>
      <a href="#contact-overlay" className="nav-cta">Audit IA gratuit</a>
    </nav>
  )
}

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
    padding: '22px 52px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    transition: 'background 0.4s, padding 0.4s',
  },
  logo: {
    fontFamily: 'var(--serif)', fontSize: '1.45rem', fontWeight: 300,
    color: 'rgba(250,244,236,0.9)', letterSpacing: '0.08em',
    textDecoration: 'none',
  },
  em: { fontStyle: 'italic', color: 'var(--or-l)' },
}

const css = `
  nav.scrolled {
    background: rgba(10,10,10,0.82) !important;
    backdrop-filter: blur(12px);
    padding: 14px 52px !important;
    border-bottom: 1px solid rgba(212,175,55,0.12);
  }
  .nav-cta {
    font-family: var(--sans); font-size: 0.66rem; font-weight: 400;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: var(--or); border: 1px solid rgba(212,175,55,0.4);
    padding: 10px 22px; transition: background 0.3s, color 0.3s;
    text-decoration: none;
  }
  .nav-cta:hover { background: var(--or); color: var(--onyx); }
  @media(max-width:600px){ nav { padding: 16px 20px !important; } }
`
