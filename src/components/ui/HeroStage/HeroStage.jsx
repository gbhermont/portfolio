import { useRef } from "react";
import styles from "./HeroStage.module.css";
import galoImg from "../../../assets/galo.png";
import escudoImg from "../../../assets/escudo-cam.png";

/**
 * Palco de elementos flutuantes do hero (cinema + software).
 *
 * - Os elementos flutuam suavemente sozinhos (animação CSS).
 * - No desktop (ponteiro "mouse") podem ser arrastados: ao pegar, o elemento
 *   segue o cursor; ao soltar, permanece na nova posição, limitado ao palco.
 * - No celular (toque) o arrasto é ignorado, então o scroll da página funciona
 *   normalmente — o elemento apenas flutua.
 * - Respeita prefers-reduced-motion via CSS (a flutuação é desligada).
 *
 * Todos os elementos são SVG/HTML construídos em código (sem imagens externas).
 */

// Cada elemento: posição inicial, atraso da flutuação e o conteúdo visual.
const ELEMENTS = [
  { id: "claquete", pos: { top: "34%", left: "32%" }, delay: "0s" },
  { id: "rolo", pos: { top: "12%", left: "12%" }, delay: "0.8s" },
  { id: "codigo", pos: { top: "16%", right: "14%" }, delay: "1.6s" },
  { id: "terminal", pos: { bottom: "16%", left: "10%" }, delay: "0.4s" },
  { id: "estrela", pos: { top: "52%", right: "16%" }, delay: "1.2s" },
  { id: "cursor", pos: { bottom: "26%", right: "30%" }, delay: "2s" },
  { id: "pipoca", pos: { top: "40%", left: "8%" }, delay: "2.4s" },
  { id: "branch", pos: { bottom: "40%", right: "8%" }, delay: "1s" },
  { id: "galo", pos: { top: "58%", left: "42%" }, delay: "1.8s" },
  { id: "escudo", pos: { top: "28%", left: "50%" }, delay: "2.8s" },
];

function HeroStage() {
  const stageRef = useRef(null);

  const handlePointerDown = (event) => {
    // Só arrasta com mouse: no toque, preserva o scroll da página.
    if (event.pointerType !== "mouse") return;

    const stage = stageRef.current;
    const item = event.currentTarget;
    if (!stage) return;

    const stageRect = stage.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const offsetX = event.clientX - itemRect.left;
    const offsetY = event.clientY - itemRect.top;

    item.classList.add(styles.dragging);
    item.setPointerCapture(event.pointerId);

    const onMove = (e) => {
      let x = e.clientX - stageRect.left - offsetX;
      let y = e.clientY - stageRect.top - offsetY;
      const maxX = stageRect.width - itemRect.width;
      const maxY = stageRect.height - itemRect.height;
      x = Math.max(0, Math.min(maxX, x));
      y = Math.max(0, Math.min(maxY, y));
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      item.style.right = "auto";
      item.style.bottom = "auto";
    };

    const onUp = (e) => {
      item.classList.remove(styles.dragging);
      item.releasePointerCapture(e.pointerId);
      item.removeEventListener("pointermove", onMove);
      item.removeEventListener("pointerup", onUp);
    };

    item.addEventListener("pointermove", onMove);
    item.addEventListener("pointerup", onUp);
  };

  return (
    <div ref={stageRef} className={styles.stage} aria-hidden="true">
      {ELEMENTS.map((el) => (
        <div
          key={el.id}
          className={styles.item}
          style={{ ...el.pos, "--delay": el.delay }}
          onPointerDown={handlePointerDown}
        >
          <Element id={el.id} />
        </div>
      ))}
    </div>
  );
}

