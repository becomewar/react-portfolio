import { useEffect } from "react";
import { useThemeContext } from "@/hooks/useThemeContext";

import SocialMedias from "./SocialMedias";
import HeroSection from "./HeroSection";
import ScrollDown from "./ScrollDown";

import "./styles.scss";

export default function Home() {
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <SocialMedias />
          <div className="home__img" />
          <HeroSection />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
