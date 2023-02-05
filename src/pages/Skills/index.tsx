import { Slide } from "react-awesome-reveal";

import { useLanguageContext } from "@/hooks/LanguageContext";

import { FrontEnd } from "./FrontEnd";
import { BackEnd } from "./BackEnd";

import "./styles.scss";

export default function Skills() {
  const { translate } = useLanguageContext();

  return (
    <section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">{translate("SkillsTitle")}</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">{translate("SkillsSubtitle")}</span>
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
