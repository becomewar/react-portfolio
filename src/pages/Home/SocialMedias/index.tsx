import { Fade } from "react-awesome-reveal";

import "./styles.scss";

export default function SocialMedias() {
  return (
    <div className="home__social">
      <Fade direction="up" triggerOnce>
        <a
          href="https://www.linkedin.com/in/diegohoc/"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt" />
        </a>
      </Fade>

      <Fade direction="up" delay={100} triggerOnce>
        <a
          href="https://github.com/Vrag404"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt" />
        </a>
      </Fade>
    </div>
  );
}
