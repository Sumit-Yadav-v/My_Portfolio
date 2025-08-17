import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import {css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript
} from "../../assets";


import CanvasLoader from "../Loader";

// ✅ Preload texture
useLoader.preload(TextureLoader, css);
useLoader.preload(TextureLoader, mongodb);
useLoader.preload(TextureLoader, reactjs);
useLoader.preload(TextureLoader, tailwind);
useLoader.preload(TextureLoader, redux);
useLoader.preload(TextureLoader, figma);
useLoader.preload(TextureLoader, git);
useLoader.preload(TextureLoader, html);
useLoader.preload(TextureLoader, nodejs);
useLoader.preload(TextureLoader, typescript);
useLoader.preload(TextureLoader, threejs);
useLoader.preload(TextureLoader, docker);
useLoader.preload(TextureLoader, javascript);


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
      
    </Float>
    
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      
      dpr={[1,2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        
      </Suspense>
      
      <Preload all />
    </Canvas>
    
  );
};

export default BallCanvas;
