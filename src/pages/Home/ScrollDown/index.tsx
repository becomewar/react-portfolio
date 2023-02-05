import { Link } from "react-scroll";

import { useLanguageContext } from "@/hooks/LanguageContext";

import { MouseIcon } from "./assets";

import "./styles.scss";

export default function ScrollDown() {
  const { translate } = useLanguageContext();

  return (
    <div className="home__scroll">
      <Link
        to="about"
        spy
        smooth
        duration={50}
        className="home__scroll-button button-flex"
      >
        <MouseIcon />
        <span className="home__scroll-name scoll-d">
          {translate("HomeScrollBtn")}
        </span>
        <i className="uil uil-arrow-down home__scroll-arrow" />
      </Link>
    </div>
  );
}
