import styles from "./Experience.module.css";

/**
 * Cena 05 — Experiência ("Aprender, na prática").
 * Timeline vertical: cabeçalho fixo (sticky) à esquerda e a lista de
 * experiências à direita. Por mais itens que existam, o cabeçalho permanece
 * ancorado durante a rolagem.
 */
const EXPERIENCES = [
  {
    id: "techbiz",
    period: "MAR 2026 — ATUAL",
    role: "Jovem Aprendiz em Infraestrutura",
    institution: "TechBiz Forense Digital",
    description:
      "Atuação em infraestrutura e cloud (AWS, Microsoft 365, Azure, AD e Entra ID), gestão e controle de inventário de ativos de TI e suporte a software e hardware. Produção de documentação técnica, atendimento ao usuário e trabalho em equipe. Também participo do desenvolvimento de um sistema próprio de CSC e gestão de ativos/empresarial, atuando na correção de bugs (dev) e em testes do sistema.",
    tags: [
      "AWS",
      "Azure",
      "Microsoft 365",
      "Gestão de ativos de TI",
      "Suporte técnico",
      "Desenvolvimento",
      "Testes",
      "Documentação",
    ],
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
            {exp.tags && (
              <div className={styles.tags}>
                {exp.tags.map((tag) => (
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
