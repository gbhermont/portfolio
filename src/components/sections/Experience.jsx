import styles from "./Experience.module.css";

/**
 * Cena 05 — Experiência ("Aprender, na prática").
 * Esqueleto com timeline vertical: cabeçalho fixo (sticky) à esquerda e a lista
 * de experiências à direita. Por mais itens que existam, o cabeçalho permanece
 * ancorado durante a rolagem. Os itens são placeholders; os dados reais virão
 * de src/data depois.
 */
const EXPERIENCES = [
  {
    id: "exp-1",
    period: "MÊS ANO — ATUAL",
    role: "Cargo ou atividade",
    institution: "Empresa / Instituição",
    description: "Descrição curta da experiência (placeholder).",
  },
  {
    id: "exp-2",
    period: "MÊS ANO — MÊS ANO",
    role: "Cargo ou atividade",
    institution: "Empresa / Instituição",
    description: "Descrição curta da experiência (placeholder).",
  },
  {
    id: "exp-3",
    period: "MÊS ANO — MÊS ANO",
    role: "Cargo ou atividade",
    institution: "Empresa / Instituição",
    description: "Descrição curta da experiência (placeholder).",
  },
];

function Experience() {
  return (
    <section id="experiencia" className={styles.experience}>
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={styles.header}>
        <span className={styles.sceneLabel}>SCENE 05 — EXPERIÊNCIA</span>
        <h2 className={styles.title}>Aprender, na prática.</h2>
        <p className={styles.intro}>
          Minha trajetória profissional e acadêmica, uma etapa de cada vez.
        </p>
      </div>

      {/* Coluna direita (timeline) */}
      <div className={styles.timeline}>
        {EXPERIENCES.map((exp) => (
          <article key={exp.id} className={styles.item}>
            <span className={styles.period}>{exp.period}</span>
            <h3 className={styles.role}>{exp.role}</h3>
            <span className={styles.institution}>{exp.institution}</span>
            <p className={styles.description}>{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
