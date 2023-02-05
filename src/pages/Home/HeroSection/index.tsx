import { Fade, Rotate } from "react-awesome-reveal";
import { Link } from "react-scroll";

import { ArrowIcon } from "./assets";

import "./styles.scss";
import { useLanguageContext } from "@/hooks/LanguageContext";

export default function HeroSection() {
  const { translate } = useLanguageContext();

  return (
    <div className="home__data">
      <Rotate triggerOnce>
        <h1 className="home__title">Diego Costa</h1>
      </Rotate>

      <Fade triggerOnce>
        <h3 className="home__subtitle">{translate("HomeSubtitle")}</h3>
      </Fade>

      <Fade delay={300} triggerOnce>
        <p className="home__description">{translate("HomeDescription")}</p>
      </Fade>

      <Fade delay={600} triggerOnce>
        <Link to="contact" className="button button--flex">
          {translate("HomeButtonContact")}
          <ArrowIcon />
        </Link>
      </Fade>
    </div>
  );
}
