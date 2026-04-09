import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initScene } from './scene/initScene'
import Nav      from './components/Nav'
import Overlays from './components/Overlays'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const canvasRef = useRef()

  useEffect(() => {
    // ── Lenis smooth scroll ─────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    lenis.on('scroll', ScrollTrigger.update)

    // ── Three.js scene ─────────────────────────────────────────
    const cleanup = initScene(canvasRef.current)

    return () => {
      cleanup()
      lenis.destroy()
      gsap.ticker.remove(time => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <>
      {/* Fixed 3D canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed', inset: 0,
          width: '100%', height: '100%',
          zIndex: 0, display: 'block',
        }}
      />

      {/* Scroll driver (makes the page tall) */}
      <div id="scroll-space" />

      {/* Fixed UI */}
      <Nav />
      <Overlays />
    </>
  )
}
