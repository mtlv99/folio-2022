import FolioScene from "./FolioScene";
import { Color } from "three";
import { Canvas } from "@react-three/fiber";
import ContactInfo from "./ContactInfo";


const App: React.FC<{}> = () => {

  const backgroundColor = new Color('#373737');

  return (
    <>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <FolioScene color={backgroundColor} />
        </Canvas>
        <ContactInfo />
      </div>
      <p id="source-code-link">Check source code <a href="https://github.com/mtlv99/folio-2022">here</a>.</p>
    </>
  );
}

export default App;