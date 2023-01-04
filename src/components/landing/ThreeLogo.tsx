import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import ThreeLogoRender from "./ThreeLogoRender";
function ThreeLogo() {
  return (
    <Canvas>
      <ThreeLogoRender />
    </Canvas>
  );
}

export default ThreeLogo;
