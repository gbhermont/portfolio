import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 05 — Experiência ("Aprender, na prática").
 * Timeline vertical: cabeçalho fixo (sticky) à esquerda e a lista de
 * experiências à direita. Conteúdo bilíngue (pt/en) e cabeçalho via i18n.
 */
const EXPERIENCES = [
  {
    id: "techbiz",
    period: { pt: "MAR 2026 — ATUAL", en: "MAR 2026 — PRESENT" },
    role: {
      pt: "Jovem Aprendiz em Infraestrutura",
      en: "Young Apprentice in Infrastructure",
    },
    institution: "TechBiz Forense Digital",
    description: {
      pt: "Atuação em infraestrutura e cloud (AWS, Microsoft 365, Azure, AD e Entra ID), gestão e controle de inventário de ativos de TI e suporte a software e hardware. Produção de documentação técnica, atendimento ao usuário e trabalho em equipe. Também participo do desenvolvimento de um sistema próprio de CSC e gestão de ativos/empresarial, atuando na correção de bugs (dev) e em testes do sistema.",
      en: "Work in infrastructure and cloud (AWS, Microsoft 365, Azure, AD and Entra ID), management and control of IT asset inventory, and software and hardware support. Production of technical documentation, user support and teamwork. I also take part in the development of an in-house CSC and asset/business management system, working on bug fixing (dev) and system testing.",
    },
    tags: {
      pt: [
        "AWS",
        "Azure",
        "Microsoft 365",
        "Gestão de ativos de TI",
        "Suporte técnico",
        "Desenvolvimento",
        "Testes",
        "Documentação",
      ],
      en: [
        "AWS",
        "Azure",
        "Microsoft 365",
        "IT asset management",
        "Technical support",
        "Development",
        "Testing",
        "Documentation",
      ],
    },
  },
];

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
