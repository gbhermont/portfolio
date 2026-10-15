import useActiveScene from "../../hooks/useActiveScene";
import useTheme from "../../hooks/useTheme";
import styles from "./Navbar.module.css";

/**
 * Cabeçalho fixo do portfólio: marca, links das cenas, toggle de tema e idioma.
 * O link da cena atual acende conforme a rolagem (scroll spy), usando o mesmo
 * hook compartilhado do menu lateral — então os dois ficam sempre em sincronia.
 *
 * O toggle de tema e o seletor de idioma ainda são visuais (serão implementados
 * nos requisitos de tema e i18n).
 */
const LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

// Lista completa de cenas (inclui abertura e créditos) para o scroll spy
// refletir a página inteira, mesmo que a navbar só mostre um subconjunto.
const SCENE_IDS = [
  "abertura",
  "sobre",
  "tecnologias",
  "projetos",
  "experiencia",
  "contato",
  "creditos",
];

function Navbar() {
  const { activeId } = useActiveScene(SCENE_IDS);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#abertura" className={styles.brand}>
          <span className={styles.brandName}>Gabriel Hermont</span>
          <span className={styles.brandTag}>/ PORTFÓLIO</span>
        </a>

        <nav className={styles.links} aria-label="Navegação principal">
          {LINKS.map((link) => {
            const isActive = link.id === activeId;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Ativar tema escuro"
                : "Ativar tema claro"
            }
          >
            {theme === "light" ? "☾" : "☀"}
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
