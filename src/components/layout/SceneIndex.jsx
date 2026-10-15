import { useEffect, useRef, useState } from "react";
import styles from "./SceneIndex.module.css";

/**
 * Menu lateral de cenas (índice de navegação).
 * Faz parte do layout: fica fixo na tela e acompanha todas as seções.
 *
 * - Clicável: cada item é um link de âncora que leva à cena correspondente.
 *   A rolagem suave vem do `scroll-behavior: smooth` definido no CSS global.
 * - Dinâmico (scroll spy): destaca a cena no centro da viewport conforme a
 *   rolagem (com tratamento especial para o fim da página).
 * - Barra de progresso: uma linha dourada preenche continuamente, calibrada
 *   pelas cenas (cada cena = uma fatia igual), ficando sincronizada com o menu.
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
  { num: "07", label: "Créditos", id: "creditos" },
];

function SceneIndex() {
  const [activeId, setActiveId] = useState(SCENES[0].id);
  const [progress, setProgress] = useState(0);

  // Alvo do progresso (valor "real" do scroll) e valor exibido (suavizado).
  const targetProgress = useRef(0);
  const shownProgress = useRef(0);

  // Scroll spy + barra de progresso.
  // O destaque da cena (activeId) é definido direto no scroll. O valor da barra
  // é suavizado num loop contínuo (lerp): a barra "persegue" o alvo a cada
  // quadro, criando um deslize fluido com leve inércia.
  useEffect(() => {
    const computeTarget = () => {
      const sections = SCENES.map((scene) =>
        document.getElementById(scene.id)
      ).filter(Boolean);

      if (sections.length === 0) return;

      // Chegou ao fim da página? Força a última cena e 100% de progresso.
      const scrolledToEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToEnd) {
        setActiveId(sections[sections.length - 1].id);
        targetProgress.current = 100;
        return;
      }

      const reference = window.scrollY + window.innerHeight / 2;
      // "position" é a posição contínua entre os marcadores.
      let position = 0;
      let currentIndex = 0;

      for (let i = 0; i < sections.length; i += 1) {
        const el = sections[i];
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (reference < top) break;

        if (reference >= bottom) {
          position = i + 1;
          currentIndex = Math.min(i + 1, sections.length - 1);
        } else {
          const within = (reference - top) / el.offsetHeight;
          position = i + within;
          currentIndex = i;
          break;
        }
      }

      // A barra vai do 1º marcador (0%) ao último (100%): divide por (n - 1).
      const ratio = (position / (sections.length - 1)) * 100;
      setActiveId(sections[currentIndex].id);
      targetProgress.current = Math.min(100, Math.max(0, ratio));
    };

    // Loop de suavização: aproxima o valor exibido do alvo a cada quadro.
    let raf = null;
    const animate = () => {
      const current = shownProgress.current;
      const target = targetProgress.current;
      const next = current + (target - current) * 0.12; // 0.12 = suavidade
      // "Encaixa" quando está bem perto, para não ficar oscilando à toa.
      shownProgress.current = Math.abs(target - next) < 0.1 ? target : next;
      setProgress(shownProgress.current);
      raf = window.requestAnimationFrame(animate);
    };

    const onScroll = () => computeTarget();

    computeTarget();
    animate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <aside className={styles.sceneIndex} aria-label="Índice de cenas">
      <span className={styles.label}>CENAS</span>

      <div className={styles.scenes}>
        {/* Trilho da barra de progresso (cinza) + preenchimento dourado.
            Vai do primeiro ao último item, para alinhar aos marcadores. */}
        <div className={styles.track} aria-hidden="true">
          <div className={styles.fill} style={{ height: `${progress}%` }} />
        </div>

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
      </div>
    </aside>
  );
}

export default SceneIndex;
