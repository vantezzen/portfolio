import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function setupReactLogo(updates, scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x212121 });
  const loader = new GLTFLoader();
  loader.load('/threedee/react.glb', function ( gltf ) {
    gltf.scene.traverse((o) => {
      if (o.isMesh) o.material = material;
    });
    gltf.scene.scale.set(3, 3, 3);
    gltf.scene.position.set(0, -130, -30);

    updates.push(() => {
      gltf.scene.rotation.y += 0.01;
      gltf.scene.rotation.z += 0.005;
    });
  
    scene.add( gltf.scene );
  }, undefined, function ( error ) {
    console.error( error );
  } );
}