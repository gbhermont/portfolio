import { useEffect, useState } from "react";
import styles from "./SceneIndex.module.css";

/**
 * Menu lateral de cenas (índice de navegação).
 * Faz parte do layout: fica fixo na tela e acompanha todas as seções.
 *
 * - Clicável: cada item é um link de âncora que leva à cena correspondente.
 *   A rolagem suave vem do `scroll-behavior: smooth` definido no CSS global.
 * - Dinâmico (scroll spy): usa IntersectionObserver para destacar a cena que
 *   está visível na tela conforme a rolagem.
 * - Barra de progresso: uma linha dourada acompanha continuamente a porcentagem
 *   rolada da página.
 * - Acessível por teclado: por serem links <a>, recebem foco e são ativáveis
 *   com Enter nativamente.
 */
const SCENES = [
  { num: "01", label: "Abertura", id: "abertura" },
  { num: "02", label: "Sobre mim", id: "sobre" },
  { num: "03", label: "Tecnologias", id: "tecnologias" },
  { num: "04", label: "Em cartaz", id: "projetos" },
  { num: "05", label: "Experiência", id: "experiencia" },
  { num: "06", label: "Contato", id: "contato" },
];

function SceneIndex() {
  const [activeId, setActiveId] = useState(SCENES[0].id);
  const [progress, setProgress] = useState(0);

  // Scroll spy: destaca a cena visível na faixa central da tela.
  useEffect(() => {
    const sections = SCENES.map((scene) =>
      document.getElementById(scene.id)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Barra de progresso: acompanha a porcentagem rolada da página inteira.
  useEffect(() => {
    let frame = null;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, ratio)));
      frame = null;
    };

    const onScroll = () => {
      // Agenda a atualização para o próximo quadro, evitando excesso de cálculos.
      if (frame === null) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className={styles.sceneIndex} aria-label="Índice de cenas">
      {/* Trilho da barra de progresso (cinza) + preenchimento dourado */}
      <div className={styles.track} aria-hidden="true">
        <div className={styles.fill} style={{ height: `${progress}%` }} />
      </div>

      <span className={styles.label}>CENAS</span>
      {SCENES.map((scene) => {
        const isActive = scene.id === activeId;
        return (
          <a
            key={scene.num}
            href={`#${scene.id}`}
            className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span className={styles.num}>{scene.num}</span>
            {scene.label}
          </a>
        );
      })}
    </aside>
  );
}

export default SceneIndex;
