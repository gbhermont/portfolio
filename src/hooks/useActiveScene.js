import { useEffect, useRef, useState } from "react";

/**
 * Hook de scroll spy compartilhado.
 *
 * Dada uma lista de ids de seções (na ordem da página), retorna:
 *   - activeId: o id da cena atualmente visível (centro da viewport);
 *   - progress: 0..100, posição contínua entre o primeiro e o último marcador,
 *     suavizada (lerp) para um deslize fluido.
 *
 * Usado pela Navbar e pelo SceneIndex para acenderem a mesma cena em sincronia.
 *
 * @param {string[]} ids - ids das seções, na ordem em que aparecem na página.
 */
export default function useActiveScene(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  const [progress, setProgress] = useState(0);

  const targetProgress = useRef(0);
  const shownProgress = useRef(0);

  // Serializa os ids para dependência estável do efeito.
  const idsKey = ids.join("|");

  useEffect(() => {
    const sceneIds = idsKey.split("|").filter(Boolean);

    const computeTarget = () => {
      const sections = sceneIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (sections.length === 0) return;

      // Fim da página: força a última cena e 100% de progresso.
      const scrolledToEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToEnd) {
        setActiveId(sections[sections.length - 1].id);
        targetProgress.current = 100;
        return;
      }

      const reference = window.scrollY + window.innerHeight / 2;
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

      const divisor = Math.max(1, sections.length - 1);
      const ratio = (position / divisor) * 100;
      setActiveId(sections[currentIndex].id);
      targetProgress.current = Math.min(100, Math.max(0, ratio));
    };

    // Loop de suavização (lerp) para a barra de progresso.
    let raf = null;
    const animate = () => {
      const current = shownProgress.current;
      const target = targetProgress.current;
      const next = current + (target - current) * 0.12;
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
  }, [idsKey]);

  return { activeId, progress };
}
