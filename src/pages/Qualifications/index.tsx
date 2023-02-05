import { useState } from "react";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export default function Qualifications() {
  const [toggleTab, setToggleTab] = useState<number>(1);

  function toggleTabs(index: number): void {
    setToggleTab(index);
  }

  return (
    <section className="qualification section" id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Qualificações</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Minha jornada até aqui</span>
      </Slide>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleTab === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTabs(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Educação
          </div>

          <div
            className={
              toggleTab === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTabs(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experiência
          </div>
        </div>

        <Slide direction="left" triggerOnce>
          <div className="qualification__sections">
            <div
              className={
                toggleTab === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Udemy Course</h3>
                  <span className="qualification__subtitle">
                    Python 3 Avançado (124 horas)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 14/04/22`}
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>

              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualififaction__title">Udemy Course</h3>
                  <span className="qualification__subtitle">
                    Javascript/ Typescript avançado <br /> (145.5 horas)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 14/04/22`}
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Udemy Course</h3>
                  <span className="qualification__subtitle">
                    PHP 7 Avançado (33.5 horas)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 27/06/22`}
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>

              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualififaction__title">Trilíngue</h3>
                  <span className="qualification__subtitle">
                    Eu falo três linguas. (PT-BR, EN, RU)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    2014 - Presente
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleTab === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    Desenvolvedor Fullstack
                  </h3>
                  <span className="qualification__subtitle">
                    <a href="https://site.signoweb.com.br/">SignoWeb </a>|
                    Software house em que fui responsavel pela manutenção e
                    desenvolvimento de sistemas com MERN Stack.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 06/22 - 10/22`}
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>

              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualififaction__title">
                    Desenvolvedor Front-End
                  </h3>
                  <span className="qualification__subtitle">
                    <a href=" ">EloRocket </a>| Neste Projeto, sou responsavel
                    pelo desenvolvimento front-end de um e-commerce em React.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 10/04/22 - Presente`}
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Freelance</h3>
                  <span className="qualification__subtitle">
                    Como freelancer, trabalho como fullstack em pequenas
                    aplicações e sistemas.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 01/22 - Presente`}
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
