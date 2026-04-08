import { useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import { gsap } from 'gsap'

// ── PARTICULES DORÉES ─────────────────────────────────────────────
function GoldParticles({ count = 900 }) {
  const ref   = useRef()
  const mouse = useRef(new THREE.Vector2(0, 0))

  // Attributs de géométrie
  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors    = new Float32Array(count * 3)
    const sizes     = new Float32Array(count)
    const palette   = [
      new THREE.Color('#D4AF37'),
      new THREE.Color('#EDD06A'),
      new THREE.Color('#A88820'),
      new THREE.Color('#F0CC50'),
    ]

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = (Math.random() - 0.5) * Math.PI * 0.55
      const r     = 8 + Math.random() * 24

      positions[i*3]   = Math.cos(theta) * Math.cos(phi) * r
      positions[i*3+1] = Math.sin(phi) * r * 0.45
      positions[i*3+2] = Math.sin(theta) * Math.cos(phi) * r * 0.55

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i*3] = c.r; colors[i*3+1] = c.g; colors[i*3+2] = c.b

      sizes[i] = 0.06 + Math.random() * Math.random() * 0.55
    }
    return { positions, colors, sizes }
  }, [count])

  // Vélocités initiales
  const vels = useMemo(() => Array.from({ length: count }, () => ({
    rise:    0.004 + Math.random() * 0.009,
    sway:    Math.random() * Math.PI * 2,
    swayAmp: Math.random() * 0.012,
    drift:   (Math.random() - 0.5) * 0.006,
  })), [count])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
    g.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    g.setAttribute('aSize',    new THREE.BufferAttribute(sizes, 1))
    return g
  }, [])

  const mat = useMemo(() => new THREE.ShaderMaterial({
    uniforms: { uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) } },
    vertexShader: `
      attribute float aSize;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uPixelRatio;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float d = length(mv.xyz);
        vAlpha  = clamp(1.0 - d / 38.0, 0.0, 1.0);
        gl_PointSize  = aSize * uPixelRatio * (260.0 / d);
        gl_Position   = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2  uv   = gl_PointCoord - 0.5;
        float d    = length(uv);
        if (d > 0.5) discard;
        float core = 1.0 - smoothstep(0.0, 0.22, d);
        float halo = 1.0 - smoothstep(0.18, 0.5, d);
        float a    = (core * 0.95 + halo * 0.35) * vAlpha;
        gl_FragColor = vec4(vColor + vec3(core * 0.25), a);
      }
    `,
    transparent: true,
    depthWrite:  false,
    blending:    THREE.AdditiveBlending,
    vertexColors: true,
  }), [])

  // Mouse tracking
  useEffect(() => {
    const onMove = e => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t   = clock.getElapsedTime()
    const pos = geo.attributes.position

    for (let i = 0; i < count; i++) {
      const v = vels[i]
      v.sway += 0.01
      pos.array[i*3]   = positions[i*3]   + Math.sin(v.sway) * v.swayAmp * 55 + v.drift * t * 25
      pos.array[i*3+1] = positions[i*3+1] + ((t * v.rise * 22) % 32) - 16
      pos.array[i*3+2] = positions[i*3+2] + Math.cos(v.sway * 0.65) * v.swayAmp * 28
    }
    pos.needsUpdate = true

    // Rotation lente + parallax souris
    ref.current.rotation.y  += 0.0006
    ref.current.rotation.x  += (mouse.current.y * 0.06 - ref.current.rotation.x) * 0.04
    ref.current.rotation.y  += (mouse.current.x * 0.08 - ref.current.rotation.y) * 0.02
  })

  return <points ref={ref} geometry={geo} material={mat} />
}

// ── SPOTLIGHT CINÉMATIQUE ─────────────────────────────────────────
function CinematicLight() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.x = Math.sin(t * 0.18) * 6
    ref.current.position.z = Math.cos(t * 0.12) * 4
  })
  return (
    <>
      <spotLight
        ref={ref}
        position={[0, 22, 0]}
        angle={0.18}
        penumbra={0.6}
        intensity={90}
        color="#D4AF37"
        castShadow={false}
      />
      <ambientLight intensity={0.03} color="#D4AF37" />
    </>
  )
}

// ── SCENE R3F ─────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <CinematicLight />
      <GoldParticles count={900} />
      <EffectComposer>
        <Bloom
          intensity={1.1}
          luminanceThreshold={0.18}
          luminanceSmoothing={0.9}
          kernelSize={3}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration
          offset={[0.0018, 0.0018]}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  )
}

