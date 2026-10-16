import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Skills.module.css";
import SkillsGlobe from "../ui/SkillsGlobe/SkillsGlobe";
import SKILLS, { CATEGORIES } from "../../data/skills";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 03 — Tecnologias ("Meu repertório").
 * Cabeçalho fixo (sticky) à esquerda e globo 3D de tecnologias à direita.
 * As tecnologias vêm de src/data/skills.js e podem ser filtradas por categoria.
 * O valor do filtro usa o nome original da categoria; o rótulo é traduzido.
 */
const ALL = "Todas";

// Mapeia o nome interno da categoria para a chave de tradução do rótulo.
const CAT_KEY = {
  Linguagens: "skills.cat_Linguagens",
  Frameworks: "skills.cat_Frameworks",
  "Cloud & Infra": "skills.cat_CloudInfra",
  Ferramentas: "skills.cat_Ferramentas",
};

function Skills() {
  const [filter, setFilter] = useState(ALL);
  const { ref, shown } = useRevealOnScroll();
  const { t } = useTranslation();

  const visibleSkills =
    filter === ALL
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === filter);

  return (
    <section
      id="tecnologias"
      ref={ref}
      className={`${styles.skills} revealGroup ${shown ? "is-shown" : ""}`}
    >
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={styles.header}>
        <span className={`${styles.sceneLabel} revealItem`} style={{ "--i": 0 }}>
          {t("skills.sceneLabel")}
        </span>
        <h2 className={`${styles.title} revealItem`} style={{ "--i": 1 }}>
          {t("skills.title")}
        </h2>
        <p className={`${styles.intro} revealItem`} style={{ "--i": 2 }}>
          {t("skills.intro")}
        </p>

        {/* Filtro por categoria */}
        <div
          className={`${styles.filters} revealItem`}
          style={{ "--i": 3 }}
          role="group"
          aria-label={t("skills.filterLabel")}
        >
          <button
            type="button"
            className={`${styles.filter} ${filter === ALL ? styles.filterActive : ""}`}
            onClick={() => setFilter(ALL)}
            aria-pressed={filter === ALL}
          >
            {t("skills.all")}
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filter} ${filter === category ? styles.filterActive : ""}`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {t(CAT_KEY[category])}
            </button>
          ))}
        </div>
      </div>

      {/* Coluna direita (globo 3D de tecnologias) */}
      <div className={`${styles.content} revealItem`} style={{ "--i": 4 }}>
        <SkillsGlobe skills={visibleSkills} label={t("skills.globeLabel")} />
      </div>
    </section>
  );
}

export default Skills;
