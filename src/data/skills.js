import { FaJava, FaAws, FaImage, FaPalette } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiSpringboot,
  SiBootstrap,
  SiThymeleaf,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiMiro,
  SiClaude,
  SiGithubcopilot,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandVscode, TbBrandAzure } from "react-icons/tb";

/**
 * Tecnologias exibidas no globo 3D (cena "Meu repertório").
 * Baseado no SkillsGlobe do Prof. João Paulo Aramuni.
 *
 *   name     → nome exibido no globo e na lista
 *   icon     → componente do react-icons (https://react-icons.github.io/react-icons)
 *   color    → cor da marca
 *   category → precisa ser uma das CATEGORIES abaixo
 *   link     → para onde o clique leva (documentação, repositório, etc.)
 */
export const CATEGORIES = [
  "Linguagens",
  "Frameworks",
  "Cloud & Infra",
  "IA no dev",
  "Ferramentas",
  "Design",
];

const SKILLS = [
  // Linguagens
  { name: "JavaScript", icon: SiJavascript, color: "#E5B800", category: "Linguagens", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Linguagens", link: "https://docs.python.org/pt-br/3/" },
  { name: "Java", icon: FaJava, color: "#E76F00", category: "Linguagens", link: "https://dev.java/learn/" },

  // Frameworks
  { name: "React", icon: SiReact, color: "#149ECA", category: "Frameworks", link: "https://react.dev/" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Frameworks", link: "https://spring.io/projects/spring-boot" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frameworks", link: "https://getbootstrap.com/" },
  { name: "Thymeleaf", icon: SiThymeleaf, color: "#005F0F", category: "Frameworks", link: "https://www.thymeleaf.org/" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Frameworks", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
  { name: "CSS", icon: SiCss, color: "#663399", category: "Frameworks", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },

  // Cloud & Infra
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "Cloud & Infra", link: "https://docs.aws.amazon.com/" },
  { name: "Azure", icon: TbBrandAzure, color: "#0078D4", category: "Cloud & Infra", link: "https://learn.microsoft.com/azure/" },

  // IA no dev
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#8957E5", category: "IA no dev", link: "https://github.com/features/copilot" },
  { name: "Claude", icon: SiClaude, color: "#D97757", category: "IA no dev", link: "https://www.anthropic.com/claude" },
  { name: "Gemini", icon: SiGooglegemini, color: "#8E75B2", category: "IA no dev", link: "https://gemini.google.com/" },

  // Ferramentas
  { name: "Git", icon: SiGit, color: "#F05032", category: "Ferramentas", link: "https://git-scm.com/book/pt-br/v2" },
  { name: "GitHub", icon: SiGithub, color: "#E6E6E6", category: "Ferramentas", link: "https://github.com/gbhermont" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC", category: "Ferramentas", link: "https://code.visualstudio.com/docs" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Ferramentas", link: "https://vite.dev/" },

  // Design
  { name: "Figma", icon: SiFigma, color: "#A259FF", category: "Design", link: "https://help.figma.com/" },
  { name: "Miro", icon: SiMiro, color: "#FFD02F", category: "Design", link: "https://miro.com/" },
  { name: "Photoshop", icon: FaImage, color: "#31A8FF", category: "Design", link: "https://www.adobe.com/products/photoshop.html" },
  { name: "Canva", icon: FaPalette, color: "#00C4CC", category: "Design", link: "https://www.canva.com/" },
];

export default SKILLS;
