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
 * O projeto 01 (Meu Bolso) é real; os demais ainda são placeholder e serão
 * substituídos pelos projetos reais (ver REQ-17).
 */
const PROJECTS = [
  {
    num: "01",
    title: { pt: "Meu Bolso", en: "Meu Bolso" },
    description: {
      pt: "Aplicação web de controle e educação financeira para jovens que estão começando a lidar com o próprio dinheiro. Permite registrar e categorizar gastos, definir metas e reservas e acompanhar a evolução financeira, com um assistente de IA que transforma os dados do usuário em orientações em linguagem acessível. Projeto em equipe do Trabalho Interdisciplinar (PUC Minas), vinculado ao ODS 8, onde atuo na frente de inteligência artificial.",
      en: "A web app for financial control and education aimed at young people who are starting to manage their own money. It lets users record and categorize expenses, set goals and savings, and track their financial progress, with an AI assistant that turns the user's data into guidance in plain language. A team project from the Interdisciplinary Work course (PUC Minas), tied to UN SDG 8, where I work on the artificial intelligence side.",
    },
    tags: ["React", "Java", "Spring Boot", "Vite", "IA"],
    github:
      "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-2-ti2-8183100-meu-bolso",
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
