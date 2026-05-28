import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AudioVisualizer({ analyserRef }) {

  const meshRef = useRef();

  useFrame(() => {

    if (!analyserRef.current) return;

    const analyser = analyserRef.current;

    const dataArray = new Uint8Array(
      analyser.frequencyBinCount
    );

    analyser.getByteFrequencyData(dataArray);

    let sum = 0;

    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }

    const avg = sum / dataArray.length;

    const scale = 1 + avg / 200;

    meshRef.current.scale.set(scale, scale, scale);

    meshRef.current.rotation.y += 0.02;
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 1.5, 0]}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhysicalMaterial
        transmission={1}
        roughness={0}
        thickness={1}
        emissive="skyblue"
        emissiveIntensity={3}
        color="#ffffff"
      />
    </mesh>
  );
}