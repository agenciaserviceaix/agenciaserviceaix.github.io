// ================================================================
// AgenciaService — Hero Section : Particules dorées 3D
// Three.js ES Module
// ================================================================

import * as THREE from 'three';

const canvas = document.getElementById('hero-canvas');
if (!canvas) throw new Error('hero-canvas introuvable');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setClearColor(0x000000, 0);

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
camera.position.z = 40;

function resize() {
  const w = canvas.parentElement.clientWidth;
  const h = canvas.parentElement.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener('resize', resize);

// ── PARTICULES DORÉES ────────────────────────────────────────────
const GOLD  = new THREE.Color(0xD4AF37);
const GOLD2 = new THREE.Color(0xF0CC60);
const GOLD3 = new THREE.Color(0xA88820);

const COUNT  = 900;
const LAYERS = 3;

// Géométrie avec attributs personnalisés
const geo   = new THREE.BufferGeometry();
const pos   = new Float32Array(COUNT * 3);
const col   = new Float32Array(COUNT * 3);
const sizes = new Float32Array(COUNT);
const vels  = [];

for (let i = 0; i < COUNT; i++) {
  // Distribution sphérique aplatie
  const theta = Math.random() * Math.PI * 2;
  const phi   = (Math.random() - 0.5) * Math.PI * 0.6;
  const r     = 10 + Math.random() * 30;

  pos[i*3]   = Math.cos(theta) * Math.cos(phi) * r;
  pos[i*3+1] = Math.sin(phi) * r * 0.5;
  pos[i*3+2] = Math.sin(theta) * Math.cos(phi) * r * 0.6;

  // Variation de teinte or
  const t = Math.random();
  const c = t < 0.33 ? GOLD : t < 0.66 ? GOLD2 : GOLD3;
  col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;

  // Taille variable (petites et grandes particules)
  sizes[i] = 0.08 + Math.random() * Math.random() * 0.6;

  vels.push({
    drift:  (Math.random() - 0.5) * 0.008,   // dérive horizontale
    rise:   0.006 + Math.random() * 0.012,    // montée lente
    sway:   Math.random() * Math.PI * 2,      // oscillation
    swayAmp:(Math.random()) * 0.015,
    originX: pos[i*3],
    originY: pos[i*3+1],
    originZ: pos[i*3+2],
  });
}

geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

// ── SHADER PARTICLES ─────────────────────────────────────────────
const mat = new THREE.ShaderMaterial({
  uniforms: {
    uTime:   { value: 0 },
    uPixelRatio: { value: renderer.getPixelRatio() },
  },
  vertexShader: `
    attribute float size;
    attribute vec3 color;
    varying vec3 vColor;
    varying float vAlpha;
    uniform float uPixelRatio;

    void main() {
      vColor = color;
      vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
      float dist = length(mvPos.xyz);
      vAlpha = clamp(1.0 - dist / 45.0, 0.0, 1.0);
      gl_PointSize = size * uPixelRatio * (280.0 / dist);
      gl_Position  = projectionMatrix * mvPos;
    }
  `,
  fragmentShader: `
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
      vec2 uv   = gl_PointCoord - 0.5;
      float d   = length(uv);
      if (d > 0.5) discard;

      // Disque doux avec halo
      float core = 1.0 - smoothstep(0.0, 0.25, d);
      float halo = 1.0 - smoothstep(0.2, 0.5, d);
      float alpha = (core * 0.9 + halo * 0.4) * vAlpha;

      gl_FragColor = vec4(vColor + vec3(core * 0.3), alpha);
    }
  `,
  transparent:   true,
  depthWrite:    false,
  blending:      THREE.AdditiveBlending,
  vertexColors:  true,
});

const points = new THREE.Points(geo, mat);
scene.add(points);

// ── MOUSE PARALLAX ───────────────────────────────────────────────
const mouse  = { x: 0, y: 0 };
const target = { rx: 0, ry: 0 };

window.addEventListener('mousemove', e => {
  mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
});

// ── BOUCLE ───────────────────────────────────────────────────────
let time = 0;

function loop() {
  requestAnimationFrame(loop);
  time += 0.008;

  mat.uniforms.uTime.value = time;

  // Déplacement des particules
  const pa = geo.attributes.position;
  for (let i = 0; i < COUNT; i++) {
    const v = vels[i];
    v.sway += 0.012;

    // Montée + oscillation
    pa.array[i*3]   = v.originX + Math.sin(v.sway) * v.swayAmp * 60 + v.drift * time * 30;
    pa.array[i*3+1] = v.originY + (time * v.rise * 30) % 35 - 17.5;
    pa.array[i*3+2] = v.originZ + Math.cos(v.sway * 0.7) * v.swayAmp * 30;
  }
  pa.needsUpdate = true;

  // Rotation globale lente
  points.rotation.y += 0.0008;

  // Parallax souris
  target.rx += (mouse.y * 0.08 - target.rx) * 0.04;
  target.ry += (mouse.x * 0.12 - target.ry) * 0.04;
  scene.rotation.x = target.rx;
  scene.rotation.y = target.ry;

  renderer.render(scene, camera);
}

loop();
