import { useRef } from "react";
import styles from "./Projects.module.css";

/**
 * Cena 04 — Em cartaz (Projetos).
 * Esqueleto com carrossel horizontal: os cards ficam num trilho rolável e as
 * setas avançam/voltam. Esse formato permite adicionar projetos sem esticar a
 * página (escalabilidade). Os projetos abaixo são placeholders; a lista real
 * virá de src/data depois.
 */
const PROJECTS = [
  {
    num: "01",
    title: "Projeto um",
    kind: "PROJETO ACADÊMICO",
    description: "Descrição curta do projeto (placeholder).",
    tags: ["React", "Vite", "CSS"],
    github: "#",
  },
  {
    num: "02",
    title: "Projeto dois",
    kind: "PROJETO ACADÊMICO",
    description: "Descrição curta do projeto (placeholder).",
    tags: ["JavaScript", "HTML"],
    github: "#",
  },
  {
    num: "03",
    title: "Projeto três",
    kind: "PROJETO ACADÊMICO",
    description: "Descrição curta do projeto (placeholder).",
    tags: ["Node.js", "Java"],
    github: "#",
  },
];

function Projects() {
  // Referência ao trilho, para controlar a rolagem com as setas.
  const trackRef = useRef(null);

  // Rola o trilho na horizontal pela largura de um card + espaçamento.
  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = 340; // largura do card (320) + gap aproximado
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.sceneLabel}>SCENE 04 — EM CARTAZ</span>
          <h2 className={styles.title}>Em cartaz.</h2>
          <p className={styles.intro}>
            Projetos que desenvolvi, do mais antigo ao mais recente.
          </p>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scrollByCard(-1)}
            aria-label="Projeto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scrollByCard(1)}
            aria-label="Próximo projeto"
          >
            ›
          </button>
        </div>
      </div>

      {/* Trilho do carrossel */}
      <div className={styles.track} ref={trackRef}>
        {PROJECTS.map((project) => (
          <article key={project.num} className={styles.card}>
            <div className={styles.poster}>
              <span className={styles.cardNum}>{project.num}</span>
              <span className={styles.cardKind}>{project.kind}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
