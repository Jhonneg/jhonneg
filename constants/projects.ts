export type ProjectCardProps = {
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
