import SocialMedias from "./SocialMedias";
import HeroSection from "./HeroSection";

import "./styles.scss";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <SocialMedias />
          <div className="home__img" />
          <HeroSection />
        </div>
        {/* <ScrollDowm /> */}
      </div>
    </section>
  );
}
