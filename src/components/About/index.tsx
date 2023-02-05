import { Fade, Slide } from "react-awesome-reveal";

import CardInfo from "./CardInfo";
import AboutImg from "@/assets/character-about.png";

import { PageIcon } from "./assets";

import "./styles.scss";

export default function About() {
  return (
    <section className="about section" id="about">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Sobre Mim</h2>
      </Slide>
      <span className="section__subtitle">Saiba mais sobre mim!</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about img" className="about__img" />

        <Slide direction="right" triggerOnce>
          <div className="about__data">
            <CardInfo />

            <Fade direction="right" triggerOnce>
              <p className="about__description">
                Sou um desenvolvedor de software full-stack curioso e
                competente. Vejo-me como um eterno aprendiz, motivado a resolver
                problemas complexos. A programação pra mim é uma maneira de
                encontrar a paz em meio ao caos.
              </p>
            </Fade>

            <a download="" href="xxx" className="button button--flex">
              Baixar CV
              <PageIcon />
            </a>
          </div>
        </Slide>
      </div>
    </section>
  );
}
