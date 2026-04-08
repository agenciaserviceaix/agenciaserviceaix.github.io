import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#apropos',  label: 'À propos' },
]

export default function Nav() {
  const navRef = useRef()

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Intro animation
    gsap.from(navRef.current, { opacity: 0, y: -20, duration: 1, delay: 0.3, ease: 'power2.out' })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} style={styles.nav}>
      <style>{css}</style>
      <a href="#hero" style={styles.logo}>
        Agencia<em style={styles.em}>Service</em>
      </a>
      <ul style={styles.ul}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className="nav-link">{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta">Audit IA gratuit</a>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
    padding: '22px 60px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'background 0.4s, padding 0.4s, boxShadow 0.4s',
  },
  logo: {
    fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300,
    color: 'var(--creme)', letterSpacing: '0.08em',
  },
  em: {
    fontStyle: 'italic', color: 'var(--or-clair)',
  },
  ul: { listStyle: 'none', display: 'flex', gap: 40, alignItems: 'center' },
}

const css = `
  nav.scrolled {
    background: rgba(250,244,236,0.97) !important;
    padding: 14px 60px !important;
    box-shadow: 0 1px 0 rgba(0,0,0,0.08) !important;
  }
  nav.scrolled a { color: #1A1408 !important; }
  nav.scrolled em { color: #A88820 !important; }

  .nav-link {
    font-family: var(--sans); font-size: 0.7rem; font-weight: 300;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: rgba(250,244,236,0.72);
    transition: color 0.3s;
  }
  .nav-link:hover { color: var(--or) !important; }

  .nav-cta {
    font-family: var(--sans); font-size: 0.68rem; font-weight: 400;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--or-clair);
    border: 1px solid rgba(212,175,55,0.45);
    padding: 10px 22px;
    transition: background 0.3s, color 0.3s;
  }
  .nav-cta:hover { background: var(--or); color: var(--onyx) !important; border-color: var(--or); }

  @media (max-width: 768px) {
    nav { padding: 16px 20px !important; }
    nav.scrolled { padding: 12px 20px !important; }
    .nav-link { display: none; }
    .nav-cta { font-size: 0.6rem; padding: 8px 14px; }
  }
`
