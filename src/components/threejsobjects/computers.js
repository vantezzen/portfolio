import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function setupComputers(updates, scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x212121 });
  const loader = new GLTFLoader();
  for (let i = 0; i < 40; i++) {
    loader.load('/threedee/computer.glb', function (gltf) {
      gltf.scene.traverse((o) => {
        if (o.isMesh) o.material = material;
      });
      gltf.scene.scale.set(3, 3, 3);

      gltf.scene.position.set(
        THREE.MathUtils.randFloatSpread(80),
        THREE.MathUtils.randFloatSpread(100) - 70,
        THREE.MathUtils.randFloatSpread(20) - 20
      );
    
      // Rotation
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(0.01));
      updates.push(() => {
        gltf.scene.rotation.x += x;
        gltf.scene.rotation.y += y;
        gltf.scene.rotation.z += z;
      });
  
      updates.push(() => {
        gltf.scene.rotation.y += 0.005;
      });
    
      scene.add(gltf.scene);
    }, undefined, function ( error ) {
      console.error( error );
    } );
  }
}