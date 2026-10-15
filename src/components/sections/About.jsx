import styles from "./About.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Cena 02 — Sobre mim ("Por trás da cena").
 * Layout de duas colunas: cabeçalho fixo (sticky) à esquerda e conteúdo
 * rolável à direita. Conteúdo baseado no README de perfil (@gbhermont).
 * Os blocos entram em cascata quando a seção aparece na tela.
 */
function About() {
  const { ref, shown } = useRevealOnScroll();

  return (
    <section
      id="sobre"
      ref={ref}
      className={`${styles.about} revealGroup ${shown ? "is-shown" : ""}`}
    >
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={`${styles.header} revealItem`} style={{ "--i": 0 }}>
        <span className={styles.sceneLabel}>SCENE 02 — SOBRE MIM</span>
        <h2 className={styles.title}>Por trás da cena.</h2>
        <p className={styles.intro}>
          Uma breve apresentação de quem sou, minha formação e o que me move.
        </p>
      </div>

      {/* Coluna direita (conteúdo que rola) — itens em cascata */}
      <div className={styles.content}>
        <p className={`${styles.paragraph} revealItem`} style={{ "--i": 1 }}>
          Me chamo Gabriel, mas pode me chamar de Hermont. Sou apaixonado por
          tecnologia desde criança e encontrei meu caminho quando tive o
          primeiro contato com lógica de programação ainda na escola. Desde
          então, mergulhei de cabeça nesse mundo e quero nadar mais fundo a cada
          dia.
        </p>
        <p className={`${styles.paragraph} revealItem`} style={{ "--i": 2 }}>
          Hoje sou estudante de Engenharia de Software na PUC Minas e uno
          criatividade e conhecimento técnico para resolver problemas e gerar
          impacto real. Meu objetivo é evoluir constantemente, usando raciocínio
          lógico, pensamento crítico e as ferramentas certas — incluindo IA como
          aliada — para construir soluções cada vez melhores.
        </p>
        <p className={`${styles.paragraph} revealItem`} style={{ "--i": 3 }}>
          Fora do código, sou atleticano doente, fã de filmes, música e
          videogames, e pratico esportes sempre que posso.
        </p>

        <div className={`${styles.factSheet} revealItem`} style={{ "--i": 4 }}>
          <span className={styles.factLabel}>FORMAÇÃO</span>
          <div className={styles.factItem}>
            <span className={styles.factItemTitle}>
              Bacharelado em Engenharia de Software
            </span>
            <span className={styles.factItemMeta}>
              PUC Minas · 2026 - 2029 (previsto)
            </span>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Raciocínio lógico</span>
            <span className={styles.tag}>Código limpo</span>
            <span className={styles.tag}>Tecnologias e aplicabilidade</span>
            <span className={styles.tag}>Networking e aprendizado constante</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
