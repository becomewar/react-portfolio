import "./styles.scss";

export default function CardInfo() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa fa-trophy about__icon" />
        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">2 Anos</span>
      </div>

      <div className="about__box">
        <i className="fa fa-briefcase about__icon" />
        <h3 className="about__title">Completado</h3>
        <span className="about__subtitle">10+ Projetos</span>
      </div>

      <div className="about__box">
        <i className="fa fa-headphones about__icon" />
        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
