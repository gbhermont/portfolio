import styles from "./Skills.module.css";

/**
 * Cena 03 — Tecnologias ("Meu repertório").
 * Esqueleto: cabeçalho fixo (sticky) à esquerda e grade de categorias à direita.
 * As tecnologias abaixo são placeholders; a lista real virá de src/data depois.
 */
const CATEGORIES = [
  {
    name: "FRONT-END",
    items: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "BACK-END",
    items: ["Node.js", "Java"],
  },
  {
    name: "FERRAMENTAS",
    items: ["Git", "GitHub", "Vite", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="tecnologias" className={styles.skills}>
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={styles.header}>
        <span className={styles.sceneLabel}>SCENE 03 — TECNOLOGIAS</span>
        <h2 className={styles.title}>Meu repertório.</h2>
        <p className={styles.intro}>
          As linguagens e ferramentas que uso para transformar ideias em
          software.
        </p>
      </div>

      {/* Coluna direita (grade de categorias) */}
      <div className={styles.content}>
        {CATEGORIES.map((category) => (
          <div key={category.name} className={styles.category}>
            <span className={styles.categoryName}>{category.name}</span>
            <ul className={styles.list}>
              {category.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
