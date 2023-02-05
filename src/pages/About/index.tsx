import { Fade, Slide } from "react-awesome-reveal";

import { useLanguageContext } from "@/hooks/LanguageContext";

import CardInfo from "./CardInfo";
import AboutImg from "@/assets/character-about.png";

import { PageIcon } from "./assets";

import "./styles.scss";

export default function About() {
  const { translate } = useLanguageContext();

  return (
    <section className="about section" id="about">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">{translate("AboutTitle")}</h2>
      </Slide>
      <span className="section__subtitle">{translate("AboutSubtitle")}</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about img" className="about__img" />

        <Slide direction="right" triggerOnce>
          <div className="about__data">
            <CardInfo />

            <Fade direction="right" triggerOnce>
              <p className="about__description">
                {translate("AboutDescription")}
              </p>
            </Fade>

            <a download="" href="xxx" className="button button--flex">
              {translate("AboutButton")}
              <PageIcon />
            </a>
          </div>
        </Slide>
      </div>
    </section>
  );
}
