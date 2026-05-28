import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import AudioVisualizer from "./AudioVisualizer";
import Particles from "./Particles";

import music from "./assets/music.mp3";

export default function MusicBox() {

  const lidRef = useRef();
  const keyRef = useRef();

  const audioRef = useRef(new Audio(music));

  const audioContextRef = useRef();

  const analyserRef = useRef();

  const groupRef = useRef();

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const context = new AudioContext();

    audioContextRef.current = context;

    const source =
      context.createMediaElementSource(audioRef.current);

    const analyser = context.createAnalyser();

    source.connect(analyser);

    analyser.connect(context.destination);

    analyser.fftSize = 256;

    analyserRef.current = analyser;

  }, []);

  const handleClick = async () => {

    setOpen(!open);

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    if (audioRef.current.paused) {

      audioRef.current.play();

    } else {

      audioRef.current.pause();
    }
  };

  useFrame((state, delta) => {

    // 전체 둥둥 떠다니기
    if (groupRef.current) {

      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.1;
    }

    // 뚜껑
    if (lidRef.current) {

      lidRef.current.rotation.x = THREE.MathUtils.lerp(
  lidRef.current.rotation.x,
  open ? -1.8 : 0,
  0.05
);
    }

   
  });

  return (
    <group ref={groupRef}>

      {/* 바닥 */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.2, 0]}
      >
        <circleGeometry args={[10, 64]} />

        <meshStandardMaterial
          color="#111827"
          roughness={1}
        />
      </mesh>

      {/* 본체 */}
      {/* 오르골 바깥 몸체 */}
<mesh
  position={[0, -0.2, 0]}
  onClick={handleClick}
>
  <cylinderGeometry args={[2, 2, 1.5, 64]} />

  <meshPhysicalMaterial
    color="#5c3b1e"
    metalness={0.3}
    roughness={0.25}
    clearcoat={1}
  />
</mesh>

{/* 깊게 파인 내부 */}
<mesh position={[0, -0.15, 0]}>

  <cylinderGeometry
    args={[1.7, 1.7, 1.8, 64]}
  />

  <meshStandardMaterial
    color="#1a120d"
    side={THREE.BackSide}
  />
</mesh>

{/* 내부 바닥 */}
<mesh
  rotation={[-Math.PI / 2, 0, 0]}
  position={[0, -1.0, 0]}
>
  <circleGeometry args={[1.6, 64]} />

  <meshStandardMaterial
    color="#3d2516"
  />
</mesh>

      {/* 뚜껑 */}
      {/* 원형 뚜껑 */}
{/* 뚜껑 힌지 그룹 */}
<group
  ref={lidRef}
  position={[0, 0.8, -1.8]}
>

  {/* 반구 뚜껑 */}
  <mesh position={[0, 0, 1.8]}>

    <sphereGeometry
      args={[2, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]}
    />

    <meshPhysicalMaterial
      color="#7a4e2d"
      metalness={0.2}
      roughness={0.25}
      clearcoat={1}
      side={THREE.DoubleSide}
    />

  </mesh>

</group>

      {/* 수정구 */}
      <group visible={open}>

  <AudioVisualizer analyserRef={analyserRef} />

</group>

      {/* 태엽 */}
      {/* 태엽 열쇠 */}
<group
  ref={keyRef}
  position={[2.25, -0.1, 0]}
  rotation={[0, 0, Math.PI / 2]}
>

  {/* 가운데 축 */}
  <mesh>

    <cylinderGeometry
      args={[0.05, 0.05, 0.5, 32]}
    />

    <meshStandardMaterial
      color="#ffd700"
      metalness={1}
      roughness={0.2}
      emissive="#ffcc66"
      emissiveIntensity={0.5}
    />

  </mesh>

  {/* 왼쪽 손잡이 */}
  <mesh position={[-0.18, 0, 0]}>

    <torusGeometry
      args={[0.12, 0.035, 16, 100]}
    />

    <meshStandardMaterial
      color="#ffd700"
      metalness={1}
      roughness={0.2}
      emissive="#ffcc66"
      emissiveIntensity={0.5}
    />

  </mesh>

  {/* 오른쪽 손잡이 */}
  <mesh position={[0.18, 0, 0]}>

    <torusGeometry
      args={[0.12, 0.035, 16, 100]}
    />

    <meshStandardMaterial
      color="#ffd700"
      metalness={1}
      roughness={0.2}
      emissive="#ffcc66"
      emissiveIntensity={0.5}
    />

  </mesh>

  

</group>

      {/* 파티클 */}
      <Particles />

    </group>
  );
}