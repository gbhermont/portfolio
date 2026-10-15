import { useState } from "react";
import styles from "./Skills.module.css";
import SkillsGlobe from "../ui/SkillsGlobe/SkillsGlobe";
import SKILLS, { CATEGORIES } from "../../data/skills";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 03 — Tecnologias ("Meu repertório").
 * Cabeçalho fixo (sticky) à esquerda e globo 3D de tecnologias à direita.
 * As tecnologias vêm de src/data/skills.js e podem ser filtradas por categoria.
 * Os elementos entram em cascata ao aparecer na tela.
 */
const ALL = "Todas";

function Skills() {
  const [filter, setFilter] = useState(ALL);
  const { ref, shown } = useRevealOnScroll();

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
          SCENE 03 — TECNOLOGIAS
        </span>
        <h2 className={`${styles.title} revealItem`} style={{ "--i": 1 }}>
          Meu repertório.
        </h2>
        <p className={`${styles.intro} revealItem`} style={{ "--i": 2 }}>
          As linguagens e ferramentas que uso para transformar ideias em software.
          Arraste o globo para girar. Passe o mouse para ver o nome de uma
          tecnologia. Clique num ícone para acessar sua página oficial.
        </p>

        {/* Filtro por categoria */}
        <div
          className={`${styles.filters} revealItem`}
          style={{ "--i": 3 }}
          role="group"
          aria-label="Filtrar por categoria"
        >
          <button
            type="button"
            className={`${styles.filter} ${filter === ALL ? styles.filterActive : ""}`}
            onClick={() => setFilter(ALL)}
            aria-pressed={filter === ALL}
          >
            {ALL}
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filter} ${filter === category ? styles.filterActive : ""}`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Coluna direita (globo 3D de tecnologias) */}
      <div className={`${styles.content} revealItem`} style={{ "--i": 4 }}>
        <SkillsGlobe skills={visibleSkills} />
      </div>
    </section>
  );
}

export default Skills;
