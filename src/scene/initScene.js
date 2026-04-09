// ================================================================
// AgenciaService — Cours Mirabeau 3D
// Caméra piéton liée au scroll · Aix-en-Provence
// ================================================================

import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass }     from 'three/addons/postprocessing/ShaderPass.js'
import { OutputPass }     from 'three/addons/postprocessing/OutputPass.js'
import { gsap }           from 'gsap'
import { ScrollTrigger }  from 'gsap/ScrollTrigger'
import { buildCameraPaths, getCameraState } from './cameraPath.js'

// ── CONSTANTES SCÈNE ─────────────────────────────────────────────
const ROAD_HW      = 10    // demi-largeur route
const SW_W         = 7     // largeur trottoir
const SW_X         = 15    // centre trottoir
const TREE_IN_X    = 6     // rangée intérieure
const TREE_OUT_X   = 11    // rangée extérieure
const BLDG_X       = 23    // façade bâtiment
const ROTONDE_Z    = -78   // position Rotonde
const TREE_COUNT   = 17    // arbres par rangée
const TREE_STEP    = 9     // espacement
const TREE_START_Z = +72   // premier arbre

// ── SHADERS ──────────────────────────────────────────────────────
const ChromaticAberrationShader = {
  uniforms: { tDiffuse: { value: null }, uAmount: { value: 0.003 } },
  vertexShader:   `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec2 d=normalize(vUv-.5); float s=length(vUv-.5);
      float str=s*s*uAmount;
      float r=texture2D(tDiffuse,vUv+d*str*1.8).r;
      float g=texture2D(tDiffuse,vUv).g;
      float b=texture2D(tDiffuse,vUv-d*str*1.8).b;
      gl_FragColor=vec4(r,g,b,1.);
    }`,
}

const FilmGrainShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uStrength: { value: 0.028 } },
  vertexShader:   `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uStrength; varying vec2 vUv;
    float rng(vec2 c){ return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453+uTime); }
    void main(){
      vec4 col=texture2D(tDiffuse,vUv);
      float g=rng(vUv)*uStrength;
      col.rgb+=g-uStrength*.5;
      gl_FragColor=col;
    }`,
}

// ── MATÉRIAUX (partagés) ──────────────────────────────────────────
function makeMaterials() {
  return {
    pave:      new THREE.MeshLambertMaterial({ color: 0xBAAA8A }),
    trottoir:  new THREE.MeshLambertMaterial({ color: 0xD0BF9A }),
    sol:       new THREE.MeshLambertMaterial({ color: 0xC8A878 }),
    trunk:     new THREE.MeshLambertMaterial({ color: 0x9A7E5C }),
    leafA:     new THREE.MeshLambertMaterial({ color: 0x1E3A0A }),
    leafB:     new THREE.MeshLambertMaterial({ color: 0x2E5512 }),
    limestone: new THREE.MeshLambertMaterial({ color: 0xE8D5A8 }),
    limestoneB:new THREE.MeshLambertMaterial({ color: 0xDDC898 }),
    shutter:   new THREE.MeshLambertMaterial({ color: 0x3A5E22 }),
    windowMat: new THREE.MeshLambertMaterial({ color: 0x181A22, emissive: new THREE.Color(0x1A180A), emissiveIntensity: 0.5 }),
    toiture:   new THREE.MeshLambertMaterial({ color: 0x8A7068 }),
    stone:     new THREE.MeshLambertMaterial({ color: 0xCCB898 }),
    gold:      new THREE.MeshLambertMaterial({ color: 0xD4AF37, emissive: new THREE.Color(0x6A5000), emissiveIntensity: 0.6 }),
    waterMat:  new THREE.MeshLambertMaterial({ color: 0x5AAACC, transparent: true, opacity: 0.72 }),
    coat1:     new THREE.MeshLambertMaterial({ color: 0x252530 }),
    coat2:     new THREE.MeshLambertMaterial({ color: 0x30241A }),
    coat3:     new THREE.MeshLambertMaterial({ color: 0x1A2A20 }),
    skinMat:   new THREE.MeshLambertMaterial({ color: 0xD4A888 }),
  }
}

