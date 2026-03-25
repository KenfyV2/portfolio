import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function createSeededRandom(seed = 123456789) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

const Stars = (props) => {
  const ref = useRef();

  const sphere = useMemo(() => {
    const rand = createSeededRandom(42);
    const positions = new Float32Array(100);

    for (let i = 0; i < 3000; i += 3) {
      positions[i] = (rand() - 0.5) * 2;
      positions[i + 1] = (rand() - 0.5) * 2;
      positions[i + 2] = (rand() - 0.5) * 2;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;