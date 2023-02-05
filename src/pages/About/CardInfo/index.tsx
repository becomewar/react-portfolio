import { useLanguageContext } from "@/hooks/LanguageContext";
import "./styles.scss";

export default function CardInfo() {
  const { translate } = useLanguageContext();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa fa-trophy about__icon" />
        <h3 className="about__title">{translate("AboutCardExpTitle")}</h3>
        <span className="about__subtitle">
          {translate("AboutCardExpSubtitle")}
        </span>
      </div>

      <div className="about__box">
        <i className="fa fa-briefcase about__icon" />
        <h3 className="about__title">{translate("AboutCardProjectsTitle")}</h3>
        <span className="about__subtitle">
          {translate("AboutCardProjectsSubtitle")}
        </span>
      </div>

      <div className="about__box">
        <i className="fa fa-headphones about__icon" />
        <h3 className="about__title">
          {translate("AboutCardSupportSubtitle")}
        </h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
