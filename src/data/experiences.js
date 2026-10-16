/**
 * Experiências profissionais e acadêmicas exibidas na cena "Experiência".
 *
 * Conteúdo bilíngue ({ pt, en }); o componente escolhe o idioma atual. Para
 * adicionar uma experiência, basta incluir um novo objeto nesta lista.
 *
 *   id          → chave única (usada no React e para ordenação, se preciso)
 *   period      → { pt, en } período (ex.: "MAR 2026 — ATUAL")
 *   role        → { pt, en } cargo / função
 *   institution → nome da empresa/instituição (não traduzido)
 *   description → { pt, en } descrição da atuação
 *   tags        → { pt, en } listas de habilidades/áreas
 */
const EXPERIENCES = [
  {
    id: "techbiz",
    period: { pt: "MAR 2026 — ATUAL", en: "MAR 2026 — PRESENT" },
    role: {
      pt: "Jovem Aprendiz em Infraestrutura",
      en: "Young Apprentice in Infrastructure",
    },
    institution: "TechBiz Forense Digital",
    description: {
      pt: "Atuação em infraestrutura e cloud (AWS, Microsoft 365, Azure, AD e Entra ID), gestão e controle de inventário de ativos de TI e suporte a software e hardware. Produção de documentação técnica, atendimento ao usuário e trabalho em equipe. Também participo do desenvolvimento de um sistema próprio de CSC e gestão de ativos/empresarial, atuando na correção de bugs (dev) e em testes do sistema.",
      en: "Work in infrastructure and cloud (AWS, Microsoft 365, Azure, AD and Entra ID), management and control of IT asset inventory, and software and hardware support. Production of technical documentation, user support and teamwork. I also take part in the development of an in-house CSC and asset/business management system, working on bug fixing (dev) and system testing.",
    },
    tags: {
      pt: [
        "AWS",
        "Azure",
        "Microsoft 365",
        "Gestão de ativos de TI",
        "Suporte técnico",
        "Desenvolvimento",
        "Testes",
        "Documentação",
      ],
      en: [
        "AWS",
        "Azure",
        "Microsoft 365",
        "IT asset management",
        "Technical support",
        "Development",
        "Testing",
        "Documentation",
      ],
    },
  },
];

export default EXPERIENCES;
