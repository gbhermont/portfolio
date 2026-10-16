import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 04 — Em cartaz (Projetos).
 *
 * Desktop: "pin + scroll horizontal". A seção é alta; enquanto a pessoa rola
 * por ela, o palco fica fixo (sticky) e os cards deslizam na horizontal. Ao
 * chegar no fim, a página volta a rolar normalmente.
 *
 * Mobile: o efeito é desligado — os cards viram um carrossel por toque.
 *
 * Os projetos abaixo são placeholders; a lista real virá de src/data depois.
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
  {
    num: "04",
    title: "Projeto quatro",
    kind: "PROJETO ACADÊMICO",
    description: "Descrição curta do projeto (placeholder).",
    tags: ["React", "Spring Boot"],
    github: "#",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const { ref, shown } = useRevealOnScroll();

  const [progress, setProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);

  // Índice do projeto atual (derivado do progresso), para as setas.
  const current = Math.round(progress * (PROJECTS.length - 1));

  // Ativa o modo pin só no desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 981px)");
    const apply = () => setIsPinned(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Setas: navegam projeto a projeto.
  const goToProject = (direction) => {
    const target = Math.min(
      PROJECTS.length - 1,
      Math.max(0, current + direction)
    );

    if (isPinned) {
      // No modo pin, cada projeto corresponde a uma fração do scroll da seção.
      const section = sectionRef.current;
      if (!section) return;
      const scrollable = section.offsetHeight - window.innerHeight;
      const ratio = target / (PROJECTS.length - 1);
      const top = section.offsetTop + ratio * scrollable;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // No carrossel (mobile), rola o trilho horizontalmente até o card.
      const track = trackRef.current;
      const card = track?.children[target];
      card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  // Converte o scroll vertical dentro da seção alta em translateX dos cards.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!track) return undefined;

    if (!isPinned) {
      track.style.transform = "";
      setProgress(0);
      return undefined;
    }

    let frame = null;
    const update = () => {
      frame = null;
      const scrollable = section.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(-section.getBoundingClientRect().top, 0), scrollable);
      const ratio = scrollable > 0 ? passed / scrollable : 0;
      // Distância = o quanto o trilho (largura real do conteúdo) excede a área
      // visível (o viewport que o contém). scrollWidth inclui o padding, então
      // o último card chega por completo ao fim do percurso.
      const viewport = track.parentElement;
      const distance = track.scrollWidth - viewport.clientWidth;
      track.style.transform = `translateX(${-ratio * Math.max(0, distance)}px)`;
      setProgress(ratio);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [isPinned]);

  return (
    <section
      id="projetos"
      ref={(node) => {
        sectionRef.current = node;
        ref.current = node;
      }}
      className={`${styles.projects} ${isPinned ? styles.pinned : ""} revealGroup ${
        shown ? "is-shown" : ""
      }`}
    >
      <div className={styles.stage}>
        <div className={`${styles.header} ${isPinned ? "" : "revealItem"}`} style={{ "--i": 0 }}>
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
              onClick={() => goToProject(-1)}
              disabled={current === 0}
              aria-label="Projeto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goToProject(1)}
              disabled={current === PROJECTS.length - 1}
              aria-label="Próximo projeto"
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.viewport}>
          <div className={styles.track} ref={trackRef}>
            {PROJECTS.map((project, index) => (
              <article
                key={project.num}
                className={`${styles.card} ${isPinned ? "" : "revealItem"}`}
                style={{ "--i": index + 1 }}
              >
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
        </div>

        {isPinned && (
          <div className={styles.scrollbar} aria-hidden="true">
            <div
              className={styles.scrollThumb}
              style={{
                width: `${100 / PROJECTS.length}%`,
                left: `${progress * (100 - 100 / PROJECTS.length)}%`,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
