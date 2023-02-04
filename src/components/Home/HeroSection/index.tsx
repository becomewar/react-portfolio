import { Rotate } from "react-awesome-reveal";
import "./styles.scss";

export default function HeroSection() {
  return (
    <div className="home__data">
      <Rotate triggerOnce>
        <h1 className="home__title">Diego Costa</h1>
      </Rotate>
    </div>
  );
}
