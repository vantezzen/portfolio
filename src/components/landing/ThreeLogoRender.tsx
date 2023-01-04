import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function ThreeLogoRender() {
  const gltf = useLoader(GLTFLoader, "/glb/logo.glb");
  const logoMesh = React.useRef<any>();

  useMemo(() => {
    const material = new THREE.MeshPhysicalMaterial({
      roughness: 0.5,
      transmission: 0.7,
      color: "#212121",
    });
    gltf.scene.traverse((o: any) => {
      if (o.isMesh) o.material = material;
    });
  }, [gltf]);

  useEffect(() => {
    if (logoMesh.current) {
      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const INTENSITY = 1.5;

        logoMesh.current.rotation.x = THREE.MathUtils.lerp(
          logoMesh.current.rotation.x,
          (y - 0.25) * INTENSITY,
          0.1
        );
        logoMesh.current.rotation.y = THREE.MathUtils.lerp(
          logoMesh.current.rotation.y,
          (x - 1) * INTENSITY,
          0.1
        );
      };

      document.addEventListener("mousemove", onMouseMove);
      return () => document.removeEventListener("mousemove", onMouseMove);
    }
  }, [logoMesh]);

  useFrame(() => {
    if (logoMesh.current) {
      logoMesh.current.rotation.y += 0.0025;
      logoMesh.current.position.y = Math.sin(Date.now() / 1000) / 5;
    }
  });

  return (
    <>
      <ambientLight />

      <Suspense fallback={null}>
        <primitive
          object={gltf.scene}
          scale={[2, 2, 2]}
          ref={logoMesh}
          rotation={[0, 0, 0]}
          //children-2-material-color="#212121"
        ></primitive>
      </Suspense>
    </>
  );
}

export default ThreeLogoRender;
