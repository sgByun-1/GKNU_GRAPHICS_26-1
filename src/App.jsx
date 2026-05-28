import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Stars
} from "@react-three/drei";

import {
  EffectComposer,
  Bloom,
  DepthOfField
} from "@react-three/postprocessing";

import MusicBox from "./MusicBox";

export default function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      <Canvas
        camera={{ position: [0, 3, 8], fov: 50 }}
      >

        {/* 배경색 */}
        <color attach="background" args={["#050816"]} />

        {/* 조명 */}
        <ambientLight intensity={0.4} />

        <pointLight
          position={[5, 5, 5]}
          intensity={30}
          color="#ffd6ff"
        />

        <pointLight
          position={[-5, 3, -5]}
          intensity={8}
          color="#8ec5ff"
        />

        {/* 별 */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* 환경 */}
        <Environment preset="night" />

        {/* 오르골 */}
        <MusicBox />

        {/* 카메라 */}
        <OrbitControls
          enablePan={false}
          minDistance={5}
          maxDistance={12}
        />

        {/* 후처리 */}
        <EffectComposer>

          <Bloom
  intensity={0.6}
  luminanceThreshold={0.4}
  mipmapBlur={false}
/>

          <DepthOfField
  focusDistance={0.02}
  focalLength={0.02}
  bokehScale={1.5}
/>

        </EffectComposer>

      </Canvas>
    </div>
  );
}