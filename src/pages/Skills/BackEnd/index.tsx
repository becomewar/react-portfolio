import { useLanguageContext } from "@/hooks/LanguageContext";

export function BackEnd() {
  const { translate } = useLanguageContext();

  return (
    <div className="skills__content">
      <h3 className="skills__title">{translate("SkillsCardBackTitle")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">
                {translate("SkillsAdvanced")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">
                {translate("SkillsIntermed")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Ruby</h3>
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
