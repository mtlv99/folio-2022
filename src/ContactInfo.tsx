
const ContactInfo: React.FC<{}> = () => {
  return (
    <>
      {/* Extra container is required for positioning HTML on top of the canvas */}
      <div id="main-content">
        <div id="main-content-container">
          <div className="row">
            <h1>Hi there, I'm Marco.</h1>

            <p>I'm a Software Developer based in Costa Rica.</p>
            <p>I love working with modern technologies for delivering beautiful experiences. My main focus is <strong>Front-End development</strong>.</p>
            <p>This page is currently a work in progress. I'm planning to build something cool &#40;hopefully&#41; using <strong>React + TypeScript + Three.js</strong>, so bear with me please! &#58;&#41;</p>
            <p>Feel free to contact me via <a href="mailto:marcotleonv@gmail.com">email</a>, or add me on <a href="https://www.linkedin.com/in/marcoleonv/">LinkedIn</a>. You can also check some of my work on <a href="https://github.com/mtlv99">GitHub</a>.</p>

            <p>Thanks for visiting!</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default ContactInfo;