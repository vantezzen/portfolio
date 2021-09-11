import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function setupAirplane(updates, scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x212121 });
  const loader = new GLTFLoader();
  loader.load('/threedee/airplane.glb', function ( gltf ) {
    gltf.scene.traverse((o) => {
      if (o.isMesh) o.material = material;
    });
    gltf.scene.scale.set(0.2, 0.2, 0.2);
    gltf.scene.position.set(0, -180, -50);

    updates.push(() => {
      // gltf.scene.rotation.y += 0.01;
      gltf.scene.rotation.y -= 0.01;
    });
  
    scene.add( gltf.scene );
  }, undefined, function ( error ) {
    console.error( error );
  } );
}