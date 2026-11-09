import type { FeaturedProjectName } from "@/lib/i18n/dictionaries";

export type ProjectCardProps = {
  name: FeaturedProjectName;
  description: string;
  anchorLink: string;
  mediaUrl: string;
  techStack: string[];
  sourceLink: string;
  linkKind?: "demo" | "source";
};

export type ProjectCardPythonProps = ProjectCardProps;

export const projectsData: ProjectCardProps[] = [
  {
    name: "Lain Chatbot",
    sourceLink: "https://github.com/Jhonneg/lainChatbot",
    techStack: ["Nuxt", "ChatGPT", "Tailwind"],
    description: "Chatbot built with Nuxt and the ChatGPT Assistants AI",
    anchorLink: "https://lainchat.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/4070c779-203d-47cf-b530-b457740c0661",
  },
  {
    name: "Multiplayer Pong",
    sourceLink: "https://github.com/Jhonneg/PongJS",
    linkKind: "source",
    techStack: ["Node", "Socket.io"],
    description: "Multiplayer Pong game build with Node/Express and Socket.io",
    anchorLink: "https://github.com/Jhonneg/PongJS",
    mediaUrl:
      "https://github.com/Jhonneg/PongJS/assets/94491571/733b62cc-e616-4380-9c98-c13c5e75b717",
  },
  {
    name: "Games stores App",
    sourceLink: "https://github.com/Jhonneg/gamesStoreApp",
    techStack: ["NextJS", "React", "Tailwind"],
    description: "Find games stores near you",
    anchorLink: "https://gamenext.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/47cfa631-03a9-4ade-aeea-7ed6f1a724d8",
  },
  {
    name: "Discord weather bot",
    sourceLink: "https://github.com/Jhonneg/DiscordJS",
    linkKind: "source",
    techStack: ["Node", "Express"],
    description: "Discord weather bot built with DiscordJS",
    anchorLink: "https://github.com/Jhonneg/DiscordJS",
    mediaUrl:
      "https://github.com/user-attachments/assets/4fc96fe3-5d4d-442c-b7ce-042656e1dec3",
  },
  {
    name: "Face Recognition App",
    sourceLink: "https://github.com/Jhonneg/smartbrainJSX",
    techStack: ["React", "Tailwind"],
    description: "Build with React and TailwindCSS",
    anchorLink: "https://smartbrian.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/7bd3b2f7-c801-4c24-9d36-a0fc6e290271",
  },
  {
    name: "Planets Express",
    sourceLink: "https://github.com/Jhonneg/planetsExpress",
    linkKind: "source",
    techStack: ["React", "Node/Express", "Docker", "Jest", "MongoDB"],
    description: "Space flight Database",
    anchorLink: "https://github.com/Jhonneg/planetsExpress",
    mediaUrl:
      "https://github.com/user-attachments/assets/d2e253d2-c71a-45a5-ae65-424a65c9d794",
  },
];

export const projectsDataPython: ProjectCardPythonProps[] = [
  {
    name: "Commandline Quiz game",
    sourceLink: "https://github.com/Jhonneg/python_trivia",
    linkKind: "source",
    techStack: ["Python", "Bash"],
    description: "Trivia quiz app built with Python and the http library",
    anchorLink: "https://github.com/Jhonneg/python_trivia",
    mediaUrl:
      "https://github.com/user-attachments/assets/721627a0-d506-4379-b543-c8a95593e157",
  },
  {
    name: "ReAct Agent",
    sourceLink: "https://github.com/Jhonneg/py-react",
    linkKind: "source",
    techStack: ["Python", "ChatGPT", "Jupyter Notebooks"],
    description:
      "Implementation of a simple ReAct agent using OpenAI's GPT models.",

    anchorLink: "https://github.com/Jhonneg/py-react",
    mediaUrl:
      "https://github.com/user-attachments/assets/8969cbac-c4d2-4681-8b75-8a32c10b40ab",
  },
  {
    name: "RAG App",
    sourceLink: "https://github.com/Jhonneg/py-rag",
    techStack: ["Python", "ChatGPT", "Streamlit", "Langchain", "Pinecone"],
    description:
      "A Retrieval-Augmented Generation pipeline built using Python, OpenAI, Langchain.",

    anchorLink: "https://pythonrag.streamlit.app/",
    mediaUrl:
      " https://github.com/user-attachments/assets/854c6cb5-f96e-4f12-a4bb-49464491a077",
  },
];
