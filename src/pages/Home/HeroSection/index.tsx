import { Fade, Rotate } from "react-awesome-reveal";
import { Link } from "react-scroll";

import { ArrowIcon } from "./assets";
import "./styles.scss";

export default function HeroSection() {
  return (
    <div className="home__data">
      <Rotate triggerOnce>
        <h1 className="home__title">Diego Costa</h1>
      </Rotate>

      <Fade triggerOnce>
        <h3 className="home__subtitle">Fullstack Developer</h3>
      </Fade>

      <Fade delay={300} triggerOnce>
        <p className="home__description">
          Sou um desenvolvedor apaixonado em me desafiar com objetivos novos e
          complexos.
        </p>
      </Fade>

      <Fade delay={600} triggerOnce>
        <Link to="contact" className="button button--flex">
          Diga oi!
          <ArrowIcon />
        </Link>
      </Fade>
    </div>
  );
}
