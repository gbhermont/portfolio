import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

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
    <section id="contato" className={styles.contact}>
      {/* Coluna esquerda: título + canais */}
      <div className={styles.left}>
        <span className={styles.sceneLabel}>SCENE 06 — CONTATO</span>
        <h2 className={styles.title}>Vamos escrever a próxima cena?</h2>
        <p className={styles.intro}>
          Tem uma oportunidade ou ideia? Fala comigo por um destes canais.
        </p>

        <p className={styles.availability}>
          <span className={styles.dot} aria-hidden="true" />
          DISPONÍVEL PARA OPORTUNIDADES
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h3 className={styles.formTitle}>Deixe sua mensagem.</h3>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="nome">
              NOME
            </label>
            <input
              id="nome"
              type="text"
              className={styles.input}
              placeholder="Como você se chama?"
              aria-invalid={errors.nome ? "true" : "false"}
              {...register("nome", {
                required: "Informe seu nome.",
                minLength: { value: 2, message: "Nome muito curto." },
              })}
            />
            {errors.nome && (
              <span className={styles.error}>{errors.nome.message}</span>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              E-MAIL
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="voce@exemplo.com"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Informe seu e-mail.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido.",
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
            MENSAGEM
          </label>
          <textarea
            id="mensagem"
            className={styles.textarea}
            placeholder="Conte um pouco sobre a sua ideia ou oportunidade..."
            aria-invalid={errors.mensagem ? "true" : "false"}
            {...register("mensagem", {
              required: "Escreva uma mensagem.",
              minLength: { value: 10, message: "Mensagem muito curta." },
            })}
          />
          {errors.mensagem && (
            <span className={styles.error}>{errors.mensagem.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}{" "}
          <span aria-hidden="true">↗</span>
        </button>

        {status === "success" && (
          <span className={styles.success}>
            Mensagem enviada — nos vemos na próxima cena.
          </span>
        )}
        {status === "error" && (
          <span className={styles.error}>
            Algo deu errado no envio. Tente novamente ou use outro canal.
          </span>
        )}
        {status === "idle" && (
          <span className={styles.note}>Todos os campos são obrigatórios.</span>
        )}
      </form>
    </section>
  );
}

export default Contact;
