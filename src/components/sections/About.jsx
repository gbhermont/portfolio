import styles from "./About.module.css";

/**
 * Cena 02 — Sobre mim ("Por trás da cena").
 * Esqueleto com layout de duas colunas: cabeçalho fixo (sticky) à esquerda
 * e conteúdo rolável à direita. Textos são placeholders nesta fase.
 */
function About() {
  return (
    <section id="sobre" className={styles.about}>
      {/* Coluna esquerda (fixa durante a rolagem) */}
      <div className={styles.header}>
        <span className={styles.sceneLabel}>SCENE 02 — SOBRE MIM</span>
        <h2 className={styles.title}>Por trás da cena.</h2>
        <p className={styles.intro}>
          Uma breve apresentação de quem sou, minha formação e o que me move.
        </p>
      </div>

      {/* Coluna direita (conteúdo que rola) */}
      <div className={styles.content}>
        <p className={styles.paragraph}>
          [Placeholder] Parágrafo de apresentação pessoal. Aqui vai um resumo de
          quem é Gabriel, sua área de atuação e seus interesses.
        </p>
        <p className={styles.paragraph}>
          [Placeholder] Segundo parágrafo com objetivos profissionais e o que
          busca aprender e construir ao longo da carreira.
        </p>

        <div className={styles.factSheet}>
          <span className={styles.factLabel}>FICHA TÉCNICA</span>
          <div className={styles.factItem}>
            <span className={styles.factItemTitle}>
              Bacharelado em Engenharia de Software
            </span>
            <span className={styles.factItemMeta}>
              PUC Minas · 2026 - 2029 (previsto)
            </span>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>tags1</span>
            <span className={styles.tag}>tags2</span>
            <span className={styles.tag}>tags3</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
