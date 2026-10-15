import useActiveScene from "../../hooks/useActiveScene";
import styles from "./SceneIndex.module.css";

/**
 * Menu lateral de cenas (índice de navegação).
 * Faz parte do layout: fica fixo na tela e acompanha todas as seções.
 *
 * - Clicável: cada item é um link de âncora que leva à cena correspondente.
 * - Dinâmico: destaca a cena ativa e a barra de progresso acompanha, ambos
 *   vindos do hook compartilhado useActiveScene (mesma fonte da Navbar).
 * - Acessível por teclado: por serem links <a>, recebem foco e Enter nativos.
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

const SCENE_IDS = SCENES.map((scene) => scene.id);

function SceneIndex() {
  const { activeId, progress } = useActiveScene(SCENE_IDS);

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