// ── HERO SECTION ──────────────────────────────────────────────────
export default function Hero() {
  const textRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4, defaults: { ease: 'power3.out' } })
    tl.from('.hero-eyebrow', { opacity: 0, y: 18, duration: 0.9 })
      .from('.hero-title',   { opacity: 0, y: 50, duration: 1.2 }, '-=0.5')
      .from('.hero-sub',     { opacity: 0, y: 28, duration: 1.0 }, '-=0.6')
      .from('.hero-cta',     { opacity: 0, y: 20, scale: 0.95, duration: 0.9 }, '-=0.5')
      .from('.scroll-hint',  { opacity: 0, duration: 1 }, '-=0.3')
  }, [])

  return (
    <section id="hero" style={styles.section}>
      <style>{css}</style>

      {/* Canvas 3D */}
      <div style={styles.canvasWrap}>
        <Canvas
          camera={{ position: [0, 0, 38], fov: 70 }}
          gl={{ antialias: true, alpha: false }}
          style={{ background: '#0A0A0A' }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Overlay gradient bas */}
      <div style={styles.overlay} />

      {/* Contenu texte */}
      <div ref={textRef} style={styles.inner}>
        <p className="hero-eyebrow">Agence IA & Digitale · Aix-en-Provence</p>
        <h1 className="hero-title">
          L'IA au service<br />
          <em>du prestige aixois.</em>
        </h1>
        <p className="hero-sub">
          Nous créons des expériences digitales d'exception pour les maisons de luxe
          et les marques premium de Provence.
        </p>
        <a href="#contact" className="hero-cta">Demander un audit IA gratuit</a>
      </div>

      <div className="scroll-hint">
        <span>Découvrir</span>
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative', minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', overflow: 'hidden',
    background: '#0A0A0A',
  },
  canvasWrap: {
    position: 'absolute', inset: 0, zIndex: 0,
  },
  overlay: {
    position: 'absolute', inset: 0, zIndex: 1,
    background: 'radial-gradient(ellipse at 50% 55%, rgba(212,175,55,0.06) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  inner: {
    position: 'relative', zIndex: 2,
    maxWidth: 800, padding: '120px 40px 80px',
  },
}

const css = `
  .hero-eyebrow {
    font-family: var(--sans); font-size: 0.65rem; font-weight: 300;
    letter-spacing: 0.45em; text-transform: uppercase;
    color: var(--or); margin-bottom: 28px;
  }
  .hero-title {
    font-family: var(--serif);
    font-size: clamp(2.8rem, 6vw, 5.8rem);
    font-weight: 300; line-height: 1.1;
    color: #F8F0E0; margin-bottom: 28px; letter-spacing: 0.02em;
  }
  .hero-title em { font-style: italic; color: var(--or-clair); }
  .hero-sub {
    font-family: var(--sans); font-size: 0.96rem; font-weight: 200;
    line-height: 1.9; color: rgba(215,200,165,0.82);
    max-width: 500px; margin: 0 auto 48px; letter-spacing: 0.05em;
  }
  .hero-cta {
    display: inline-block;
    border: 1px solid var(--or);
    color: var(--or-clair); background: transparent;
    font-family: var(--sans); font-size: 0.68rem; font-weight: 400;
    letter-spacing: 0.32em; text-transform: uppercase;
    padding: 18px 52px;
    transition: background 0.4s, color 0.4s;
    cursor: pointer; text-decoration: none;
  }
  .hero-cta:hover { background: var(--or); color: var(--onyx); }

  .scroll-hint {
    position: absolute; bottom: 36px; left: 50%;
    transform: translateX(-50%); z-index: 3;
    display: flex; flex-direction: column; align-items: center; gap: 10px;
  }
  .scroll-hint span {
    font-family: var(--sans); font-size: 0.56rem; font-weight: 300;
    letter-spacing: 0.38em; text-transform: uppercase;
    color: rgba(212,175,55,0.38);
  }
  .scroll-hint::after {
    content: '';
    display: block; width: 1px; height: 48px;
    background: linear-gradient(to bottom, rgba(212,175,55,0.45), transparent);
    animation: scrollLine 2s ease-in-out infinite;
  }
  @keyframes scrollLine {
    0%   { transform: scaleY(0); transform-origin: top;    opacity: 0; }
    40%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
    80%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
    100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
  }

  @media (max-width: 768px) {
    .hero-title { font-size: 2.4rem; }
    .hero-cta { padding: 14px 32px; }
  }
`
