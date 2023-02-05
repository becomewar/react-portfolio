import { MessageSentTypes } from "./models";
import "./styles.scss";

export default function ModalSuccess({ sent, setSent }: MessageSentTypes) {
  return (
    <div className={sent ? "popup center popup__active" : "popup center"}>
      <div className="popup__icon">
        <i className="uil uil-check uil-icon" />
      </div>
      <div className="popup__title">Mensagem enviada!</div>
      <div className="popup__description">
        <p className="popup__text">Irei te retornar o mais breve possivel.</p>
      </div>
      <div className="dissmiss__btn">
        <button onClick={() => setSent(false)}>Fechar</button>
      </div>
    </div>
  );
}
