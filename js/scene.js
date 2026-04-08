// ================================================================
// AgenciaService — Scène 3D : Cours Mirabeau, Aix-en-Provence
// Vol de drone cinématographique vers la Fontaine de la Rotonde
// Three.js
// ================================================================

(function () {

  const canvas = document.getElementById('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xC4854A, 0.007);

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 800);

  // ── CIEL ────────────────────────────────────────────────────────
  const skyGeo = new THREE.SphereGeometry(400, 24, 12);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uTop:    { value: new THREE.Color(0x0a1428) },
      uHorizon:{ value: new THREE.Color(0xD4582A) },
      uGround: { value: new THREE.Color(0xF0A04A) },
    },
    vertexShader: `
      varying float vY;
      void main() {
        vY = normalize(position).y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uTop, uHorizon, uGround;
      varying float vY;
      void main() {
        vec3 col = vY > 0.0
          ? mix(uHorizon, uTop, pow(vY, 0.5))
          : mix(uHorizon, uGround, -vY * 3.0);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  // ── LUMIÈRES ────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xFFD090, 0.45));

  const sun = new THREE.DirectionalLight(0xFF9050, 1.6);
  sun.position.set(-100, 30, -40);
  scene.add(sun);

  scene.add(new THREE.HemisphereLight(0xFFAA50, 0xD49A60, 0.35));

  const rotondeLamp = new THREE.PointLight(0x55AAFF, 3.0, 30);
  rotondeLamp.position.set(0, 6, -65);
  scene.add(rotondeLamp);

  // ── SOL ─────────────────────────────────────────────────────────
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.MeshLambertMaterial({ color: 0xC8A06A })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.05;
  scene.add(ground);

  // Pavé du boulevard
  const pave = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 170),
    new THREE.MeshLambertMaterial({ color: 0xBAAA88 })
  );
  pave.rotation.x = -Math.PI / 2;
  pave.position.set(0, 0.01, -10);
  scene.add(pave);

  // Trottoirs
  [-16, 16].forEach(x => {
    const sw = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 170),
      new THREE.MeshLambertMaterial({ color: 0xD4C4A0 })
    );
    sw.rotation.x = -Math.PI / 2;
    sw.position.set(x, 0.02, -10);
    scene.add(sw);
  });

  // ── PLATANES ────────────────────────────────────────────────────
  const trunkMat  = new THREE.MeshLambertMaterial({ color: 0x9E8060 });
  const leafDark  = new THREE.MeshLambertMaterial({ color: 0x254A10 });
  const leafLight = new THREE.MeshLambertMaterial({ color: 0x3A7020 });

  function platane(x, z) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 4.5, 7), trunkMat);
    trunk.position.y = 2.25;
    const body = new THREE.Mesh(new THREE.SphereGeometry(3.2, 9, 7), leafDark);
    body.position.y = 7;
    body.scale.y = 0.72;
    const top = new THREE.Mesh(new THREE.SphereGeometry(2.1, 8, 6), leafLight);
    top.position.set(0.4, 8.2, 0.4);
    top.scale.y = 0.55;
    g.add(trunk, body, top);
    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI * 2;
    g.scale.setScalar(0.88 + Math.random() * 0.24);
    scene.add(g);
  }

  for (let i = 0; i < 16; i++) {
    const z = 68 - i * 9;
    platane(-5.5, z); platane(5.5, z);
    platane(-11,  z + 0.3); platane(11, z - 0.3);
  }

  // ── BÂTIMENTS ───────────────────────────────────────────────────
  const matA = new THREE.MeshLambertMaterial({ color: 0xEAD8A8 });
  const matB = new THREE.MeshLambertMaterial({ color: 0xDDC890 });
  const matR = new THREE.MeshLambertMaterial({ color: 0xA08878 });

  function batiment(x, z, w, h, d) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), Math.random() > 0.5 ? matA : matB);
    body.position.y = h / 2;
    const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.9, d + 0.2), matR);
    roof.position.y = h + 0.45;
    g.add(body, roof);
    g.position.set(x, 0, z);
    scene.add(g);
  }

  [55, 33, 10, -12, -34, -52].forEach(z => {
    const h = 8 + Math.random() * 5, d = 16 + Math.random() * 6;
    batiment(-27, z, 18, h, d);
    batiment( 27, z, 18, h * 0.9, d);
  });

  // ── PETITES FONTAINES ───────────────────────────────────────────
  const stoneMat = new THREE.MeshLambertMaterial({ color: 0xCCB898 });

  function petiteFontaine(z) {
    const g = new THREE.Group();
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(2, 2.3, 0.4, 24), stoneMat), { position: new THREE.Vector3(0, 0.2, 0) }));
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.45, 2.8, 10), stoneMat), { position: new THREE.Vector3(0, 1.8, 0) }));
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(1.4, 0.7, 0.28, 24), stoneMat), { position: new THREE.Vector3(0, 3.3, 0) }));
    g.position.set(0, 0, z);
    scene.add(g);
  }
  petiteFontaine(12);
  petiteFontaine(-22);

  // ── LA ROTONDE ──────────────────────────────────────────────────
  const goldMat  = new THREE.MeshLambertMaterial({ color: 0xC9A030 });
  const waterMat = new THREE.MeshLambertMaterial({ color: 0x3A8AAA, transparent: true, opacity: 0.75 });

  const rotonde = new THREE.Group();

  // Bassin extérieur
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(9.5, 9.5, 0.5, 48), stoneMat), { position: new THREE.Vector3(0, 0.25, 0) }));
  // Eau
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 0.05, 48), waterMat), { position: new THREE.Vector3(0, 0.55, 0) }));
  // Muret
  const muret = new THREE.Mesh(new THREE.TorusGeometry(9.5, 0.45, 7, 48), stoneMat);
  muret.rotation.x = Math.PI / 2; muret.position.y = 0.8;
  rotonde.add(muret);
  // Socle central
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.8, 1.2, 32), stoneMat), { position: new THREE.Vector3(0, 1.1, 0) }));
  // Colonne 1
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.95, 6.5, 14), stoneMat), { position: new THREE.Vector3(0, 5, 0) }));
  // Bandeau médian
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.4, 0.8, 14), stoneMat), { position: new THREE.Vector3(0, 9, 0) }));
  // Colonne 2
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.65, 3.5, 12), stoneMat), { position: new THREE.Vector3(0, 11.8, 0) }));
  // Sphère dorée
  rotonde.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(1.15, 16, 12), goldMat), { position: new THREE.Vector3(0, 14, 0) }));

  // Lions / mascarons (sphères simplifiées)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const lion = new THREE.Mesh(new THREE.SphereGeometry(0.7, 7, 5), stoneMat);
    lion.position.set(Math.cos(a) * 4.8, 2.0, Math.sin(a) * 4.8);
    lion.scale.set(1.5, 1, 1.2);
    rotonde.add(lion);
  }

  rotonde.position.set(0, 0, -65);
  scene.add(rotonde);

  // ── PARTICULES EAU ──────────────────────────────────────────────
  const pCount = 300;
  const pPositions = new Float32Array(pCount * 3);
  const pVel = [];

  for (let i = 0; i < pCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 2.5;
    pPositions[i * 3]     = Math.cos(angle) * r;
    pPositions[i * 3 + 1] = Math.random() * 9;
    pPositions[i * 3 + 2] = Math.sin(angle) * r - 65;
    pVel.push({ vx: Math.cos(angle) * 0.6, vy: 1.2 + Math.random() * 1.8, vz: Math.sin(angle) * 0.6, life: Math.random() });
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({ color: 0x88CCFF, size: 0.25, transparent: true, opacity: 0.75 });
  scene.add(new THREE.Points(pGeo, pMat));

  // ── POUSSIÈRE ATMOSPHÉRIQUE ──────────────────────────────────────
  const dCount = 400;
  const dPos = new Float32Array(dCount * 3);
  for (let i = 0; i < dCount; i++) {
    dPos[i*3]   = (Math.random()-0.5)*50;
    dPos[i*3+1] = Math.random()*18;
    dPos[i*3+2] = (Math.random()-0.5)*160;
  }
  const dGeo = new THREE.BufferGeometry();
  dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
  scene.add(new THREE.Points(dGeo, new THREE.PointsMaterial({ color: 0xFFD070, size: 0.07, transparent: true, opacity: 0.35 })));

  // ── TRAJECTOIRE CAMÉRA ──────────────────────────────────────────
  const camCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3( 4, 40, 85),   // 0 – départ haut
    new THREE.Vector3( 2, 24, 58),   // 1
    new THREE.Vector3( 0, 13, 32),   // 2
    new THREE.Vector3(-2,  6, 10),   // 3 – descente dans l'avenue
    new THREE.Vector3( 2,  4.5,  -8),// 4
    new THREE.Vector3(-1,  4, -26),  // 5 – vol entre les platanes
    new THREE.Vector3( 1,  4.2,-42), // 6
    new THREE.Vector3( 9,  6, -57),  // 7 – approche Rotonde par la droite
    new THREE.Vector3(15,  9, -65),  // 8 – cercle
    new THREE.Vector3( 8, 16, -76),  // 9 – montée
    new THREE.Vector3( 0, 24, -70),  // 10 – final, vue plongeante
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

  // ── ANIMATION ───────────────────────────────────────────────────
  const DURATION = 11000;
  let startTime = null;
  let done = false;
  let onDoneCallback = null;
  const lookTarget = new THREE.Vector3();

  function ease(t) {
    return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
  }

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

      if (raw >= 1) {
        done = true;
        if (onDoneCallback) onDoneCallback();
      }
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
        const a = Math.random() * Math.PI * 2, r = Math.random() * 1.8;
        pa.array[i*3]   = Math.cos(a)*r;
        pa.array[i*3+1] = 0.8;
        pa.array[i*3+2] = Math.sin(a)*r - 65;
        v.vx = Math.cos(a)*0.7; v.vy = 1.4 + Math.random()*1.8; v.vz = Math.sin(a)*0.7; v.life = 0;
      }
    }
    pa.needsUpdate = true;

    // Lumière fontaine pulsée
    rotondeLamp.intensity = 2.5 + Math.sin(ts * 0.0025) * 0.6;

    // Légère rotation de la Rotonde
    rotonde.rotation.y += 0.0008;

    renderer.render(scene, camera);
  }

  requestAnimationFrame(loop);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── API PUBLIQUE ────────────────────────────────────────────────
  window.AgenciaScene = {
    onDone: cb => { onDoneCallback = cb; },
    skip: () => { done = true; if (onDoneCallback) onDoneCallback(); },
  };

})();
