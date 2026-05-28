import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  

  const points = useRef();

  const particlesPosition = useMemo(() => {

    const positions = new Float32Array(3000);

    for (let i = 0; i < 3000; i++) {

      positions[i] = (Math.random() - 0.5) * 10;
    }

    return positions;

  }, []);

  useFrame(() => {

    points.current.rotation.y += 0.001;
  });

  return (
    <points ref={points}>

      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#bcd4ff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}