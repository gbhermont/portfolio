import styles from "./Skills.module.css";
import SkillsGlobe from "../ui/SkillsGlobe/SkillsGlobe";
import SKILLS from "../../data/skills";

/**
 * Cena 03 — Tecnologias ("Meu repertório").
 * Cabeçalho fixo (sticky) à esquerda e globo 3D de tecnologias à direita.
 * As tecnologias vêm de src/data/skills.js.
 */
function Skills() {
  return (
    <section id="tecnologias" className={styles.skills}>
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={styles.header}>
        <span className={styles.sceneLabel}>SCENE 03 — TECNOLOGIAS</span>
        <h2 className={styles.title}>Meu repertório.</h2>
        <p className={styles.intro}>
          As linguagens e ferramentas que uso para transformar ideias em software. 
          Arraste o globo para girar. 
          Passe o mouse para ver o nome de uma tecnologia. 
          Clique num ícone para acessar sua página oficial.
        </p>
      </div>

      {/* Coluna direita (globo 3D de tecnologias) */}
      <div className={styles.content}>
        <SkillsGlobe skills={SKILLS} />
      </div>
    </section>
  );
}

export default Skills;
