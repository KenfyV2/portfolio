import {Suspense, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./earth/scene.gltf')

  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <primitive 
      ref={earthRef}
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <ambientLight intensity={0.2} />

      <directionalLight 
        position={[-5, 4, 1]} 
        intensity={2.5}
      />

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;