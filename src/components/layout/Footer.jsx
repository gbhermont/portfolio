import styles from "./Footer.module.css";

/**
 * Rodapé no estilo "créditos finais" de filme.
 * Faz parte do layout principal (junto da Navbar).
 * O ano é gerado automaticamente para evitar manutenção manual.
 */
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/gbhermont" },
  { label: "LinkedIn", href: "#" },
  { label: "E-mail", href: "#" },
  { label: "WhatsApp", href: "#" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.credits}>CRÉDITOS FINAIS</span>
        <span className={styles.name}>Gabriel Hermont</span>

        <nav className={styles.socials} aria-label="Redes sociais">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <div className={styles.meta}>
          <span>Engenharia de Software · PUC Minas</span>
          <span>© {year} Gabriel Hermont. Todos os direitos reservados.</span>
        </div>

        <span className={styles.theEnd}>fim.</span>
      </div>
    </footer>
  );
}

export default Footer;
