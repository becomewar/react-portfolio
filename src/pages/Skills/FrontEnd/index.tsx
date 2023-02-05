import { useLanguageContext } from "@/hooks/LanguageContext";

export function FrontEnd() {
  const { translate } = useLanguageContext();

  return (
    <div className="skills__content">
      <h3 className="skills__title">{translate("SkillsCardFrontTitle")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">
                {translate("SkillsAdvanced")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Typescript </h3>
              <span className="skills__level">
                {translate("SkillsAdvanced")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">
                {translate("SkillsAdvanced")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">
                {translate("SkillsAdvanced")}
              </span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">
                {translate("SkillsBeginner")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