/* Os 6 elementos (cinema + software), em SVG. */
function Element({ id }) {
  switch (id) {
    case "claquete":
      return (
        <svg width="130" height="104" viewBox="0 0 130 104" className={styles.svg}>
          <rect x="1" y="26" width="128" height="76" rx="6" fill="#16161a" stroke="currentColor" strokeWidth="1.5" />
          <g>
            <rect x="1" y="2" width="128" height="22" rx="4" fill="#16161a" stroke="currentColor" strokeWidth="1.5" />
            <g fill="currentColor" opacity="0.85">
              <polygon points="8,4 24,4 14,22 -2,22" />
              <polygon points="40,4 56,4 46,22 30,22" />
              <polygon points="72,4 88,4 78,22 62,22" />
              <polygon points="104,4 120,4 110,22 94,22" />
            </g>
          </g>
          <text x="12" y="52" fill="#e4c87d" fontSize="11" fontFamily="monospace">SCENE 01</text>
          <text x="12" y="70" fill="#a9a6a0" fontSize="9" fontFamily="monospace">take &lt;dev/&gt;</text>
          <text x="12" y="88" fill="#a9a6a0" fontSize="9" fontFamily="monospace">roll: main</text>
        </svg>
      );
    case "rolo":
      return (
        <svg width="70" height="70" viewBox="0 0 70 70" className={styles.svg}>
          <circle cx="35" cy="35" r="33" fill="#16161a" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="8" fill="#0b0b0d" stroke="currentColor" strokeWidth="1" />
          <g fill="#0b0b0d" stroke="currentColor" strokeWidth="1">
            <circle cx="35" cy="16" r="4.5" />
            <circle cx="52" cy="44" r="4.5" />
            <circle cx="18" cy="44" r="4.5" />
          </g>
        </svg>
      );
    case "codigo":
      return (
        <svg width="80" height="44" viewBox="0 0 80 44" className={styles.svg}>
          <rect x="1" y="1" width="78" height="42" rx="8" fill="#16161a" stroke="#2a2a2e" strokeWidth="1" />
          <text x="40" y="29" fill="#e4c87d" fontSize="20" fontFamily="monospace" textAnchor="middle" fontWeight="700">&lt;/&gt;</text>
        </svg>
      );
    case "terminal":
      return (
        <svg width="112" height="70" viewBox="0 0 112 70" className={styles.svg}>
          <rect x="1" y="1" width="110" height="68" rx="8" fill="#16161a" stroke="#2a2a2e" strokeWidth="1" />
          <rect x="1" y="1" width="110" height="16" rx="8" fill="#1d1d22" />
          <circle cx="13" cy="9" r="2.5" fill="currentColor" />
          <circle cx="23" cy="9" r="2.5" fill="#3a3a3e" />
          <circle cx="33" cy="9" r="2.5" fill="#3a3a3e" />
          <text x="10" y="40" fill="#c9a24b" fontSize="11" fontFamily="monospace">$ build</text>
          <text x="10" y="56" fill="#a9a6a0" fontSize="11" fontFamily="monospace">&gt; cena_ok_</text>
        </svg>
      );
    case "estrela":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" className={styles.svg}>
          <polygon
            points="24,2 30,17 46,17 33,27 38,43 24,33 10,43 15,27 2,17 18,17"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      );
    case "cursor":
      return (
        <svg width="60" height="34" viewBox="0 0 60 34" className={styles.svg}>
          <rect x="1" y="1" width="58" height="32" rx="6" fill="#16161a" stroke="#2a2a2e" strokeWidth="1" />
          <text x="10" y="23" fill="#e4c87d" fontSize="14" fontFamily="monospace">git</text>
          <rect x="40" y="10" width="8" height="15" fill="currentColor" className={styles.blink} />
        </svg>
      );
    case "pipoca":
      return (
        <svg width="58" height="72" viewBox="0 0 58 72" className={styles.svg}>
          {/* balde */}
          <path d="M10 28 L48 28 L44 70 L14 70 Z" fill="#16161a" stroke="currentColor" strokeWidth="1.5" />
          <g stroke="currentColor" strokeWidth="1" opacity="0.5">
            <line x1="22" y1="30" x2="20" y2="68" />
            <line x1="34" y1="30" x2="36" y2="68" />
          </g>
          {/* pipocas */}
          <g fill="currentColor">
            <circle cx="18" cy="22" r="7" />
            <circle cx="29" cy="16" r="8" />
            <circle cx="40" cy="22" r="7" />
            <circle cx="24" cy="26" r="6" />
            <circle cx="35" cy="26" r="6" />
          </g>
        </svg>
      );
    case "branch":
      return (
        <svg width="54" height="76" viewBox="0 0 54 76" className={styles.svg}>
          {/* linha principal + ramo (git branch) */}
          <g stroke="currentColor" strokeWidth="2.5" fill="none">
            <line x1="16" y1="12" x2="16" y2="64" />
            <path d="M16 30 Q16 44 38 44" />
          </g>
          <g fill="#16161a" stroke="currentColor" strokeWidth="2.5">
            <circle cx="16" cy="12" r="7" />
            <circle cx="16" cy="64" r="7" />
            <circle cx="38" cy="44" r="7" />
          </g>
        </svg>
      );
    case "galo":
      return <img src={galoImg} alt="" className={styles.galo} draggable={false} />;
    case "escudo":
      return <img src={escudoImg} alt="" className={styles.escudo} draggable={false} />;
    default:
      return null;
  }
}

export default HeroStage;
