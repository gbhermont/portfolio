import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import EXPERIENCES from "../../data/experiences";

/**
 * Cena 05 — Experiência ("Aprender, na prática").
 * Timeline vertical: cabeçalho fixo (sticky) à esquerda e a lista de
 * experiências à direita. As experiências vêm de src/data/experiences.js
 * (conteúdo bilíngue); o cabeçalho vem do i18n.
 */
function Experience() {
  const { ref, shown } = useRevealOnScroll();
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "en" ? "en" : "pt";

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`${styles.experience} revealGroup ${shown ? "is-shown" : ""}`}
    >
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={`${styles.header} revealItem`} style={{ "--i": 0 }}>
        <span className={styles.sceneLabel}>{t("experience.sceneLabel")}</span>
        <h2 className={styles.title}>{t("experience.title")}</h2>
        <p className={styles.intro}>{t("experience.intro")}</p>
      </div>

      {/* Coluna direita (timeline) — cada item entra em cascata */}
      <div className={styles.timeline}>
        {EXPERIENCES.map((exp, index) => (
          <article
            key={exp.id}
            className={`${styles.item} revealItem`}
            style={{ "--i": index + 1 }}
          >
            <span className={styles.period}>{exp.period[lang]}</span>
            <h3 className={styles.role}>{exp.role[lang]}</h3>
            <span className={styles.institution}>{exp.institution}</span>
            <p className={styles.description}>{exp.description[lang]}</p>
            {exp.tags && (
              <div className={styles.tags}>
                {exp.tags[lang].map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
