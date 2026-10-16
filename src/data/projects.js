/**
 * Projetos exibidos na cena "Em cartaz".
 *
 * Título e descrição são bilíngues ({ pt, en }); o componente escolhe o idioma
 * atual. Para adicionar um projeto, basta incluir um novo objeto nesta lista —
 * nenhuma alteração no componente é necessária.
 *
 *   num         → número exibido no "poster" do card
 *   title       → { pt, en } título do projeto
 *   description → { pt, en } descrição curta
 *   tags        → tecnologias (nomes próprios, não traduzidos)
 *   github      → link do repositório ("#" enquanto não houver)
 *
 * Conteúdo placeholder: substituir pelos projetos reais (ver REQ-17).
 */
const PROJECTS = [
  {
    num: "01",
    title: { pt: "Projeto um", en: "Project one" },
    description: {
      pt: "Descrição curta do projeto (placeholder).",
      en: "Short project description (placeholder).",
    },
    tags: ["React", "Vite", "CSS"],
    github: "#",
  },
  {
    num: "02",
    title: { pt: "Projeto dois", en: "Project two" },
    description: {
      pt: "Descrição curta do projeto (placeholder).",
      en: "Short project description (placeholder).",
    },
    tags: ["JavaScript", "HTML"],
    github: "#",
  },
  {
    num: "03",
    title: { pt: "Projeto três", en: "Project three" },
    description: {
      pt: "Descrição curta do projeto (placeholder).",
      en: "Short project description (placeholder).",
    },
    tags: ["Node.js", "Java"],
    github: "#",
  },
  {
    num: "04",
    title: { pt: "Projeto quatro", en: "Project four" },
    description: {
      pt: "Descrição curta do projeto (placeholder).",
      en: "Short project description (placeholder).",
    },
    tags: ["React", "Spring Boot"],
    github: "#",
  },
];

export default PROJECTS;
