import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.2} groundColor="black" />
      <spotLight
        position={[-15, 35, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={512} // 👈 lower shadow resolution
      />
      <pointLight intensity={0.8} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.05 : 0.072}
        position={isMobile ? [0, -3, -0.5] : [0, -3.8, -0.6]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(ua) || /iPhone|iPad|iPod/i.test(ua)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]} // 👈 lighter rendering on mobile
      camera={{ position: isMobile ? [15, 2, 5] : [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
