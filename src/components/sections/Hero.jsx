import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import HeroStage from "../ui/HeroStage/HeroStage";
import CurriculumModal from "../ui/CurriculumViewer/CurriculumModal";
import useTypewriter from "../../hooks/useTypewriter";

/**
 * Cena de abertura (página inicial / hero).
 * O menu lateral de cenas vive no layout (SceneIndex).
 * A logline usa efeito "máquina de escrever", alternando entre frases (i18n).
 */
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/gbhermont" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gbhermont" },
  { label: "E-mail", href: "mailto:gabrielsjh2007@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/5531992021581" },
];

function Hero() {
  const { t } = useTranslation();
  const [cvOpen, setCvOpen] = useState(false);
  const logline = useTypewriter([
    t("hero.logline1"),
    t("hero.logline2"),
    t("hero.logline3"),
  ]);

  return (
    <section id="abertura" className={styles.hero}>
      {/* Conteúdo principal. A classe .reveal + a variável --i criam a
          entrada em cascata (stagger): cada elemento surge com um atraso. */}
      <div className={styles.content}>
        <p className={`${styles.eyebrow} ${styles.reveal}`} style={{ "--i": 0 }}>
          {t("hero.eyebrow")}
        </p>

        <h1 className={`${styles.name} ${styles.reveal}`} style={{ "--i": 1 }}>
          <span className={styles.nameFirst}>Gabriel</span>
          <span className={styles.nameLast}>Hermont</span>
        </h1>

        <p
          className={`${styles.logline} ${styles.reveal}`}
          style={{ "--i": 2 }}
          aria-label={t("hero.logline1")}
        >
          <span>{logline}</span>
          <span className={styles.cursor} aria-hidden="true" />
        </p>

        <p className={`${styles.description} ${styles.reveal}`} style={{ "--i": 3 }}>
          {t("hero.description")}
        </p>

        <div className={`${styles.actions} ${styles.reveal}`} style={{ "--i": 4 }}>
          <button
            type="button"
            className={styles.cta}
            onClick={() => setCvOpen(true)}
          >
            {t("hero.cta")} <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>

      {/* Visual cinematográfico: elementos flutuantes e arrastáveis */}
      <div className={`${styles.visual} ${styles.reveal}`} style={{ "--i": 5 }}>
        <HeroStage />
        <span className={styles.visualTag}>INT. FUTURO — DIA</span>
        <span className={styles.visualTag}>VOL. 01 / 2026</span>
      </div>

      {/* Rodapé do hero: redes sociais + pista de rolagem */}
      <div className={`${styles.socialBar} ${styles.reveal}`} style={{ "--i": 6 }}>
        <nav className={styles.socials} aria-label={t("hero.socialsLabel")}>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <span className={styles.scrollHint}>{t("hero.scrollHint")}</span>
      </div>

      <CurriculumModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}

export default Hero;
