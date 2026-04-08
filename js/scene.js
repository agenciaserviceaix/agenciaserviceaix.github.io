// ================================================================
// AgenciaService — Intro 3D : Cours Mirabeau
// Three.js ES Module + EffectComposer (Bloom + Chromatic Aberration)
// ================================================================

import * as THREE from 'three';
import { EffectComposer }   from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }        from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass }   from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass }        from 'three/addons/postprocessing/ShaderPass.js';

// ── CHROMATIC ABERRATION SHADER ──────────────────────────────────
const ChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    uAmount:  { value: 0.004 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uAmount;
    varying vec2 vUv;
    void main() {
      vec2 dir = normalize(vUv - 0.5);
      float dist = length(vUv - 0.5);
      float s = dist * dist * uAmount;
      float r = texture2D(tDiffuse, vUv + dir * s * 1.8).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - dir * s * 1.8).b;
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `,
};

// ── SETUP ────────────────────────────────────────────────────────
const canvas   = document.getElementById('canvas');
const W = window.innerWidth, H = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(W, H);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const scene  = new THREE.Scene();
scene.fog    = new THREE.FogExp2(0xB46A28, 0.007);

const camera = new THREE.PerspectiveCamera(62, W / H, 0.1, 800);

// ── POST-PROCESSING ──────────────────────────────────────────────
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloom = new UnrealBloomPass(
  new THREE.Vector2(W, H),
  0.55,   // strength
  0.4,    // radius
  0.72    // threshold
);
composer.addPass(bloom);

const caPass = new ShaderPass(ChromaticAberrationShader);
caPass.renderToScreen = true;
composer.addPass(caPass);

// ── CIEL ─────────────────────────────────────────────────────────
const skyMat = new THREE.ShaderMaterial({
  uniforms: {
    uTop:     { value: new THREE.Color(0x080318) },
    uHorizon: { value: new THREE.Color(0xC84822) },
    uGlow:    { value: new THREE.Color(0xF08828) },
  },
  vertexShader: `
    varying float vY;
    void main() { vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,
  fragmentShader: `
    uniform vec3 uTop, uHorizon, uGlow;
    varying float vY;
    void main() {
      vec3 col = vY > 0.0
        ? mix(uHorizon, uTop, pow(vY, 0.45))
        : mix(uHorizon, uGlow, clamp(-vY * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
  side: THREE.BackSide, depthWrite: false,
});
scene.add(new THREE.Mesh(new THREE.SphereGeometry(400, 24, 12), skyMat));

// ── LUMIÈRES ─────────────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xFFCC80, 0.4));
const sun = new THREE.DirectionalLight(0xFF8840, 1.7);
sun.position.set(-100, 28, -40);
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xFFAA50, 0xD49A60, 0.3));

const rotondeLamp = new THREE.PointLight(0xD4AF37, 4.0, 32);
rotondeLamp.position.set(0, 7, -65);
scene.add(rotondeLamp);

// ── SOL ──────────────────────────────────────────────────────────
scene.add(Object.assign(
  new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshLambertMaterial({ color: 0xC8A06A })),
  { rotation: new THREE.Euler(-Math.PI/2, 0, 0), position: new THREE.Vector3(0, -0.05, 0) }
));

const pave = new THREE.Mesh(new THREE.PlaneGeometry(22, 170), new THREE.MeshLambertMaterial({ color: 0xBAA888 }));
pave.rotation.x = -Math.PI / 2; pave.position.set(0, 0.01, -10);
scene.add(pave);

[-16, 16].forEach(x => {
  const sw = new THREE.Mesh(new THREE.PlaneGeometry(10, 170), new THREE.MeshLambertMaterial({ color: 0xD4C49A }));
  sw.rotation.x = -Math.PI / 2; sw.position.set(x, 0.02, -10); scene.add(sw);
});

// ── PLATANES ─────────────────────────────────────────────────────
const trunkMat  = new THREE.MeshLambertMaterial({ color: 0x9E8060 });
const leafDark  = new THREE.MeshLambertMaterial({ color: 0x22440E });
const leafLight = new THREE.MeshLambertMaterial({ color: 0x346018 });

function platane(x, z) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 4.5, 7), trunkMat);
  trunk.position.y = 2.25;
  const body = new THREE.Mesh(new THREE.SphereGeometry(3.2, 9, 7), leafDark);
  body.position.y = 7; body.scale.y = 0.72;
  const top = new THREE.Mesh(new THREE.SphereGeometry(2.1, 8, 6), leafLight);
  top.position.set(0.4, 8.2, 0.4); top.scale.y = 0.55;
  g.add(trunk, body, top);
  g.position.set(x, 0, z);
  g.rotation.y = Math.random() * Math.PI * 2;
  g.scale.setScalar(0.88 + Math.random() * 0.24);
  scene.add(g);
}
for (let i = 0; i < 16; i++) {
  const z = 68 - i * 9;
  platane(-5.5, z); platane(5.5, z);
  platane(-11, z + 0.3); platane(11, z - 0.3);
}

// ── BÂTIMENTS ─────────────────────────────────────────────────────
const bMatA = new THREE.MeshLambertMaterial({ color: 0xEAD8A8 });
const bMatB = new THREE.MeshLambertMaterial({ color: 0xDDC890 });
const bMatR = new THREE.MeshLambertMaterial({ color: 0xA08878 });
function batiment(x, z, w, h, d) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), Math.random() > 0.5 ? bMatA : bMatB);
  body.position.y = h / 2;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(w+0.2, 0.9, d+0.2), bMatR);
  roof.position.y = h + 0.45;
  g.add(body, roof); g.position.set(x, 0, z); scene.add(g);
}
[55, 33, 10, -12, -34, -52].forEach(z => {
  const h = 8 + Math.random() * 5, d = 16 + Math.random() * 6;
  batiment(-27, z, 18, h, d); batiment(27, z, 18, h * 0.9, d);
});

// ── PETITES FONTAINES ─────────────────────────────────────────────
const sMat = new THREE.MeshLambertMaterial({ color: 0xCCB898 });
function petiteFontaine(z) {
  const g = new THREE.Group();
  [
    [2, 2.3, 0.4, 24, 0.2, 0], [0.28, 0.45, 2.8, 10, 1.8, 0], [1.4, 0.7, 0.28, 24, 3.3, 0]
  ].forEach(([r1, r2, h, seg, y]) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), sMat);
    m.position.y = y; g.add(m);
  });
  g.position.set(0, 0, z); scene.add(g);
}
petiteFontaine(12); petiteFontaine(-22);

// ── LA ROTONDE (dorée) ───────────────────────────────────────────
const goldMat  = new THREE.MeshLambertMaterial({ color: 0xD4AF37, emissive: 0x6A5500, emissiveIntensity: 0.4 });
const waterMat = new THREE.MeshLambertMaterial({ color: 0x3A8AAA, transparent: true, opacity: 0.75 });

const rotonde = new THREE.Group();
const addCyl = (r1, r2, h, seg, y, mat) => {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat || sMat);
  m.position.y = y; rotonde.add(m);
};
addCyl(9.5, 9.5, 0.5, 48, 0.25);
const water = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 0.05, 48), waterMat);
water.position.y = 0.55; rotonde.add(water);
const muret = new THREE.Mesh(new THREE.TorusGeometry(9.5, 0.45, 7, 48), sMat);
muret.rotation.x = Math.PI/2; muret.position.y = 0.8; rotonde.add(muret);
addCyl(3.2, 3.8, 1.2, 32, 1.1);
addCyl(0.65, 0.95, 6.5, 14, 5.0);
addCyl(1.7, 1.4, 0.8, 14, 9.0);
addCyl(0.48, 0.65, 3.5, 12, 11.8);
const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.15, 16, 12), goldMat);
sphere.position.y = 14; rotonde.add(sphere);
for (let i = 0; i < 6; i++) {
  const a = (i / 6) * Math.PI * 2;
  const lion = new THREE.Mesh(new THREE.SphereGeometry(0.7, 7, 5), sMat);
  lion.position.set(Math.cos(a) * 4.8, 2.0, Math.sin(a) * 4.8);
  lion.scale.set(1.5, 1, 1.2); rotonde.add(lion);
}
rotonde.position.set(0, 0, -65);
scene.add(rotonde);

// ── PARTICULES EAU ───────────────────────────────────────────────
const pCount = 300;
const pPos   = new Float32Array(pCount * 3);
const pVel   = [];
for (let i = 0; i < pCount; i++) {
  const a = Math.random() * Math.PI * 2, r = Math.random() * 2.5;
  pPos[i*3]=Math.cos(a)*r; pPos[i*3+1]=Math.random()*9; pPos[i*3+2]=Math.sin(a)*r-65;
  pVel.push({ vx: Math.cos(a)*0.6, vy: 1.2+Math.random()*1.8, vz: Math.sin(a)*0.6, life: Math.random() });
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x88CCFF, size: 0.28, transparent: true, opacity: 0.8 })));

// ── POUSSIÈRE DORÉE ──────────────────────────────────────────────
const dCount = 500;
const dPos = new Float32Array(dCount * 3);
for (let i = 0; i < dCount; i++) {
  dPos[i*3]=(Math.random()-0.5)*50; dPos[i*3+1]=Math.random()*18; dPos[i*3+2]=(Math.random()-0.5)*160;
}
const dGeo = new THREE.BufferGeometry();
dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
scene.add(new THREE.Points(dGeo, new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.1, transparent: true, opacity: 0.45 })));

// ── TRAJECTOIRE CAMÉRA ───────────────────────────────────────────
const camCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3( 4, 40, 85),
  new THREE.Vector3( 2, 24, 58),
  new THREE.Vector3( 0, 13, 32),
  new THREE.Vector3(-2,  6, 10),
  new THREE.Vector3( 2,  4.5, -8),
  new THREE.Vector3(-1,  4.0,-26),
  new THREE.Vector3( 1,  4.2,-42),
  new THREE.Vector3( 9,  6.0,-57),
  new THREE.Vector3(15,  9.0,-65),
  new THREE.Vector3( 8, 16.0,-76),
  new THREE.Vector3( 0, 24.0,-70),
]);

const lookCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 5,  45),
  new THREE.Vector3(0, 3,  18),
  new THREE.Vector3(0, 2,  -5),
  new THREE.Vector3(0, 1, -24),
  new THREE.Vector3(0, 0, -40),
  new THREE.Vector3(0, 1, -55),
  new THREE.Vector3(0, 3, -63),
  new THREE.Vector3(0, 5, -65),
  new THREE.Vector3(0, 5, -65),
  new THREE.Vector3(0, 3, -65),
  new THREE.Vector3(0, 0, -65),
]);

// ── ANIMATION ────────────────────────────────────────────────────
const DURATION = 11000;
let startTime = null, done = false, onDoneCb = null;
const lookTarget = new THREE.Vector3();

function ease(t) { return t < 0.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2; }

function loop(ts) {
  requestAnimationFrame(loop);

  if (!done) {
    if (!startTime) startTime = ts;
    const raw = Math.min((ts - startTime) / DURATION, 1);
    const t   = ease(raw);
    camCurve.getPoint(t, camera.position);
    lookCurve.getPoint(t, lookTarget);
    camera.lookAt(lookTarget);
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = (raw * 100) + '%';
    if (raw >= 1) { done = true; if (onDoneCb) onDoneCb(); }
  }

  // Eau
  const pa = pGeo.attributes.position;
  for (let i = 0; i < pCount; i++) {
    const v = pVel[i];
    pa.array[i*3]   += v.vx * 0.02;
    pa.array[i*3+1] += v.vy * 0.04;
    pa.array[i*3+2] += v.vz * 0.02;
    v.life += 0.015;
    if (v.life > 1) {
      const a = Math.random()*Math.PI*2, r = Math.random()*1.8;
      pa.array[i*3]=Math.cos(a)*r; pa.array[i*3+1]=0.8; pa.array[i*3+2]=Math.sin(a)*r-65;
      v.vx=Math.cos(a)*0.7; v.vy=1.4+Math.random()*1.8; v.vz=Math.sin(a)*0.7; v.life=0;
    }
  }
  pa.needsUpdate = true;

  rotondeLamp.intensity = 3.5 + Math.sin(ts * 0.0025) * 0.8;
  rotonde.rotation.y   += 0.0008;
  caPass.uniforms.uAmount.value = 0.003 + Math.sin(ts * 0.0012) * 0.001;

  composer.render();
}
requestAnimationFrame(loop);

window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h; camera.updateProjectionMatrix();
  renderer.setSize(w, h); composer.setSize(w, h);
});

window.AgenciaScene = {
  onDone: cb => { onDoneCb = cb; },
  skip:   ()  => { done = true; if (onDoneCb) onDoneCb(); },
};
