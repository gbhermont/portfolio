import styles from "./Skills.module.css";

/**
 * Cena 03 — Tecnologias ("Meu repertório").
 * Cabeçalho fixo (sticky) à esquerda e grade de categorias à direita.
 * Tecnologias baseadas nos repositórios reais do GitHub (@gbhermont).
 * TODO: ajustar conforme seu domínio real de cada tecnologia.
 */
const CATEGORIES = [
  {
    name: "LINGUAGENS",
    items: ["JavaScript", "Python", "Java"],
  },
  {
    name: "FRAMEWORKS",
    items: ["React", "Spring Boot", "Bootstrap", "Thymeleaf"],
  },
  {
    name: "CLOUD & INFRA",
    items: ["AWS", "Azure", "Microsoft 365"],
  },
  {
    name: "IA NO DEV",
    items: ["GitHub Copilot", "Claude", "Gemini", "Kiro"],
  },
  {
    name: "FERRAMENTAS",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
  {
    name: "DESIGN",
    items: ["Figma", "Miro", "Photoshop", "Canva"],
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
