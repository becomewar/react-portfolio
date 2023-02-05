import { useState } from "react";
import { Slide } from "react-awesome-reveal";

import ModalSuccess from "./ModalSuccess";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

import "./styles.scss";

export default function Contact() {
  const [sent, setSent] = useState<boolean>(false);

  return (
    <section className="contact section" id="contact">
      <ModalSuccess sent={sent} setSent={setSent} />
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Entrar em Contato</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Me diga oi!</span>
      </Slide>

      <div className="contact__container container grid">
        <ContactCard />
        <ContactForm setSent={setSent} />
      </div>
    </section>
  );
}
