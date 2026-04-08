import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Services     from './components/Services'
import Stats        from './components/Stats'
import Testimonial  from './components/Testimonial'
import APropos      from './components/APropos'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration:    1.3,
      easing:      t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync Lenis avec GSAP ticker
    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(time => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonial />
        <APropos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
