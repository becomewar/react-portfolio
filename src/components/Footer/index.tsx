import { Link } from "react-scroll";
import "./styles.scss";

export default function Footer() {
  const yearDate: Date = new Date();
  const thisYear: number = yearDate.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Diego Costa</h1>

        <ul className="footer__list">
          <li>
            <Link to="about" className="footer__link" spy smooth duration={50}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" className="footer__link" spy smooth duration={50}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="qualification"
              className="footer__link"
              spy
              smooth
              duration={50}
            >
              Qualifications
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/diegohoc/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://github.com/d-hcosta"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github" />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright {thisYear}. All rigths reserved
        </span>
      </div>
    </footer>
  );
}
