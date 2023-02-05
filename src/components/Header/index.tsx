import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { useLanguageContext } from "@/hooks/LanguageContext";
import { useThemeContext } from "@/hooks/ThemeContext";

import { Locales } from "@/constants/LanguageConstants";

import { GlobeIcon } from "./assets/HeaderSvgIcons";
import { MoonIcon, SunIcon } from "./assets";

import { NavbarData } from "./static";

import "./styles.scss";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleLang, setToggleLang] = useState<boolean>(false);
  const { toggleIsDarkMode, isDarkMode } = useThemeContext();
  const { handleChangeLanguage } = useLanguageContext();

  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }

  function handleToggleLang() {
    setToggleLang(!toggleLang);
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
        <a href=" " className="nav__logo">
          <i className="bx bxs-skull" />
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

            <li className="nav__item switch-lang" onClick={handleToggleLang}>
              <GlobeIcon />

              {toggleLang && (
                <div className="dropdown-container">
                  <div className="dropdown-list">
                    {Locales.map((lang) => (
                      <div
                        className="list-item"
                        key={lang.code}
                        onClick={() => {
                          handleChangeLanguage(lang.code);
                          setToggleLang(false);
                        }}
                      >
                        <span className={`fi ${lang.flag}`} /> {lang.code}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

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
