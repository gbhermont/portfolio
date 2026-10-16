import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 02 — Sobre mim ("Por trás da cena").
 * Layout de duas colunas: cabeçalho fixo (sticky) à esquerda e conteúdo
 * rolável à direita. Textos via i18n. Os blocos entram em cascata.
 */
function About() {
  const { ref, shown } = useRevealOnScroll();
  const { t } = useTranslation();

  return (
    <section
      id="sobre"
      ref={ref}
      className={`${styles.about} revealGroup ${shown ? "is-shown" : ""}`}
    >
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={`${styles.header} revealItem`} style={{ "--i": 0 }}>
        <span className={styles.sceneLabel}>{t("about.sceneLabel")}</span>
        <h2 className={styles.title}>{t("about.title")}</h2>
        <p className={styles.intro}>{t("about.intro")}</p>
      </div>

      {/* Coluna direita (conteúdo que rola) — itens em cascata */}
      <div className={styles.content}>
        <p className={`${styles.paragraph} revealItem`} style={{ "--i": 1 }}>
          {t("about.p1")}
        </p>
        <p className={`${styles.paragraph} revealItem`} style={{ "--i": 2 }}>
          {t("about.p2")}
        </p>
        <p className={`${styles.paragraph} revealItem`} style={{ "--i": 3 }}>
          {t("about.p3")}
        </p>

        <div className={`${styles.factSheet} revealItem`} style={{ "--i": 4 }}>
          <span className={styles.factLabel}>{t("about.factLabel")}</span>
          <div className={styles.factItem}>
            <span className={styles.factItemTitle}>{t("about.degree")}</span>
            <span className={styles.factItemMeta}>{t("about.degreeMeta")}</span>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>{t("about.tag1")}</span>
            <span className={styles.tag}>{t("about.tag2")}</span>
            <span className={styles.tag}>{t("about.tag3")}</span>
            <span className={styles.tag}>{t("about.tag4")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
