import styles from "./Hero.module.css";
import HeroStage from "../ui/HeroStage/HeroStage";

/**
 * Cena de abertura (página inicial / hero).
 * Esqueleto estrutural baseado no protótipo de alta fidelidade.
 * Conteúdo e dados reais serão movidos para src/data e i18n depois.
 *
 * O menu lateral de cenas foi movido para o layout (SceneIndex), para
 * acompanhar todas as seções.
 */
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/gbhermont" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gbhermont" },
  { label: "E-mail", href: "mailto:gabrielsjh2007@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/5531992021581" },
];

function Hero() {
  return (
    <section id="abertura" className={styles.hero}>
      {/* Conteúdo principal */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>ENGENHARIA DE SOFTWARE · EM FORMAÇÃO</p>

        <h1 className={styles.name}>
          <span className={styles.nameFirst}>Gabriel</span>
          <span className={styles.nameLast}>Hermont</span>
        </h1>

        <p className={styles.logline}>Boas histórias merecem bom código.</p>

        <p className={styles.description}>
          Transformo curiosidade em software — com atenção às pessoas, aos
          detalhes e ao que vem a seguir.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.cta}>
            Explorar projetos <span aria-hidden="true">↗</span>
          </a>
          <span className={styles.ctaNote}>
            Uma ideia. Um commit. Uma nova cena.
          </span>
        </div>
      </div>

      {/* Visual cinematográfico: elementos flutuantes e arrastáveis */}
      <div className={styles.visual}>
        <HeroStage />
        <span className={styles.visualTag}>INT. FUTURO — DIA</span>
        <span className={styles.visualTag}>VOL. 01 / 2026</span>
      </div>

      {/* Rodapé do hero: redes sociais + pista de rolagem */}
      <div className={styles.socialBar}>
        <nav className={styles.socials} aria-label="Redes sociais">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <span className={styles.scrollHint}>role para a próxima cena ⌄</span>
      </div>
    </section>
  );
}

export default Hero;
