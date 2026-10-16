import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 06 — Contato ("Vamos escrever a próxima cena?").
 * Canais de contato à esquerda e formulário funcional à direita.
 *
 * O envio usa o EmailJS (sem back-end). As chaves ficam em variáveis de
 * ambiente (.env, fora do versionamento). A validação usa React Hook Form.
 */
const CHANNELS = [
  {
    kind: "E-MAIL",
    value: "gabrielsjh2007@gmail.com",
    href: "mailto:gabrielsjh2007@gmail.com",
  },
  {
    kind: "WHATSAPP",
    value: "+55 (31) 99202-1581",
    href: "https://wa.me/5531992021581",
  },
  {
    kind: "LINKEDIN",
    value: "linkedin.com/in/gbhermont",
    href: "https://www.linkedin.com/in/gbhermont",
  },
];

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // "idle" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const { ref, shown } = useRevealOnScroll();
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    setStatus("idle");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { nome: data.nome, email: data.email, mensagem: data.mensagem },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contato"
      ref={ref}
      className={`${styles.contact} revealGroup ${shown ? "is-shown" : ""}`}
    >
      {/* Coluna esquerda: título + canais */}
      <div className={`${styles.left} revealItem`} style={{ "--i": 0 }}>
        <span className={styles.sceneLabel}>{t("contact.sceneLabel")}</span>
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <p className={styles.intro}>{t("contact.intro")}</p>

        <p className={styles.availability}>
          <span className={styles.dot} aria-hidden="true" />
          {t("contact.availability")}
        </p>

        <div className={styles.channels}>
          {CHANNELS.map((channel) => (
            <a
              key={channel.kind}
              href={channel.href}
              className={styles.channel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.channelLabel}>
                <span className={styles.channelKind}>{channel.kind}</span>
                <span className={styles.channelValue}>{channel.value}</span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Coluna direita: formulário */}
      <form
        className={`${styles.form} revealItem`}
        style={{ "--i": 1 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h3 className={styles.formTitle}>{t("contact.formTitle")}</h3>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="nome">
              {t("contact.nameLabel")}
            </label>
            <input
              id="nome"
              type="text"
              className={styles.input}
              placeholder={t("contact.namePlaceholder")}
              aria-invalid={errors.nome ? "true" : "false"}
              {...register("nome", {
                required: t("contact.errNameRequired"),
                minLength: { value: 2, message: t("contact.errNameShort") },
              })}
            />
            {errors.nome && (
              <span className={styles.error}>{errors.nome.message}</span>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              {t("contact.emailLabel")}
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder={t("contact.emailPlaceholder")}
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: t("contact.errEmailRequired"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("contact.errEmailInvalid"),
                },
              })}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="mensagem">
            {t("contact.messageLabel")}
          </label>
          <textarea
            id="mensagem"
            className={styles.textarea}
            placeholder={t("contact.messagePlaceholder")}
            aria-invalid={errors.mensagem ? "true" : "false"}
            {...register("mensagem", {
              required: t("contact.errMessageRequired"),
              minLength: { value: 10, message: t("contact.errMessageShort") },
            })}
          />
          {errors.mensagem && (
            <span className={styles.error}>{errors.mensagem.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? t("contact.submitting") : t("contact.submit")}{" "}
          <span aria-hidden="true">↗</span>
        </button>

        {status === "success" && (
          <span className={styles.success}>{t("contact.success")}</span>
        )}
        {status === "error" && (
          <span className={styles.error}>{t("contact.error")}</span>
        )}
        {status === "idle" && (
          <span className={styles.note}>{t("contact.required")}</span>
        )}
      </form>
    </section>
  );
}

export default Contact;