// ── SKY ──────────────────────────────────────────────────────────
function buildSky(scene) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uZenith:   { value: new THREE.Color(0x1A5FAA) },
      uHorizon:  { value: new THREE.Color(0x88BBE8) },
      uGround:   { value: new THREE.Color(0xC8A878) },
    },
    vertexShader: `
      varying float vY;
      void main(){ vY=normalize(position).y; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }
    `,
    fragmentShader: `
      uniform vec3 uZenith,uHorizon,uGround; varying float vY;
      void main(){
        vec3 c = vY>0. ? mix(uHorizon,uZenith,pow(vY,.55)) : mix(uHorizon,uGround,clamp(-vY*4.,0.,1.));
        gl_FragColor=vec4(c,1.);
      }
    `,
    side: THREE.BackSide, depthWrite: false,
  })
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(500, 24, 12), mat))

  // Soleil visible
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xFFF8E0 })
  const sun = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 8), sunMat)
  sun.position.set(80, 180, -60)
  scene.add(sun)
}

// ── SOL & BOULEVARD ───────────────────────────────────────────────
function buildGround(scene, M) {
  // Sol large (herbe/terre)
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 300), M.sol)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.1
  scene.add(ground)

  // Pavé central (route)
  const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_HW * 2, 200), M.pave)
  road.rotation.x = -Math.PI / 2
  road.position.set(0, 0.01, -20)
  scene.add(road)

  // Trottoirs
  ;[-1, 1].forEach(side => {
    const sw = new THREE.Mesh(new THREE.PlaneGeometry(SW_W, 200), M.trottoir)
    sw.rotation.x = -Math.PI / 2
    sw.position.set(SW_X * side, 0.015, -20)
    scene.add(sw)
  })

  // Lignes blanches centrales (discontinues)
  for (let z = -70; z < 75; z += 12) {
    const dash = new THREE.Mesh(
      new THREE.PlaneGeometry(0.15, 5),
      new THREE.MeshBasicMaterial({ color: 0xEEEECC, opacity: 0.6, transparent: true })
    )
    dash.rotation.x = -Math.PI / 2
    dash.position.set(0, 0.02, z)
    scene.add(dash)
  }
}

// ── PLATANES ─────────────────────────────────────────────────────
function buildPlatane(scene, M, x, z) {
  const g = new THREE.Group()
  const h = 5 + Math.random() * 2
  const r = 0.6 + Math.random() * 0.4

  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, h, 7), M.trunk)
  trunk.position.y = h / 2

  const body = new THREE.Mesh(new THREE.SphereGeometry(r * 3, 9, 7), M.leafA)
  body.scale.y = 0.72
  body.position.y = h + r * 2.1

  const top = new THREE.Mesh(new THREE.SphereGeometry(r * 2, 8, 6), M.leafB)
  top.scale.y = 0.55
  top.position.set(r * 0.3, h + r * 3, r * 0.3)

  g.add(trunk, body, top)
  g.position.set(x, 0, z)
  g.rotation.y = Math.random() * Math.PI * 2
  g.scale.setScalar(0.88 + Math.random() * 0.22)
  scene.add(g)
}

function buildAllTrees(scene, M) {
  for (let i = 0; i < TREE_COUNT; i++) {
    const z = TREE_START_Z - i * TREE_STEP
    const jit = (Math.random() - 0.5) * 1.2
    ;[-1, 1].forEach(s => {
      buildPlatane(scene, M, TREE_IN_X  * s + jit * 0.5, z)
      buildPlatane(scene, M, TREE_OUT_X * s + jit,       z + (Math.random() - 0.5))
    })
  }
}

// ── FAÇADES HAUSSMANNIENNES ───────────────────────────────────────
function buildWindow(M, x, y, z, rotY) {
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.35, 0.82), M.limestone)
  const pane  = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 1.18), M.windowMat)

  const g = new THREE.Group()
  g.add(frame, pane)
  g.rotation.y = rotY
  g.position.set(x, y, z)
  return g
}

