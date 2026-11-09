import type { Locale } from "./config";

const en = {
  about: {
    title: "About me",
    intro: "The person and projects behind the code.",
    whoami: {
      heading: "whoami",
      story:
        "I'm Jhonne, a developer from Brazil making a career transition into software development. I enjoy solving practical problems and building applications that people can use.",
      practice:
        "My personal projects include an Express API for space-flight data, a real-time multiplayer game with Socket.io, and Python experiments with RAG and language models. I’m looking to grow with a team working on backend or full-stack products.",
    },
    stack: {
      heading: "cat stack.json",
      backend: "Back-end",
      frontend: "Front-end",
      delivery: "Testing & delivery",
      python: "Python & AI",
    },
    projects: {
      heading: "ls projects/",
      intro: "A few projects to explore:",
      planets: "Planets Express — Express API and space-flight data",
      pong: "Multiplayer Pong — real-time game with Socket.io",
      rag: "RAG App — Python retrieval-augmented generation",
      view: "Open projects gallery",
    },
    education: {
      heading: "cat education.txt",
      course: "Systems Analysis and Development",
      school: "Faculdade Anhanguera",
      date: "Expected completion: December 2026",
    },
  },
  contact: {
    title: "Get in touch",
    intro:
      "For junior backend or full-stack development opportunities, email me or connect on LinkedIn.",
    primary: "Professional contact",
    other: "Other ways to connect",
    email: "Email",
    emailAction: "Send an email",
    cv: "Download CV (PT-BR)",
    linkedIn: "LinkedIn",
    linkedInAction: "View my profile",
    whatsapp: "WhatsApp",
    whatsappAction: "Open WhatsApp",
    whatsappMessage:
      "Hi Jhonne, I'd like to talk about a development opportunity.",
    discord: "Discord",
    discordHelp: "Find me on Discord",
    location: "Diadema, São Paulo, Brazil",
    newTab: "opens in a new tab",
  },
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
    imageAlt: "Jhonne Guerra — Junior Full-Stack Developer portfolio",
    pages: {
      about: {
        title: "About Jhonne | Junior Full-Stack Developer",
        description: "Meet Jhonne, a developer in Brazil building backend and full-stack personal projects with Node.js, React and Python.",
      },
      contact: {
        title: "Contact Jhonne | Junior Full-Stack Developer",
        description: "Contact Jhonne about junior backend or full-stack opportunities by email or LinkedIn, and download his Portuguese CV.",
      },
      projectsJs: {
        title: "JavaScript Projects | Jhonne Guerra",
        description: "Explore Jhonne's personal JavaScript projects, including an Express space-flight API, multiplayer Pong and full-stack applications.",
      },
      projectsPython: {
        title: "Python Projects | Jhonne Guerra",
        description: "Explore Jhonne's personal Python projects, including a RAG pipeline, a ReAct agent and a command-line quiz.",
      },
    },
  },
  navigation: {
    label: "Primary navigation",
    home: "Home",
    projects: "Projects",
    about: "About me",
    aboutShort: "About",
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
    cv: "Download CV (Portuguese)",
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
      "Face-recognition app built with Next.js and the Clarifai API.",
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
  about: {
    title: "Sobre mim",
    intro: "A pessoa e os projetos por trás do código.",
    whoami: {
      heading: "whoami",
      story:
        "Sou Jhonne, desenvolvedor do Brasil em transição de carreira para a área de software. Gosto de resolver problemas práticos e construir aplicações que as pessoas possam usar.",
      practice:
        "Meus projetos pessoais incluem uma API Express para dados de voos espaciais, um jogo multiplayer em tempo real com Socket.io e experimentos em Python com RAG e modelos de linguagem. Quero crescer com uma equipe que trabalhe em produtos de back-end ou full-stack.",
    },
    stack: {
      heading: "cat stack.json",
      backend: "Back-end",
      frontend: "Front-end",
      delivery: "Testes e entrega",
      python: "Python e IA",
    },
    projects: {
      heading: "ls projects/",
      intro: "Alguns projetos para conhecer:",
      planets: "Planets Express — API feita com Express e dados de voos espaciais",
      pong: "Multiplayer Pong — jogo em tempo real com Socket.io",
      rag: "RAG App — Retrieval Augmented Generation em Python",
      view: "Abrir galeria de projetos",
    },
    education: {
      heading: "cat education.txt",
      course: "Análise e Desenvolvimento de Sistemas",
      school: "Faculdade Anhanguera",
      date: "Previsão de conclusão: dezembro de 2026",
    },
  },
  contact: {
    title: "Entre em contato",
    intro:
      "Para oportunidades de desenvolvimento back-end ou full-stack júnior, envie um e-mail ou conecte-se comigo no LinkedIn.",
    primary: "Contato profissional",
    other: "Outras formas de contato",
    email: "E-mail",
    emailAction: "Enviar e-mail",
    cv: "Baixar CV (PT-BR)",
    linkedIn: "LinkedIn",
    linkedInAction: "Ver meu perfil",
    whatsapp: "WhatsApp",
    whatsappAction: "Abrir WhatsApp",
    whatsappMessage:
      "Olá Jhonne, gostaria de conversar sobre uma oportunidade de desenvolvimento.",
    discord: "Discord",
    discordHelp: "Encontre-me no Discord",
    location: "Diadema, São Paulo, Brasil",
    newTab: "abre em nova aba",
  },
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
    imageAlt: "Portfólio de Jhonne Guerra — Desenvolvedor Full-Stack Júnior",
    pages: {
      about: {
        title: "Sobre Jhonne | Desenvolvedor Full-Stack Júnior",
        description: "Conheça Jhonne, desenvolvedor no Brasil com projetos pessoais de back-end e full-stack usando Node.js, React e Python.",
      },
      contact: {
        title: "Contato | Jhonne Guerra",
        description: "Entre em contato com Jhonne para oportunidades de desenvolvimento back-end ou full-stack júnior e baixe seu currículo em português.",
      },
      projectsJs: {
        title: "Projetos JavaScript | Jhonne Guerra",
        description: "Conheça projetos pessoais de Jhonne em JavaScript, incluindo API Express de voos espaciais, Pong multiplayer e aplicações full-stack.",
      },
      projectsPython: {
        title: "Projetos Python | Jhonne Guerra",
        description: "Conheça projetos pessoais de Jhonne em Python, incluindo pipeline RAG, agente ReAct e quiz de linha de comando.",
      },
    },
  },
  navigation: {
    label: "Navegação principal",
    home: "Início",
    projects: "Projetos",
    about: "Sobre mim",
    aboutShort: "Sobre",
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
    cv: "Baixar currículo (PT-BR)",
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
      "Aplicação de reconhecimento facial desenvolvida com Next.js e a API Clarifai.",
    "Commandline Quiz game":
      "Quiz de perguntas e respostas no terminal, desenvolvido com Python e requisições HTTP.",
    "ReAct Agent":
      "Agente ReAct em Python desenvolvido do zero que usa modelos da OpenAI e ferramentas para resolver consultas.",
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
