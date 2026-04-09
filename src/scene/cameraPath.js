// ================================================================
// Chemin caméra : piéton qui remonte le Cours Mirabeau
// Mapping scroll 0→1 vers position + look-at
// ================================================================

import * as THREE from 'three'

const V = (x, y, z) => new THREE.Vector3(x, y, z)

export function buildCameraPaths() {
  // Chemin caméra (légère sinuosité humaine)
  const camPath = new THREE.CatmullRomCurve3([
    V( 0.0, 1.62, 76),    // 0%   Début du Cours
    V( 0.3, 1.65, 60),    // 8%
    V(-0.2, 1.60, 44),    // 18%  Platanes qui défilent
    V( 0.4, 1.64, 28),    // 30%
    V(-0.1, 1.61, 12),    // 40%
    V( 0.2, 1.63, -4),    // 50%
    V(-0.2, 1.62, -20),   // 58%
    V( 0.0, 1.64, -34),   // 65%  On aperçoit la Rotonde
    V( 0.0, 1.65, -48),   // 74%
    V( 0.0, 1.65, -60),   // 85%  Arrêt devant la fontaine
    V( 0.0, 1.80, -59),   // 92%  Légère montée de la tête
    V( 0.0, 2.20, -57),   // 100% Recul + regard vers le haut
  ])

  // Chemin look-at
  const lookPath = new THREE.CatmullRomCurve3([
    V( 0.0, 1.5,  50),    // 0%   Regard droit devant
    V( 0.0, 1.4,  34),    // 8%
    V( 0.0, 1.4,  16),    // 18%
    V( 0.0, 1.3,  -2),    // 30%
    V( 0.0, 1.3, -18),    // 40%
    V( 0.0, 1.4, -34),    // 50%
    V( 0.0, 1.5, -50),    // 58%
    V( 0.0, 2.2, -62),    // 65%  Rotonde apparaît
    V( 0.0, 4.0, -74),    // 74%  Regard vers la fontaine
    V( 0.0, 6.0, -78),    // 85%  Arrêt : regard milieu Rotonde
    V( 0.0, 8.5, -78),    // 92%
    V( 0.0, 11.0,-78),    // 100% Regard vers la sphère dorée
  ])

  return { camPath, lookPath }
}

const _pos  = new THREE.Vector3()
const _look = new THREE.Vector3()

export function getCameraState(paths, progress) {
  // Ease : légère décelération à l'approche de la fontaine
  const t = easeScroll(progress)

  paths.camPath.getPoint(t, _pos)
  paths.lookPath.getPoint(t, _look)

  return { pos: _pos, look: _look }
}

// Ease personnalisée : linéaire jusqu'à 80%, puis décélère
function easeScroll(t) {
  if (t <= 0.80) return t
  const u = (t - 0.80) / 0.20          // 0→1 sur les 20% finaux
  const eased = u * u * (3 - 2 * u)    // smoothstep
  return 0.80 + eased * 0.20
}
