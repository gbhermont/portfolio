import styles from "./Navbar.module.css";

/**
 * Cabeçalho fixo do portfólio.
 * Esqueleto: nome/logo, links das cenas, toggle de tema e seletor de idioma.
 * As funcionalidades (troca real de tema e idioma) serão implementadas depois.
 */
const SCENES = [
  { id: "sobre", label: "Sobre" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#abertura" className={styles.brand}>
          <span className={styles.brandIcon} aria-hidden="true">
            🎬
          </span>
          <span className={styles.brandName}>Gabriel Hermont</span>
          <span className={styles.brandTag}>/ PORTFÓLIO</span>
        </a>

        <nav className={styles.links} aria-label="Navegação principal">
          {SCENES.map((scene) => (
            <a key={scene.id} href={`#${scene.id}`} className={styles.link}>
              {scene.label}
            </a>
          ))}
        </nav>

        <div className={styles.controls}>
          <button type="button" className={styles.themeToggle} aria-label="Alternar tema">
            ☀ ☾
          </button>
          <div className={styles.lang}>
            <button type="button" className={styles.langActive}>
              PT
            </button>
            <span className={styles.langSep}>/</span>
            <button type="button" className={styles.langInactive}>
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
