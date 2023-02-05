import { useState } from "react";
import { Slide } from "react-awesome-reveal";

import { useLanguageContext } from "@/hooks/LanguageContext";

import "./styles.scss";

export default function Qualifications() {
  const { translate } = useLanguageContext();
  const [toggleTab, setToggleTab] = useState<number>(1);

  function toggleTabs(index: number): void {
    setToggleTab(index);
  }

  return (
    <section className="qualification section" id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">{translate("QualificationsTitle")}</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">
          {translate("QualificationsSubtitle")}
        </span>
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
            {translate("QualificationsLeftTitle")}
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
            {translate("QualificationsRightTitle")}
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
                  <h3 className="qualififaction__title">
                    {translate("QualificationUdemy")}
                  </h3>
                  <span className="qualification__subtitle">
                    {translate("QualificationPython")}
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
                  <h3 className="qualififaction__title">
                    {translate("QualificationUdemy")}
                  </h3>
                  <span className="qualification__subtitle">
                    {translate("QualificationJS")}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 14/04/22`}
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    {translate("QualificationUdemy")}
                  </h3>
                  <span className="qualification__subtitle">
                    {translate("QualificationPHP")}
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
                  <h3 className="qualififaction__title">
                    {translate("QualificationTrilingual")}
                  </h3>
                  <span className="qualification__subtitle">
                    {translate("QualificationTrilingualDesc")}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    2014 - {translate("QualificationPresentDate")}
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
                    {translate("QualificationsSignoWebTitle")}
                  </h3>
                  <span className="qualification__subtitle">
                    <a href="https://site.signoweb.com.br/">SignoWeb </a>|{" "}
                    {translate("QualificationsSignoWebDesc")}
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
                    {translate("QualificationsEloRocketTitle")}
                  </h3>
                  <span className="qualification__subtitle">
                    <a href=" ">EloRocket </a> |{" "}
                    {translate("QualificationsEloRocketDesc")}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 10/04/22 - ${translate("QualificationPresentDate")}`}
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Freelance</h3>
                  <span className="qualification__subtitle">
                    {translate("QualificationsFreelancerDesc")}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender" />
                    {` 01/22 - ${translate("QualificationPresentDate")}`}
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
