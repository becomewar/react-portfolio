import { useState } from "react";
import { Slide } from "react-awesome-reveal";

import { useLanguageContext } from "@/hooks/LanguageContext";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

import ModalSuccess from "./ModalSuccess";

import "./styles.scss";

export default function Contact() {
  const { translate } = useLanguageContext();
  const [sent, setSent] = useState<boolean>(false);

  return (
    <section className="contact section" id="contact">
      <ModalSuccess sent={sent} setSent={setSent} />
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">{translate("ContactTitle")}</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">
          {translate("ContactSubtitle")}
        </span>
      </Slide>

      <div className="contact__container container grid">
        <ContactCard />
        <ContactForm setSent={setSent} />
      </div>
    </section>
  );
}
