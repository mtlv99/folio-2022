import React from "react";
import { Color, Mesh } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./index.css";
import { OrbitControls } from "@react-three/drei";


function TorusKnot() {
  const torusRef = React.useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    torusRef.current.rotation.x = elapsedTime / 4;
    torusRef.current.rotation.y = elapsedTime / 4;
  });

  return (
    <mesh ref={torusRef} position={[3,0,0]}>
      <torusKnotGeometry args={[1, 0.4, 128, 12, 2, 3]} />
      <meshNormalMaterial />
    </mesh>
  );
}

// For useThree hook.
function CanvasContentWrapper() {
  const { scene, camera } = useThree();
  scene.background = new Color('gray');

  return (
    <>
      <OrbitControls camera={camera} />
      <TorusKnot />
    </>
  )
}

function ContactInfo() {

  return(
    <>
      {/* Extra container is required for positioning HTML on top of the canvas */}
      <div id="main-content">
        <div id="main-content-container">
          <div className="row">
            <h1>Hi there, I'm Marco.</h1>

            <p>I'm a Software Developer based in Costa Rica.</p>
            <p>I love working with modern technologies to deliver beautiful experiencies. My main focus is Front-End development.</p>
            <p>This page is currently a work in progress. I'm planning to build something cool using <span>React + TypeScript + Three.js</span>, so bear with me please! &#58;&#41;</p> 
            <p>Feel free to contact me via email, or add me on <a href="https://www.linkedin.com/in/marcoleonv/">LinkedIn</a>. Also check my work at <a href="https://github.com/mtlv99">GitHub</a>.</p>

            <p>Thanks for visiting!</p>
          </div>
          <div id="source-code-link">
            <p>Check source code <a href="https://github.com/mtlv99/folio-2022">here</a>.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <Canvas linear dpr={[1,2]}>
        <CanvasContentWrapper />
      </Canvas>
      <ContactInfo />
    </div>
  );
}
