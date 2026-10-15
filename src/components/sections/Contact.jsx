import styles from "./Contact.module.css";

/**
 * Cena 06 — Contato ("Vamos escrever a próxima cena?").
 * Esqueleto: canais de contato à esquerda e formulário à direita.
 *
 * NOTA: o envio real por e-mail (EmailJS) e as validações serão implementados
 * na próxima etapa (Lab01S02). Por enquanto o formulário apenas evita o
 * recarregamento da página ao enviar.
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

function Contact() {
  const handleSubmit = (event) => {
    // Placeholder: o envio real (EmailJS) será adicionado depois.
    event.preventDefault();
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.formTitle}>Deixe sua mensagem.</h3>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="nome">
              NOME
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              className={styles.input}
              placeholder="Como você se chama?"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              E-MAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="voce@exemplo.com"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="mensagem">
            MENSAGEM
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            className={styles.textarea}
            placeholder="Conte um pouco sobre a sua ideia ou oportunidade..."
          />
        </div>

        <button type="submit" className={styles.submit}>
          Enviar mensagem <span aria-hidden="true">↗</span>
        </button>
        <span className={styles.note}>Todos os campos são obrigatórios.</span>
      </form>
    </section>
  );
}

export default Contact;
