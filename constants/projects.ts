export type ProjectCardProps = {
  name: string;
  description: string;
  anchorLink: string;
  mediaUrl: string;
  techStack: string[];
};

export type ProjectCardPythonProps = {
  name: string;
  description: string;
  anchorLink: string;
  mediaUrl: string;
  techStack: string[];
};

export const projectsData: ProjectCardProps[] = [
  {
    name: "Lain Chatbot",
    techStack: ["Nuxt", "ChatGPT", "Tailwind"],
    description: "Chatbot built with Nuxt and the ChatGPT Assistants AI",
    anchorLink: "https://lainchat.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/4070c779-203d-47cf-b530-b457740c0661",
  },
  {
    name: "Multiplayer Pong",
    techStack: ["Node", "Socket.io"],
    description: "Multiplayer Pong game build with Node/Express and Socket.io",
    anchorLink: "https://pongjs-production.up.railway.app/",
    mediaUrl:
      "https://github.com/Jhonneg/PongJS/assets/94491571/733b62cc-e616-4380-9c98-c13c5e75b717",
  },
  {
    name: "Games stores App",
    techStack: ["NextJS", "React", "Tailwind"],
    description: "Find games stores near you",
    anchorLink: "https://gamenext.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/47cfa631-03a9-4ade-aeea-7ed6f1a724d8",
  },
  {
    name: "Discord weather bot",
    techStack: ["Node", "Express"],
    description: "Discord weather bot built with DiscordJS",
    anchorLink: "https://github.com/Jhonneg/DiscordJS",
    mediaUrl:
      "https://github.com/user-attachments/assets/4fc96fe3-5d4d-442c-b7ce-042656e1dec3",
  },
  {
    name: "Face Recognition App",
    techStack: ["React", "Tailwind"],
    description: "Build with React and TailwindCSS",
    anchorLink: "https://smartbrian.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/7bd3b2f7-c801-4c24-9d36-a0fc6e290271",
  },
  {
    name: "Planets Express",
    techStack: ["React", "Node/Express", "Docker", "Jest", "MongoDB"],
    description: "Space flight Database",
    anchorLink: "https://pongjs.onrender.com/",
    mediaUrl:
      "https://github.com/user-attachments/assets/d2e253d2-c71a-45a5-ae65-424a65c9d794",
  },
];

export const projectsDataPython: ProjectCardPythonProps[] = [
  {
    name: "Commandline Quiz game",
    techStack: ["Python", "Bash"],
    description: "Trivia quiz app built with Python and the http library",
    anchorLink: "https://github.com/Jhonneg/python_trivia",
    mediaUrl:
      "https://github.com/user-attachments/assets/721627a0-d506-4379-b543-c8a95593e157",
  },
  {
    name: "ReAct Agent",
    techStack: ["Python", "ChatGPT", "Jupyter Notebooks"],
    description:
      "Implementation of a simple ReAct agent using OpenAI's GPT models.",

    anchorLink: "https://github.com/Jhonneg/py-react",
    mediaUrl:
      "https://private-user-images.githubusercontent.com/94491571/521244490-8969cbac-c4d2-4681-8b75-8a32c10b40ab.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIzOTcxMzAsIm5iZiI6MTc3MjM5NjgzMCwicGF0aCI6Ii85NDQ5MTU3MS81MjEyNDQ0OTAtODk2OWNiYWMtYzRkMi00NjgxLThiNzUtOGEzMmMxMGI0MGFiLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzAxVDIwMjcxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzNWFiNDhlY2I4MzIxYTBmZWVjNDhhMDQzM2NkMzIzMDExNDM5MzRhOGNmOGZiNTcxY2JlMzdiZGM1YWY4NjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7EWrctJTBE1dbXfe_tRKNuhy4Qk0t_4hQvvgAeKBozo",
  },
  {
    name: "RAG App",
    techStack: ["Python", "ChatGPT", "Streamlit", "Langchain", "Pinecone"],
    description:
      "A Retrieval-Augmented Generation pipeline built using Python, OpenAI, Langchain.",

    anchorLink: "https://pythonrag.streamlit.app/",
    mediaUrl:
      " https://github.com/user-attachments/assets/854c6cb5-f96e-4f12-a4bb-49464491a077",
  },
];
