import { useState } from "react";
import styles from "./Skills.module.css";
import SkillsGlobe from "../ui/SkillsGlobe/SkillsGlobe";
import SKILLS, { CATEGORIES } from "../../data/skills";

/**
 * Cena 03 — Tecnologias ("Meu repertório").
 * Cabeçalho fixo (sticky) à esquerda e globo 3D de tecnologias à direita.
 * As tecnologias vêm de src/data/skills.js e podem ser filtradas por categoria.
 */
const ALL = "Todas";

function Skills() {
  const [filter, setFilter] = useState(ALL);

  const visibleSkills =
    filter === ALL
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === filter);

  return (
    <section id="tecnologias" className={styles.skills}>
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={styles.header}>
        <span className={styles.sceneLabel}>SCENE 03 — TECNOLOGIAS</span>
        <h2 className={styles.title}>Meu repertório.</h2>
        <p className={styles.intro}>
          As linguagens e ferramentas que uso para transformar ideias em software.
          Arraste o globo para girar. Passe o mouse para ver o nome de uma
          tecnologia. Clique num ícone para acessar sua página oficial.
        </p>

        {/* Filtro por categoria */}
        <div className={styles.filters} role="group" aria-label="Filtrar por categoria">
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
      <div className={styles.content}>
        <SkillsGlobe skills={visibleSkills} />
      </div>
    </section>
  );
}

export default Skills;
