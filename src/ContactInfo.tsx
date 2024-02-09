
const ContactInfo: React.FC<{}> = () => {
  return (
    <>
      {/* Extra container is required for positioning HTML on top of the canvas */}
      <div id="main-content">
        <div id="main-content-container">
          <div className="row">
            <h1>Hi there, I'm Marco.</h1>

            <p>I'm a Software Developer based in Costa Rica.</p>
            <p>
              I've been working as a <strong>Full-Stack Developer</strong> with
              a strong focus on <strong>Front-End Development</strong>. I'm
              experienced in creating cutting-edge web and mobile applications.
              Committed to the use of modern technologies to deliver beautiful
              and unique experiences.
            </p>
            <p>
              Feel free to contact me via email, or add me on LinkedIn. You can also check some of my work on GitHub.
            </p>

            <p>Thanks for visiting!</p>
            {/* eslint-disable jsx-a11y/anchor-has-content */}
            {/* Icons obtained from: https://simpleicons.org/ */}
            <ul className="contact-list">
              <li className="contact-list-item">
                <a className="contact-icon email" href="mailto:marcotleonv@gmail.com"></a>
              </li>
              <li className="contact-list-item">
                <a className="contact-icon github" href="https://github.com/mtlv99" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li className="contact-list-item">
                <a className="contact-icon linkedin" href="https://www.linkedin.com/in/marcoleonv/" target="_blank" rel="noopener noreferrer"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
