import { Slide } from "react-awesome-reveal";
import "./styles.scss";
import { useLanguageContext } from "@/hooks/LanguageContext";

export default function ContactCard() {
  const { translate } = useLanguageContext();

  return (
    <Slide direction="left" triggerOnce>
      <div className="contact__content">
        <h3 className="contact__title">Converse comigo</h3>

        <div className="contact__info">
          <div className="contact__card">
            <i className="bx bx-mail-send conact__card-icon" />
            <h3 className="conact__card-title">Email</h3>
            <span className="contact__card-data">d.hcosta@proton.me</span>
            <a
              href="mailto: d.hcosta@proton.me"
              target="_blank"
              className="contact__button"
              rel="noreferrer"
            >
              {translate("ContactTitle")}
              <i className="bx bx-right-arrow-alt contact__button-icon" />
            </a>
          </div>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-whatsapp conact__card-icon" />
              <h3 className="conact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+55 (19) 99974-1378</span>
              <a
                href="https://api.whatsapp.com/send?phone=3126900771&text=Hello, more information!"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                {translate("ContactTitle")}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-discord conact__card-icon" />
              <h3 className="conact__card-title">Discord</h3>
              <span className="contact__card-data">Vrag#5842</span>
              <a
                href="https://discordapp.com/users/921538838709534772"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                {translate("ContactTitle")}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
