import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import setupTauruses from './threejsobjects/tauruses';
import setupLogo from './threejsobjects/logo';
import setupComputers from './threejsobjects/computers';
import setupFerdiLogo from './threejsobjects/ferdi';
import setupReactLogo from './threejsobjects/react';
import setupAirplane from './threejsobjects/airplane';

export default function setupThreejs() {
  // Setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xebebeb);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(10);
  // camera.position.setX(-3);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }, false)
  
  const updates = [];
  let animationPosition = -0.5;
  
  // Helpers
  // const gridHelper = new THREE.GridHelper(200, 50);
  // scene.add(gridHelper)
  // const controls = new OrbitControls(camera, renderer.domElement);
  
  // Elements
  setupTauruses(updates, scene);
  setupLogo(updates, scene);
  setupComputers(updates, scene);
  setupFerdiLogo(updates, scene);
  setupReactLogo(updates, scene);
  setupAirplane(updates, scene);
    
  // const spheregeometry = new THREE.SphereGeometry(5, 32, 32);
  // const sphere = new THREE.Mesh(spheregeometry, material);
  // scene.add(sphere);

  
  // Lights
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);
  
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
  
    // controls.update();
  
    updates.forEach((update) => update(animationPosition));
  
    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.01;
  
    renderer.render(scene, camera);

    animationPosition += 0.01;
  }
  
  animate();
  
  // Move camera
  function updateCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = (t * 0.01) + 10;
    camera.position.y = (t * 0.05);

    // camera.rotation.y = (t * 0.001);
  }
  
  document.addEventListener('scroll', updateCamera);
  updateCamera();
}