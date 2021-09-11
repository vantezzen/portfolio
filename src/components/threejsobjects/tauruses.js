import * as THREE from 'three';
import { easeOut } from "./utils";

export default function setupTauruses(updates, scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x212121 });
  const torusgeometry = new THREE.TorusGeometry(10, 3, 16, 100);
  
  for (let i = 0; i < 70; i++) {
    const torus = new THREE.Mesh(torusgeometry, material);

    const [posX, posY, posZ] = [
      THREE.MathUtils.randFloatSpread(80),
      THREE.MathUtils.randFloatSpread(80),
      THREE.MathUtils.randFloatSpread(40) - 20
    ];
  
    torus.position.set(0, 0, 0);
  
    torus.scale.set(0.1, 0.1, 0.1);
    scene.add(torus);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(0.01));
    updates.push((animationPosition) => {
      torus.rotation.x += x;
      torus.rotation.y += y;
      torus.rotation.z += z;

      if (animationPosition <= 1 && animationPosition >= 0) {
        torus.position.set(
          easeOut(animationPosition, posX),
          easeOut(animationPosition, posY),
          easeOut(animationPosition, posZ)
        );
      }
    });
  }
}