function buildFacade(scene, M, side) {
  // side: +1 (right) or -1 (left)
  const faceX = BLDG_X * side
  const rotY  = side > 0 ? -Math.PI / 2 : Math.PI / 2

  const blocks = [
    { zc: 65,  l: 22, h: 11 },
    { zc: 40,  l: 18, h: 13 },
    { zc: 18,  l: 24, h: 10 },
    { zc: -5,  l: 20, h: 12 },
    { zc: -28, l: 22, h: 11 },
    { zc: -50, l: 18, h: 13 },
    { zc: -68, l: 16, h: 10 },
  ]

  blocks.forEach(({ zc, l, h }) => {
    const mat = Math.random() > 0.5 ? M.limestone : M.limestoneB
    const body = new THREE.Mesh(new THREE.BoxGeometry(8, h, l), mat)
    body.position.set(faceX + side * 4, h / 2, zc)
    scene.add(body)

    // Toiture
    const roof = new THREE.Mesh(new THREE.BoxGeometry(8.4, 1.1, l + 0.4), M.toiture)
    roof.position.set(faceX + side * 4, h + 0.55, zc)
    scene.add(roof)

    // Volets verts
    const shutterL = new THREE.Mesh(new THREE.PlaneGeometry(0.55, h * 0.6), M.shutter)
    shutterL.rotation.y = rotY
    shutterL.position.set(faceX + (side > 0 ? -0.1 : 0.1), h * 0.55, zc - l * 0.3)
    scene.add(shutterL)

    // Fenêtres
    const numFloors = Math.floor(h / 3.2) - 1
    const numWins   = Math.floor(l / 4.5)
    for (let fl = 0; fl < numFloors; fl++) {
      for (let wn = 0; wn < numWins; wn++) {
        const wy = 2 + fl * 3.0
        const wz = zc - l / 2 + 2 + wn * (l - 2) / Math.max(numWins - 1, 1)
        const win = buildWindow(M, faceX + (side > 0 ? -0.05 : 0.05), wy, wz, rotY)
        scene.add(win)
      }
    }
  })
}

// ── FONTAINES INTERMÉDIAIRES ─────────────────────────────────────
function buildSmallFountain(scene, M, z) {
  const g = new THREE.Group()
  g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(2, 2.3, 0.4, 24), M.stone), { position: new THREE.Vector3(0, 0.2, 0) }))
  g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 3, 10), M.stone), { position: new THREE.Vector3(0, 1.9, 0) }))
  g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(1.5, 0.8, 0.3, 24), M.stone), { position: new THREE.Vector3(0, 3.4, 0) }))
  g.position.set(0, 0, z)
  scene.add(g)
}

// ── ROTONDE ───────────────────────────────────────────────────────
function buildRotonde(scene, M) {
  const g = new THREE.Group()

  const add = (geo, mat, y, extra) => {
    const m = new THREE.Mesh(geo, mat)
    m.position.y = y
    if (extra) Object.assign(m, extra)
    g.add(m)
    return m
  }

  // Bassin
  add(new THREE.CylinderGeometry(10.5, 10.5, 0.55, 64), M.stone, 0.28)
  add(new THREE.CylinderGeometry(10, 10, 0.08, 64),     M.waterMat, 0.62)

  // Muret
  const muret = new THREE.Mesh(new THREE.TorusGeometry(10.5, 0.5, 8, 64), M.stone)
  muret.rotation.x = Math.PI / 2
  muret.position.y = 0.85
  g.add(muret)

  // Socle
  add(new THREE.CylinderGeometry(3.5, 4, 1.4, 32), M.stone, 1.2)
  // Colonne 1
  add(new THREE.CylinderGeometry(0.7, 1.0, 7, 16), M.stone, 5.6)
  // Bandeau
  add(new THREE.CylinderGeometry(1.9, 1.5, 0.9, 16), M.stone, 9.85)
  // Colonne 2
  add(new THREE.CylinderGeometry(0.5, 0.7, 4, 12), M.stone, 12.6)
  // Sphère dorée
  add(new THREE.SphereGeometry(1.3, 16, 12), M.gold, 15.4)

  // Mascarons (4 lions simplifiés)
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2
    const lion = new THREE.Mesh(new THREE.SphereGeometry(0.75, 8, 6), M.stone)
    lion.position.set(Math.cos(a) * 5.5, 2.3, Math.sin(a) * 5.5)
    lion.scale.set(1.6, 1, 1.3)
    g.add(lion)
  }

  // Petits bassins intermédiaires (3 niveaux)
  ;[4, 6.5].forEach((r, i) => {
    const bowl = new THREE.Mesh(new THREE.TorusGeometry(r, 0.3, 7, 32), M.stone)
    bowl.rotation.x = Math.PI / 2
    bowl.position.y = 3.2 + i * 3.5
    g.add(bowl)
  })

  g.position.set(0, 0, ROTONDE_Z)
  scene.add(g)
  return g
}

