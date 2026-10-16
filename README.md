# 🎬 Portfólio Profissional — Gabriel Hermont

> [!NOTE]
> Website de portfólio profissional desenvolvido para apresentar minha trajetória,
> habilidades e projetos — com uma identidade visual inspirada no universo do **cinema**.
> Projeto da disciplina **Desenvolvimento e Integração de Aplicações Web (DIAW)** —
> Engenharia de Software, PUC Minas.

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-online-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 🌐 Acesse o site publicado: **[portfolio-hermont.vercel.app](https://portfolio-hermont.vercel.app/)**

> 🟢 **Concluído:** Lab01S01 — Planejamento, prototipação e esqueleto das telas.
> 🟢 **Concluído:** Lab01S02 — Implementação das funcionalidades principais (conteúdo real, temas, i18n PT/EN, formulário de contato, currículo em PDF, responsividade).
> 🟢 **Concluído:** Lab01S03 — Hospedagem na Vercel.

---

## 📚 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Protótipos e Design](#-protótipos-e-design)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Passo a passo](#passo-a-passo)
  - [Scripts disponíveis](#scripts-disponíveis)
  - [Variáveis de ambiente](#variáveis-de-ambiente)
- [Deploy](#-deploy)
- [Demonstração](#-demonstração)
- [Documentações Utilizadas](#-documentações-utilizadas)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📝 Sobre o Projeto

Este é o meu **portfólio profissional**, desenvolvido como projeto da disciplina
**Desenvolvimento e Integração de Aplicações Web (DIAW)** do curso de
**Engenharia de Software da PUC Minas**.

O objetivo é reunir, em um único lugar, as informações mais relevantes sobre a minha
trajetória acadêmica e profissional, apresentando:

- Quem eu sou e meus objetivos profissionais (em **português** e **inglês**);
- Os **projetos** que desenvolvi;
- Minhas **experiências** profissionais e acadêmicas;
- As **tecnologias** que domino, em um globo 3D interativo;
- Formas de **contato** direto, incluindo um formulário com envio de e-mail.

O site é uma **landing page de página única** (single-page), construída com foco em
**design responsivo**, **boa usabilidade**, **código limpo e de fácil manutenção**, e
uma **identidade visual coerente** com o meu perfil profissional. A proposta visual é
inspirada no universo do **cinema**: uma experiência escura, elegante e minimalista
(preto e dourado), em que cada seção é apresentada como uma "cena" de um roteiro — da
abertura (hero) aos créditos finais (rodapé).

> **Sobre mim:** Estudante de Engenharia de Software na PUC Minas, apaixonado por
> tecnologia e por resolver problemas com código. Meu objetivo é evoluir
> constantemente, unindo raciocínio lógico, pensamento crítico e as ferramentas certas
> para construir soluções cada vez melhores.

---

## ✨ Funcionalidades Principais

> O status indica o que já foi implementado e o que ainda está planejado.

- 🎬 **Introdução animada:** abertura com monograma "GH" e cascata de entrada do hero. ✅ _Implementado_
- 🌐 **Internacionalização (i18n):** site inteiro disponível em **português** e **inglês**, incluindo o **currículo em PDF** (um arquivo por idioma). ✅ _Implementado_
- 👤 **Sobre Mim:** apresentação pessoal com formação, atuação, interesses e objetivos. ✅ _Implementado_
- 🛠️ **Tecnologias:** globo 3D interativo (feito só com React + CSS + canvas) com filtro por categoria. ✅ _Implementado_
- 🗂️ **Projetos ("Em cartaz"):** cards com rolagem horizontal fixada (pin + scroll) no desktop e carrossel no mobile, com descrição, tecnologias e link do GitHub. ✅ _Implementado_
- 💼 **Experiências:** timeline com instituição, cargo, período e descrição (conteúdo bilíngue). ✅ _Implementado_
- 📬 **Contato:** ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário com envio de e-mail via EmailJS. ✅ _Implementado_
- 📄 **Currículo em PDF:** visualizador embutido na página, com zoom, download e troca de idioma (PT/EN). ✅ _Implementado_
- 🎨 **Temas:** alternância entre tema **claro** e **escuro**, com persistência. ✅ _Implementado_
- 🎞️ **Identidade cinematográfica:** rótulos de "cena", índice lateral com scroll spy e barra de progresso, transições suaves. ✅ _Implementado_
- 📱 **Design responsivo:** adaptação a desktop, tablet e mobile. ✅ _Implementado_
- 🚀 **Deploy na Vercel:** publicação com deploy contínuo a partir do GitHub. ✅ _Implementado_

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, bibliotecas e serviços foram utilizados na construção
deste projeto.

### 💻 Front-end

| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| [React](https://react.dev/) | 19 | Biblioteca JavaScript para construção da interface em componentes. |
| [Vite](https://vite.dev/) | 6 | Build tool e servidor de desenvolvimento rápido. |
| JavaScript (ES6+) | — | Linguagem de programação principal do projeto. |
| CSS Modules + variáveis CSS | — | Estilização com escopo isolado por componente e tokens de tema (claro/escuro). |

### 📦 Bibliotecas

| Biblioteca | Versão | Descrição |
| :--- | :--- | :--- |
| [i18next](https://www.i18next.com/) | 26 | Núcleo de internacionalização (dicionários e fallback de idioma). ✅ _Implementado_ |
| [react-i18next](https://react.i18next.com/) | 17 | Integração do i18next com React (hook `useTranslation`). ✅ _Implementado_ |
| [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) | 8 | Detecção automática do idioma (localStorage → navegador). ✅ _Implementado_ |
| [react-pdf](https://github.com/wojtekmaj/react-pdf) | 10 | Visualização do currículo em PDF direto na página (PDF.js). ✅ _Implementado_ |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Ícones de interface (contato, controles do visualizador, menu, etc.). ✅ _Implementado_ |
| [@emailjs/browser](https://www.emailjs.com/) | 5 | Envio do formulário de contato por e-mail, direto do front-end. ✅ _Implementado_ |
| [react-hook-form](https://react-hook-form.com/) | 7 | Gerenciamento e validação do formulário de contato. ✅ _Implementado_ |

### 🚀 Infraestrutura & Deploy

| Tecnologia | Descrição |
| :--- | :--- |
| [Vercel](https://vercel.com/) | Hospedagem do front-end com deploy contínuo a partir do GitHub. ✅ _Implementado_ |
| [Git](https://git-scm.com/) & [GitHub](https://github.com/) | Controle de versão e hospedagem do código-fonte. |

### 🔧 Ferramentas de Desenvolvimento

| Ferramenta | Descrição |
| :--- | :--- |
| [ESLint](https://eslint.org/) | Linter para análise estática e qualidade de código. |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | Plugin oficial do React para o Vite (Fast Refresh). |

> [!NOTE]
> Esta lista será atualizada conforme novas bibliotecas forem adicionadas ao projeto.

---

## 🎨 Protótipos e Design

O design e o protótipo deste portfólio foram elaborados antes do desenvolvimento,
servindo como referência visual para a implementação.

A identidade visual segue um conceito **cinematográfico**: base escura (preto),
dourado como cor de destaque, tipografia moderna e seções apresentadas como "cenas"
de um roteiro, com um índice lateral que acompanha a rolagem no estilo de uma linha
do tempo de vídeo.

- 🔗 **Protótipo navegável (Figma):** `<link do protótipo no Figma — em breve>`

### 🖼️ Telas do protótipo

> [!NOTE]
> As imagens abaixo são do protótipo de alta fidelidade (tema escuro) e representam
> cada "cena" da landing page. Poderão ser atualizadas conforme o design evoluir.

| 🎬 Abertura | 👤 Sobre mim |
| :---: | :---: |
| ![Cena de abertura (hero)](docs/prototipos/abertura.png) | ![Cena Sobre mim](docs/prototipos/sobre-mim.png) |
| **🛠 Tecnologias** | **🗂️ Em cartaz (Projetos)** |
| ![Cena Tecnologias](docs/prototipos/tecnologias.png) | ![Cena Em cartaz — Projetos](docs/prototipos/em-cartaz.png) |
| **💼 Experiência** | **📬 Contato** |
| ![Cena Experiência](docs/prototipos/experiencia.png) | ![Cena Contato](docs/prototipos/contato.png) |
| **🎞️ Créditos finais** | |
| ![Rodapé — créditos finais](docs/prototipos/creditos-finais.png) | |

---

## 📂 Estrutura de Pastas

A estrutura abaixo descreve a organização atual do projeto (front-end em React + Vite).

```
gbhermont-portfolio/
├── docs/                       # 📚 Documentação e protótipos
│   └── prototipos/             # 🖼️ Imagens do protótipo (usadas no README)
├── public/                     # 📂 Arquivos estáticos (currículos em PDF: PT e EN)
├── src/                        # 📂 Código-fonte da aplicação
│   ├── assets/                 # 🖼️ Imagens importadas no código (galo, escudo CAM)
│   ├── components/             # 🧱 Componentes reutilizáveis
│   │   ├── layout/             #    Navbar, Footer e índice lateral de cenas
│   │   │   ├── Navbar.jsx       #      Topo fixo: marca, links, tema e seletor PT/EN
│   │   │   ├── Footer.jsx       #      Rodapé "créditos finais" (ano dinâmico)
│   │   │   └── SceneIndex.jsx   #      Índice lateral com scroll spy + barra de progresso
│   │   ├── sections/           #    🎬 Seções da landing page (uma por "cena")
│   │   │   ├── Hero.jsx         #      Abertura (hero) com efeito máquina de escrever
│   │   │   ├── About.jsx        #      Sobre mim (Scene 02)
│   │   │   ├── Skills.jsx       #      Tecnologias (Scene 03)
│   │   │   ├── Projects.jsx     #      Em cartaz / Projetos (Scene 04)
│   │   │   ├── Experience.jsx   #      Experiência (Scene 05)
│   │   │   └── Contact.jsx      #      Contato (Scene 06)
│   │   └── ui/                 #    🧩 Widgets de interface
│   │       ├── IntroOverlay/    #      Introdução animada (monograma GH)
│   │       ├── HeroStage/       #      Palco com elementos flutuantes do hero
│   │       ├── SkillsGlobe/     #      Globo 3D de tecnologias (React + CSS + canvas)
│   │       └── CurriculumViewer/#      Modal + visualizador de currículo em PDF
│   ├── data/                   # 🗂️ Dados (skills, configuração do currículo)
│   │   ├── skills.js            #      Lista de tecnologias e categorias
│   │   └── curriculumConfig.js  #      PDFs do currículo (PT/EN) e opções de zoom
│   ├── hooks/                  # 🎣 Hooks personalizados
│   │   ├── useTheme.js          #      Tema claro/escuro (estado + persistência)
│   │   ├── useActiveScene.js    #      Scroll spy: cena ativa e progresso
│   │   ├── useTypewriter.js     #      Efeito máquina de escrever do hero
│   │   └── useRevealOnScroll.js #      Animação de entrada ao rolar
│   ├── i18n/                   # 🌐 Internacionalização (i18next + react-i18next)
│   │   ├── index.js             #      Configuração do i18n (detecção + fallback)
│   │   └── locales/             #      Traduções
│   │       ├── pt-BR/           #        translation.json (português)
│   │       └── en/              #        translation.json (inglês)
│   ├── theme/                  # 🎨 Tokens de design e utilitários de animação
│   │   ├── tokens.css           #      Variáveis de cor, tipografia e espaçamento
│   │   └── reveal.css           #      Classes de animação de entrada (reveal)
│   ├── App.jsx                 # 🧩 Componente raiz: monta as seções
│   ├── main.jsx                # 🚪 Ponto de entrada: carrega o i18n e renderiza o App
│   └── index.css               # 🎨 Estilos globais
├── index.html                  # 📄 Página HTML base onde o React é injetado
├── package.json                # 📦 Dependências, scripts e metadados do projeto
├── package-lock.json           # 🔒 Versões exatas das dependências instaladas
├── vite.config.js              # ⚙️ Configuração do Vite
├── eslint.config.js            # 🔧 Configuração do ESLint
├── .env.example                # 🔑 Exemplo de variáveis de ambiente (EmailJS)
├── .gitignore                  # 🧹 Arquivos e pastas ignorados pelo Git
└── README.md                   # 📘 Documentação do projeto (este arquivo)
```

---

## 🔧 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente na sua máquina.

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior** (recomendado: LTS)
- [npm](https://www.npmjs.com/) (instalado junto com o Node.js) ou outro gerenciador de pacotes
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/gbhermont/portfolio.git

# 2. Acesse a pasta do projeto
cd portfolio

# 3. Instale as dependências
npm install

# 4. Rode o projeto em modo de desenvolvimento
npm run dev
```

Após executar `npm run dev`, o terminal exibirá um endereço local
(geralmente <http://localhost:5173>). Abra esse endereço no navegador para
visualizar o portfólio.

### Scripts disponíveis

| Script | Comando | Descrição |
| :--- | :--- | :--- |
| Desenvolvimento | `npm run dev` | Inicia o servidor local de desenvolvimento. |
| Build | `npm run build` | Gera a versão otimizada para produção na pasta `dist/`. |
| Preview | `npm run preview` | Visualiza localmente a versão de produção gerada. |
| Lint | `npm run lint` | Analisa o código em busca de problemas de qualidade. |

### Variáveis de ambiente

O formulário de contato usa o **EmailJS**, que precisa de três variáveis de
ambiente. Crie um arquivo **`.env`** na raiz do projeto (use o `.env.example`
como modelo) com os seus valores:

```env
# EmailJS (https://www.emailjs.com/)
VITE_EMAILJS_SERVICE_ID=seu-service-id
VITE_EMAILJS_TEMPLATE_ID=seu-template-id
VITE_EMAILJS_PUBLIC_KEY=sua-public-key
```

> [!NOTE]
> No Vite, as variáveis precisam do prefixo `VITE_`. O arquivo `.env` **não é
> versionado** (está no `.gitignore`); por isso, em produção, essas variáveis
> também devem ser cadastradas no painel da Vercel.

---

## 🚀 Deploy

O site está hospedado na **[Vercel](https://vercel.com/)**, com publicação
automática a cada atualização enviada para a branch principal do repositório no GitHub.

- 🌐 **Site publicado:** <https://portfolio-hermont.vercel.app/>

> [!NOTE]
> O formulário de contato usa o **EmailJS**. Para o envio funcionar em produção,
> as variáveis de ambiente (`VITE_EMAILJS_*`) estão configuradas no painel da
> Vercel (Project Settings → Environment Variables), já que o arquivo `.env`
> não é versionado.

---

## 🎥 Demonstração

O portfólio está no ar e pode ser navegado diretamente:

- 🌐 **Site publicado:** <https://portfolio-hermont.vercel.app/>

> [!NOTE]
> Um GIF demonstrando o site em funcionamento poderá ser adicionado aqui como
> complemento visual.

---

## 🔗 Documentações Utilizadas

- 📖 [Documentação oficial do React](https://react.dev/)
- 📖 [Guia de configuração do Vite](https://vite.dev/config/)
- 📖 [Documentação do i18next](https://www.i18next.com/)
- 📖 [Documentação do react-i18next](https://react.i18next.com/)
- 📖 [Documentação do react-pdf](https://github.com/wojtekmaj/react-pdf)
- 📖 [Documentação do EmailJS](https://www.emailjs.com/docs/)
- 📖 [Documentação do React Hook Form](https://react-hook-form.com/get-started)
- 📖 [Documentação da Vercel](https://vercel.com/docs)
- 📖 [Conventional Commits (padrão de mensagens de commit)](https://www.conventionalcommits.org/pt-br/v1.0.0/)

---

## 👤 Autor

| Nome | GitHub | LinkedIn | E-mail |
| :--- | :--- | :--- | :--- |
| **Gabriel Hermont** | [@gbhermont](https://github.com/gbhermont) | [Gabriel Hermont](https://www.linkedin.com/in/gbhermont) | gabrielsjh2007@gmail.com |

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. Consulte o arquivo
[LICENSE](LICENSE) para mais detalhes.

---

> Projeto acadêmico desenvolvido para a disciplina **DIAW** —
> Prof. Dr. João Paulo Carneiro Aramuni · Engenharia de Software · PUC Minas.
