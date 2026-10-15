import { useEffect, useState } from "react";
import styles from "./IntroOverlay.module.css";

/**
 * Animação de abertura do site.
 *
 * Cobre a tela ao carregar, desenha o monograma "GH" em contorno dourado
 * (com glow), segura um instante e dissolve, revelando o hero.
 *
 * - Roda apenas na primeira visita (guardado no localStorage).
 * - Respeita prefers-reduced-motion: quem pede menos movimento não vê a intro.
 */
const STORAGE_KEY = "intro-seen";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

// Sinaliza (via atributo no <html>) que a abertura terminou. É isso que dispara
// a entrada em cascata do hero. Chamado de imediato quando não há intro.
function markIntroDone() {
  document.documentElement.setAttribute("data-intro-done", "");
}

function IntroOverlay() {
  // Decide no primeiro render se a intro deve aparecer.
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (prefersReducedMotion()) return false;
    return localStorage.getItem(STORAGE_KEY) !== "1";
  });
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Sem intro (revisita ou reduced-motion): libera a cascata do hero já.
    if (!visible) {
      markIntroDone();
      return undefined;
    }

    // Trava o scroll enquanto a intro está na tela.
    document.body.style.overflow = "hidden";
    localStorage.setItem(STORAGE_KEY, "1");

    // Quando a intro começa a sair, libera a cascata do hero (sincronizado
    // com a revelação). Depois remove a intro de vez.
    const startLeave = setTimeout(() => {
      setLeaving(true);
      markIntroDone();
    }, 2600);
    const remove = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 3400);

    return () => {
      clearTimeout(startLeave);
      clearTimeout(remove);
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${leaving ? styles.leaving : ""}`}
      aria-hidden="true"
    >
      <svg
        className={styles.monogram}
        viewBox="0 0 120 80"
        width="160"
        height="107"
      >
        {/* "GH" em contorno; o traço é "desenhado" via stroke-dashoffset */}
        <text
          x="60"
          y="58"
          textAnchor="middle"
          className={styles.letters}
        >
          GH
        </text>
      </svg>
    </div>
  );
}

export default IntroOverlay;
