import type { Locale } from "./config";

const en = {
  gallery: {
    title: "Projects",
    intro:
      "Personal projects exploring APIs, full-stack applications and AI. Watch the background videos and explore the code.",
    categories: "Project categories",
    javascript: "JavaScript",
    python: "Python",
    source: "Source code",
    demo: "Open demo",
    sourceOnly: "Explore the source code",
    unavailable: "Video unavailable. You can still explore the project links.",
    empty: "No projects in this category yet.",
  },
  metadata: {
    title: "Jhonne | Junior Full-Stack Developer",
    description:
      "Jhonne's portfolio: junior full-stack development with a backend focus. Explore web, real-time and Python projects and get in touch.",
  },
  navigation: {
    label: "Primary navigation",
    home: "Home",
    projects: "Projects",
    about: "About me",
    contact: "Contact",
    github: "Jhonne on GitHub (opens in a new tab)",
    skip: "Skip to content",
  },
  language: {
    label: "Site language",
    portuguese: "Português do Brasil",
    english: "English",
    error: "Could not save your language. Please try again.",
  },
  hero: {
    eyebrow: "Junior developer · Brazil",
    greeting: "Hello, I'm Jhonne",
    role: "Junior Full-Stack Developer · Backend Focused",
    description:
      "I build web APIs and full-stack applications with Node.js and React. My projects also explore real-time communication with Socket.io and AI with Python, RAG and LLM APIs.",
    projects: "View projects",
    cv: "Request CV by email",
    cvSubject: "CV request — development opportunity",
    contact: "Get in touch",
  },
  featured: {
    eyebrow: "Selected work",
    title: "Explore my projects",
    all: "Browse all projects",
    demo: "Open demo",
    source: "View source — demo unavailable",
    newTab: "opens in a new tab",
  },
  projects: {
    "Planets Express":
      "Space-flight application with a React interface and a Node.js/Express API, MongoDB storage, Docker and Jest tests.",
    "Games stores App":
      "Web application built with Next.js and React to find nearby game stores.",
    "Discord weather bot":
      "Discord weather bot built with Discord.js and Node.js.",
    "Face Recognition App":
      "Face-recognition interface built with React and Tailwind CSS.",
    "Commandline Quiz game":
      "Command-line trivia quiz built with Python and HTTP requests.",
    "ReAct Agent":
      "Python ReAct agent that uses OpenAI models and tools to reason through queries.",
    "Multiplayer Pong":
      "Multiplayer game built with Node.js, Express and Socket.io for real-time communication.",
    "Lain Chatbot": "Chatbot built with Nuxt and the ChatGPT Assistants API.",
    "RAG App":
      "Retrieval-Augmented Generation app built with Python, OpenAI and LangChain.",
  },
};

export type Dictionary = typeof en;
export type FeaturedProjectName = keyof Dictionary["projects"];

const ptBR: Dictionary = {
  gallery: {
    title: "Projetos",
    intro:
      "Projetos pessoais que exploram APIs, aplicações full-stack e IA. Assista aos vídeos e explore o código.",
    categories: "Categorias de projetos",
    javascript: "JavaScript",
    python: "Python",
    source: "Código-fonte",
    demo: "Abrir demonstração",
    sourceOnly: "Explore o código-fonte",
    unavailable:
      "Vídeo indisponível. Os links do projeto continuam acessíveis.",
    empty: "Ainda não há projetos nesta categoria.",
  },
  metadata: {
    title: "Jhonne | Desenvolvedor Full-Stack Júnior",
    description:
      "Portfólio de Jhonne: desenvolvimento full-stack júnior com foco em back-end. Conheça projetos web, em tempo real e com Python e entre em contato.",
  },
  navigation: {
    label: "Navegação principal",
    home: "Início",
    projects: "Projetos",
    about: "Sobre mim",
    contact: "Contato",
    github: "Jhonne no GitHub (abre em nova aba)",
    skip: "Pular para o conteúdo",
  },
  language: {
    label: "Idioma do site",
    portuguese: "Português do Brasil",
    english: "English",
    error: "Não foi possível salvar o idioma. Tente novamente.",
  },
  hero: {
    eyebrow: "Desenvolvedor júnior · Brasil",
    greeting: "Olá, sou Jhonne",
    role: "Desenvolvedor Full-Stack Júnior · Foco em Back-end",
    description:
      "Desenvolvo APIs web e aplicações full-stack com Node.js e React. Meus projetos também exploram comunicação em tempo real com Socket.io e IA com Python, RAG e APIs de LLMs.",
    projects: "Ver projetos",
    cv: "Solicitar CV por e-mail",
    cvSubject: "Solicitação de CV — oportunidade em desenvolvimento",
    contact: "Entrar em contato",
  },
  featured: {
    eyebrow: "Projetos em destaque",
    title: "Conheça meus projetos",
    all: "Ver todos os projetos",
    demo: "Abrir demonstração",
    source: "Ver código — demonstração indisponível",
    newTab: "abre em nova aba",
  },
  projects: {
    "Planets Express":
      "Aplicação de voos espaciais com interface em React e API Node.js/Express, armazenamento em MongoDB, Docker e testes com Jest.",
    "Games stores App":
      "Aplicação web desenvolvida com Next.js e React para encontrar lojas de jogos próximas.",
    "Discord weather bot":
      "Bot de previsão do tempo para Discord desenvolvido com Discord.js e Node.js.",
    "Face Recognition App":
      "Interface de reconhecimento facial desenvolvida com React e Tailwind CSS.",
    "Commandline Quiz game":
      "Quiz de perguntas e respostas no terminal, desenvolvido com Python e requisições HTTP.",
    "ReAct Agent":
      "Agente ReAct em Python que usa modelos da OpenAI e ferramentas para resolver consultas.",
    "Multiplayer Pong":
      "Jogo multiplayer desenvolvido com Node.js, Express e Socket.io para comunicação em tempo real.",
    "Lain Chatbot":
      "Chatbot desenvolvido com Nuxt e a API Assistants do ChatGPT.",
    "RAG App":
      "Aplicação de geração aumentada por recuperação (RAG), desenvolvida com Python, OpenAI e LangChain.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
};