// ── JETS D'EAU ────────────────────────────────────────────────────
function buildWaterJets(scene) {
  const JET_COUNT = 10
  const PER_JET   = 28
  const total     = JET_COUNT * PER_JET
  const pos       = new Float32Array(total * 3)
  const vels      = []

  for (let j = 0; j < JET_COUNT; j++) {
    const angle = (j / JET_COUNT) * Math.PI * 2
    const cx = Math.cos(angle) * 7.5 + 0 // jets autour du bassin
    const cz = Math.sin(angle) * 7.5 + ROTONDE_Z
    for (let p = 0; p < PER_JET; p++) {
      const idx  = j * PER_JET + p
      const t    = p / PER_JET
      pos[idx*3]   = cx + Math.cos(angle) * t * 4 * 0.3
      pos[idx*3+1] = 1 + Math.sin(t * Math.PI) * 5
      pos[idx*3+2] = cz + Math.sin(angle) * t * 4 * 0.3
      vels.push({ jIdx: j, pIdx: p, life: t, speed: 0.012 + Math.random() * 0.006 })
    }
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

  const mat = new THREE.PointsMaterial({
    color: 0x88CCEE, size: 0.18,
    transparent: true, opacity: 0.75,
    sizeAttenuation: true,
  })

  const pts = new THREE.Points(geo, mat)
  scene.add(pts)

  function update(t) {
    const pa = geo.attributes.position
    for (let idx = 0; idx < total; idx++) {
      const v = vels[idx]
      v.life += v.speed
      if (v.life > 1) v.life -= 1
      const j     = v.jIdx
      const angle = (j / JET_COUNT) * Math.PI * 2
      const cx    = Math.cos(angle) * 7.5
      const cz    = Math.sin(angle) * 7.5 + ROTONDE_Z
      const tl    = v.life
      pa.array[idx*3]   = cx + Math.cos(angle) * tl * 4
      pa.array[idx*3+1] = 1.2 + Math.sin(tl * Math.PI) * (4.5 + Math.sin(t * 0.8 + j) * 0.4)
      pa.array[idx*3+2] = cz + Math.sin(angle) * tl * 4
    }
    pa.needsUpdate = true
  }

  return { update }
}

// ── PASSANTS ─────────────────────────────────────────────────────
function buildPedestrians(scene, M) {
  const people = []
  const coats  = [M.coat1, M.coat2, M.coat3]

  function makePerson(x, z, speed, dir) {
    const g = new THREE.Group()
    const coat = coats[Math.floor(Math.random() * 3)]
    const h = 0.95 + Math.random() * 0.2

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, h, 6), coat)
    body.position.y = h / 2

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 6), M.skinMat)
    head.position.y = h + 0.19

    g.add(body, head)
    g.position.set(x + (Math.random() - 0.5) * 2, 0.02, z)
    if (dir < 0) g.rotation.y = Math.PI
    scene.add(g)

    return { mesh: g, speed, dir, bobPhase: Math.random() * Math.PI * 2 }
  }

  // Left sidewalk (walk toward Rotonde)
  for (let i = 0; i < 8; i++) {
    const z = 70 - i * 18
    people.push(makePerson(-SW_X + (Math.random() - 0.5) * 3, z, 0.04 + Math.random() * 0.03, -1))
  }
  // Right sidewalk (walk away from Rotonde)
  for (let i = 0; i < 8; i++) {
    const z = -70 + i * 18
    people.push(makePerson(SW_X + (Math.random() - 0.5) * 3, z, 0.035 + Math.random() * 0.03, 1))
  }

  function update(dt) {
    people.forEach(p => {
      p.bobPhase += dt * 3.5
      p.mesh.position.z += p.speed * p.dir
      p.mesh.position.y = 0.02 + Math.abs(Math.sin(p.bobPhase)) * 0.025

      // Recycle quand hors champ
      if (p.dir < 0 && p.mesh.position.z < ROTONDE_Z - 5) p.mesh.position.z = 80
      if (p.dir > 0 && p.mesh.position.z >  80)            p.mesh.position.z = ROTONDE_Z - 5
    })
  }

  return { update }
}

// ── LUMIÈRES ─────────────────────────────────────────────────────
function buildLights(scene) {
  // Soleil de Provence : haut, dur, légèrement chaud
  const sun = new THREE.DirectionalLight(0xFFF8F0, 2.2)
  sun.position.set(80, 180, -60)
  scene.add(sun)

  // Ciel
  scene.add(new THREE.HemisphereLight(0x88BBEE, 0xC8A878, 0.45))
  scene.add(new THREE.AmbientLight(0x9AB8CC, 0.25))

  // Lumière Rotonde (or pulsé)
  const rotLight = new THREE.PointLight(0xD4AF37, 5, 38)
  rotLight.position.set(0, 8, ROTONDE_Z)
  scene.add(rotLight)

  // Lumière supplémentaire sphère dorée
  const goldLight = new THREE.PointLight(0xEDD06A, 3, 20)
  goldLight.position.set(0, 16, ROTONDE_Z)
  scene.add(goldLight)

  return { rotLight, goldLight }
}

