import React, { useRef } from "react";
import { Color, Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface Props {
  color: Color;
}

const FolioScene: React.FC<Props> = ({ color }) => {
  const { scene, camera, viewport } = useThree();

  scene.background = color;

  // Calculates where the torus should appear, according to viewport size
  const torusPositionX = Math.max(Math.round(viewport.width / 5), 1.35);

  const TorusKnot = () => {
    const torusRef: React.MutableRefObject<Mesh> = useRef<Mesh>(null!);

    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      torusRef.current.rotation.x = elapsedTime / 4;
      torusRef.current.rotation.y = elapsedTime / 4;
    });

    return (
      <mesh ref={torusRef} position={[torusPositionX, 0, 0]}>
        <torusKnotGeometry args={[1, 0.4, 128, 12, 2, 3]} />
        <meshNormalMaterial />
      </mesh>
    );
  }


  const onResize = () => {
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', onResize);
  return (
    <>
      <OrbitControls enableDamping camera={camera} />
      <TorusKnot />
    </>
  )
}

export default FolioScene;