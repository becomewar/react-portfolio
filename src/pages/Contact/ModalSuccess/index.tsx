import { useLanguageContext } from "@/hooks/LanguageContext";
import { MessageSentTypes } from "./models";
import "./styles.scss";

export default function ModalSuccess({ sent, setSent }: MessageSentTypes) {
  const { translate } = useLanguageContext();

  return (
    <div className={sent ? "popup center popup__active" : "popup center"}>
      <div className="popup__icon">
        <i className="uil uil-check uil-icon" />
      </div>
      <div className="popup__title">{translate("ModalSucessTitle")}</div>
      <div className="popup__description">
        <p className="popup__text">{translate("ModalSucessSub")}</p>
      </div>
      <div className="dissmiss__btn">
        <button onClick={() => setSent(false)}>
          {translate("ModalSucessClose")}
        </button>
      </div>
    </div>
  );
}