// ── POST-PROCESSING ───────────────────────────────────────────────
function buildPostFX(renderer, scene, camera) {
  const size = new THREE.Vector2(window.innerWidth, window.innerHeight)
  const composer = new EffectComposer(renderer)

  composer.addPass(new RenderPass(scene, camera))

  // Bloom (fontaine + sphère dorée brillent)
  const bloom = new UnrealBloomPass(size, 0.55, 0.4, 0.68)
  composer.addPass(bloom)

  // Aberration chromatique
  const caPass = new ShaderPass(ChromaticAberrationShader)
  composer.addPass(caPass)

  // Film grain
  const grainPass = new ShaderPass(FilmGrainShader)
  composer.addPass(grainPass)

  composer.addPass(new OutputPass())

  return { composer, bloom, caPass, grainPass }
}

// ── EXPORT PRINCIPAL ──────────────────────────────────────────────
export function initScene(canvas) {
  // ── Renderer ──────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  // ── Scene ──────────────────────────────────────────────────────
  const scene  = new THREE.Scene()
  scene.fog    = new THREE.Fog(0xD4C4B0, 55, 240)

  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 600)
  camera.position.set(0, 1.65, 75)

  // ── Construction ───────────────────────────────────────────────
  const M = makeMaterials()
  buildSky(scene)
  buildGround(scene, M)
  buildAllTrees(scene, M)
  buildFacade(scene, M, -1)
  buildFacade(scene, M,  1)
  buildSmallFountain(scene, M, 14)
  buildSmallFountain(scene, M, -22)
  const rotonde     = buildRotonde(scene, M)
  const waterJets   = buildWaterJets(scene)
  const pedestrians = buildPedestrians(scene, M)
  const lights      = buildLights(scene)
  const { composer, bloom, caPass, grainPass } = buildPostFX(renderer, scene, camera)

  // ── Camera path ────────────────────────────────────────────────
  const paths = buildCameraPaths()

  // ── Scroll binding ─────────────────────────────────────────────
  const scrollState = { progress: 0 }
  const lookTarget  = new THREE.Vector3()

  const st = ScrollTrigger.create({
    trigger: '#scroll-space',
    start:   'top top',
    end:     'bottom bottom',
    onUpdate: self => { scrollState.progress = self.progress },
  })

  // ── Clock ─────────────────────────────────────────────────────
  const clock = new THREE.Clock()
  let rafId

  function animate() {
    rafId = requestAnimationFrame(animate)
    const dt = clock.getDelta()
    const t  = clock.getElapsedTime()
    const p  = scrollState.progress

    // Caméra le long du chemin
    const state = getCameraState(paths, p)
    camera.position.copy(state.pos)

    // Bob de marche (piéton qui marche, s'arrête devant la Rotonde)
    const walkBob = p < 0.86
      ? Math.sin(p * 180 * Math.PI) * 0.03   // bob rythmé
      : 0
    camera.position.y += walkBob

    // Look-at smooth
    lookTarget.lerp(state.look, 0.06)
    camera.lookAt(lookTarget)

    // Fog dynamique : s'allège en approchant la Rotonde
    scene.fog.near = THREE.MathUtils.lerp(55, 30, p)
    scene.fog.far  = THREE.MathUtils.lerp(240, 120, Math.min(p / 0.85, 1))

    // Lumière fontaine pulsée
    lights.rotLight.intensity  = 5  + Math.sin(t * 1.8) * 1.0
    lights.goldLight.intensity = 3  + Math.sin(t * 2.2 + 1) * 0.6

    // Bloom plus intense en s'approchant de la Rotonde
    bloom.strength = THREE.MathUtils.lerp(0.35, 0.9, Math.min(p / 0.8, 1))

    // Aberration chromatique subtile, légèrement variable
    caPass.uniforms.uAmount.value = 0.002 + Math.sin(t * 0.5) * 0.001

    // Film grain
    grainPass.uniforms.uTime.value = t * 8

    // Passants
    pedestrians.update(dt)

    // Jets d'eau
    waterJets.update(t)

    // Légère rotation de la Rotonde (effet vie)
    rotonde.rotation.y += 0.001

    composer.render()
  }

  animate()

  // ── Resize ────────────────────────────────────────────────────
  const onResize = () => {
    const w = window.innerWidth, h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    composer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  // ── Cleanup ───────────────────────────────────────────────────
  return () => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', onResize)
    st.kill()
    renderer.dispose()
  }
}
