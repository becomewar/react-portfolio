import { Slide } from "react-awesome-reveal";

import { FrontEnd } from "./FrontEnd";
import { BackEnd } from "./BackEnd";

import "./styles.scss";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Habilidades</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Meu level técnico</span>
      </Slide>

      <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
          <FrontEnd />
        </Slide>

        <Slide direction="right" triggerOnce>
          <BackEnd />
        </Slide>
      </div>
    </section>
  );
}
