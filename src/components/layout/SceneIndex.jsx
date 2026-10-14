import styles from "./SceneIndex.module.css";

/**
 * Menu lateral de cenas (índice de navegação).
 * Faz parte do layout: fica fixo na tela e acompanha todas as seções.
 *
 * NOTA: nesta fase é apenas visual — não é clicável e não destaca a cena ativa
 * conforme a rolagem. A navegação por clique e o scroll spy serão adicionados
 * depois.
 */
const SCENES = [
  { num: "01", label: "Abertura" },
  { num: "02", label: "Sobre mim" },
  { num: "03", label: "Tecnologias" },
  { num: "04", label: "Em cartaz" },
  { num: "05", label: "Experiência" },
  { num: "06", label: "Contato" },
];

function SceneIndex() {
  return (
    <aside className={styles.sceneIndex} aria-label="Índice de cenas">
      <span className={styles.label}>CENAS</span>
      {SCENES.map((scene) => (
        <span key={scene.num} className={styles.item}>
          <span className={styles.num}>{scene.num}</span>
          {scene.label}
        </span>
      ))}
    </aside>
  );
}

export default SceneIndex;
