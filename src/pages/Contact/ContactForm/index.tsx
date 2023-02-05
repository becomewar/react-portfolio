import { useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";

import { Arrow } from "../assets/ContactSvgIcons";
import { ContactFormTypes } from "./models";

import "./styles.scss";
import { useLanguageContext } from "@/hooks/LanguageContext";

export default function ContactForm({ setSent }: ContactFormTypes) {
  const [loading, setLoading] = useState<boolean>(false);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { translate } = useLanguageContext();

  const templateId: string = import.meta.env.VITE_TEMPLATE_ID;
  const serviceId: string = import.meta.env.VITE_SERVICE_ID;
  const publicKey: string = import.meta.env.VITE_PUBLIC_KEY;

  const method = "POST";
  const url = "https://api.emailjs.com/api/v1.0/email/send";

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const inputsAreNotNull =
      nameRef.current !== null &&
      emailRef.current !== null &&
      aboutRef.current !== null;

    try {
      if (inputsAreNotNull) {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },

          body:
            JSON.stringify({
              service_id: serviceId,
              template_id: templateId,
              user_id: publicKey,
              template_params: {
                name: nameRef.current.value,
                email: emailRef.current.value,
                project: aboutRef.current.value,
              },
            }) || undefined,
        });

        if (response.status === 200) {
          setSent(true);
        } else {
          setSent(false);
        }
      }
      setSent(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Slide direction="right" triggerOnce>
      <div className="contact__content">
        <h3 className="contact__title">{translate("ContactRightTitle")}</h3>

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-div">
            <label className="contact__form-tag">
              {translate("ContactNameLabel")}
            </label>
            <input
              required
              type="text"
              name="name"
              className="contact__form-input"
              placeholder={translate("ContactNamePlaceholder")}
              ref={nameRef}
            />
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag">Email</label>
            <input
              required
              type="email"
              name="email"
              className="contact__form-input"
              placeholder={translate("ContactEmaiPlaceholder")}
              ref={emailRef}
            />
          </div>
          <div className="contact__form-div contact-form-area">
            <label className="contact__form-tag">
              {translate("ContactProjectLabel")}
            </label>

            <textarea
              className="contact__form-input "
              name="project"
              cols={30}
              rows={10}
              required
              placeholder={translate("ContactProjectPlaceholder")}
              ref={aboutRef}
            />
          </div>

          <button type="submit" className="button button--flex">
            {loading ? (
              <>{translate("ContactSubmitLoading")}</>
            ) : (
              <>{translate("ContactSubmitButton")}</>
            )}
            <Arrow />
          </button>
        </form>
      </div>
    </Slide>
  );
}
