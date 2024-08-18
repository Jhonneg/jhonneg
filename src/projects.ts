export type ProjectCardProps = {
  name: string;
  description: string;
  anchorLink: string;
  mediaUrl: string;
  techStack: string[];
};

export const projectsData: ProjectCardProps[] = [
  {
    name: "Quiz app",
    techStack: ["Vue"],
    description: "Quiz App built with Vue.js",
    anchorLink: "https://jhonneg.github.io/vueQuiz/",
    mediaUrl:
      "https://github.com/user-attachments/assets/d9e9aab6-84f3-4570-8453-752ac60fba68",
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
    name: "Rock Paper Scissor Game",
    techStack: ["Javascript"],
    description: "Javascript Rock Paper Scissor Odin Project.",
    anchorLink: "https://jhonneg.github.io/rock-paper-scissor/",
    mediaUrl:
      "https://jhonneg.is-a.dev/assets/Screencastfrom02-01-2024090133AM-ezgif.com-video-to-gif-converter-CEpZmeY0.gif",
  },
  {
    name: "Discord weather bot",
    techStack: ["Node", "Express"],
    description: "Discord weather bot built with DiscordJS",
    anchorLink: "https://github.com/Jhonneg/DiscordJS",
    mediaUrl:
      "https://github.com/Jhonneg/DiscordJS/assets/94491571/91a18e41-b78a-43d1-a748-de81feccdc5a",
  },
  {
    name: "Face Recognition App",
    techStack: ["React", "Tailwind"],
    description: "Build with React and TailwindCSS",
    anchorLink: "https://smartbrian.netlify.app/",
    mediaUrl:
      "https://github.com/Jhonneg/SmartbrainJSX/raw/main/assets/Screenshot%20from%202024-05-04%2008-08-01.png",
  },
  {
    name: "Crown Clothing",
    techStack: ["React", "Firebase", "Styled Components"],
    description:
      "E-Commerce shop built with React, Typescript, Styled-components, Redux and Firebase",
    anchorLink: "https://crownfashion.netlify.app/",
    mediaUrl:
      "https://jhonneg.is-a.dev/assets/Screenshot%20from%202024-07-13%2023-32-34-DeVWM5tv.png",
  },
];
