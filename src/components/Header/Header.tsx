import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { useThemeContext } from "../../hooks/useThemeContext";
import { NavbarData } from "./static/data";

import "./styles.scss";
import { MoonIcon, SunIcon } from "./assets/svg/HeaderSvgIcons";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { toggleIsDarkMode, isDarkMode } = useThemeContext();

  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }

  function headerListener() {
    const headerPosition = document.querySelector(".header") as HTMLElement;

    if (window.scrollY >= 80) {
      headerPosition.classList.add("scroll-header");
    } else headerPosition.classList.remove("scroll-header");
  }

  useEffect((): void => {
    window.addEventListener("scroll", headerListener);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/my-portfolio" className="nav__logo">
          FullStack
        </a>

        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {NavbarData.map(({ id, item, icon, href }) => {
              return (
                <li className="nav__item" key={id}>
                  <Link
                    className="nav__link"
                    to={`${href}`}
                    spy
                    smooth
                    duration={50}
                  >
                    <i className={`${icon} nav__icon`} />
                    {item}
                  </Link>
                </li>
              );
            })}

            <li className="nav__item switch-icon">
              <SunIcon />

              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleIsDarkMode}
                />
                <span className="switch" />
              </label>

              <MoonIcon />
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={handleToggle} />
        </div>
        <div className="nav__toggle" onClick={handleToggle}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
}
