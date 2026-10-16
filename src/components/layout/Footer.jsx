import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import { PROFILE, SOCIALS } from "../../data/profile";

/**
 * Rodapé no estilo "créditos finais" de filme.
 * Faz parte do layout principal (junto da Navbar).
 * O ano é gerado automaticamente para evitar manutenção manual.
 * Nome e redes sociais vêm de src/data/profile.js.
 */
function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer id="creditos" className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.credits}>{t("footer.credits")}</span>
        <span className={styles.name}>{PROFILE.name}</span>

        <nav className={styles.socials} aria-label={t("footer.socialsLabel")}>
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
          <span>{t("footer.meta1")}</span>
          <span>{t("footer.meta2", { year })}</span>
        </div>

        <span className={styles.theEnd}>{t("footer.theEnd")}</span>
      </div>
    </footer>
  );
}

export default Footer;
