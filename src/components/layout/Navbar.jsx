import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import useActiveScene from "../../hooks/useActiveScene";
import useTheme from "../../hooks/useTheme";
import styles from "./Navbar.module.css";

/**
 * Cabeçalho fixo do portfólio: marca, links das cenas, toggle de tema e idioma.
 * O link da cena atual acende conforme a rolagem (scroll spy).
 * No mobile, os links ficam num menu que abre pelo botão hambúrguer.
 * O seletor PT/EN troca o idioma via i18next.
 */
// ids das seções + a chave de tradução do rótulo de cada link.
const LINKS = [
  { id: "sobre", key: "nav.sobre" },
  { id: "tecnologias", key: "nav.tecnologias" },
  { id: "projetos", key: "nav.projetos" },
  { id: "experiencia", key: "nav.experiencia" },
  { id: "contato", key: "nav.contato" },
];

// Lista completa de cenas (inclui abertura e créditos) para o scroll spy.
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
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Idioma usado de fato (en-US → "en").
  const lang = i18n.resolvedLanguage;

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#abertura" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.brandName}>Gabriel Hermont</span>
          <span className={styles.brandTag}>/ PORTFÓLIO</span>
        </a>

        {/* Links — no mobile viram um painel controlado pelo menu hambúrguer */}
        <nav
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
          aria-label={t("nav.mainNav")}
        >
          {LINKS.map((link) => {
            const isActive = link.id === activeId;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            );
          })}
        </nav>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "light" ? t("nav.themeDark") : t("nav.themeLight")}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
          <div className={styles.lang}>
            <button
              type="button"
              className={lang === "en" ? styles.langInactive : styles.langActive}
              onClick={() => i18n.changeLanguage("pt-BR")}
              aria-pressed={lang !== "en"}
            >
              PT
            </button>
            <span className={styles.langSep}>/</span>
            <button
              type="button"
              className={lang === "en" ? styles.langActive : styles.langInactive}
              onClick={() => i18n.changeLanguage("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          {/* Botão hambúrguer (só aparece no mobile) */}
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
