import { useTranslation } from "react-i18next";
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
// id da seção + chave de tradução do rótulo de cada cena.
const SCENES = [
  { num: "01", key: "scenes.abertura", id: "abertura" },
  { num: "02", key: "scenes.sobre", id: "sobre" },
  { num: "03", key: "scenes.tecnologias", id: "tecnologias" },
  { num: "04", key: "scenes.projetos", id: "projetos" },
  { num: "05", key: "scenes.experiencia", id: "experiencia" },
  { num: "06", key: "scenes.contato", id: "contato" },
  { num: "07", key: "scenes.creditos", id: "creditos" },
];

const SCENE_IDS = SCENES.map((scene) => scene.id);

function SceneIndex() {
  const { t } = useTranslation();
  const { activeId, progress } = useActiveScene(SCENE_IDS);

  return (
    <aside className={styles.sceneIndex} aria-label={t("scenes.indexLabel")}>
      <span className={styles.label}>{t("scenes.label")}</span>

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
              {t(scene.key)}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default SceneIndex;
