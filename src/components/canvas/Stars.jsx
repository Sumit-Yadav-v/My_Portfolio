"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";

const Stars = (props) => {
  const ref = useRef();

  // Generate 20,000 random points inside a sphere radius 1.5
  const [sphere] = useState(
    () => inSphere(new Float32Array(10000), { radius: 1.5 })
  );

  // Rotate stars slowly
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
     <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
  <PointMaterial
    transparent
    color="#f272c8"
    size={0.002}
    sizeAttenuation
    depthWrite={false}
  />
</Points>

    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
