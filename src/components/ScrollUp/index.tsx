import { useEffect } from "react";

import { Link } from "react-scroll";

import "./styles.scss";

export default function ScrollUp() {
  const scrollListener = (): void => {
    const scrollPosition = document.querySelector(".scrollup") as HTMLElement;
    if (window.scrollY >= 560) {
      scrollPosition.classList.add("show-scroll");
    } else scrollPosition.classList.remove("show-scroll");
  };

  useEffect((): void => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <Link
      to="home"
      style={{ cursor: "pointer" }}
      className="scrollup"
      spy
      smooth
      duration={50}
    >
      <i className="uil uil-arrow-up scrollup__icon" />
    </Link>
  );
}
