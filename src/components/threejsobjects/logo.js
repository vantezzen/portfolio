import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function setupLogo(updates, scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x212121 });
  const loader = new GLTFLoader();
  loader.load('/threedee/vantezzen_logo.glb', function ( gltf ) {
    gltf.scene.traverse((o) => {
      if (o.isMesh) o.material = material;
    });
    // gltf.scene.scale.set(2, 2, 2);
    gltf.scene.position.set(0, 0, 0);

    updates.push((position) => {
      gltf.scene.rotation.y += 0.005;
      gltf.scene.position.y = (Math.sin(position * 3) + 1) / 3;
    });
  
    scene.add( gltf.scene );
  }, undefined, function ( error ) {
    console.error( error );
  } );
}