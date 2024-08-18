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
      "https://github.com/user-attachments/assets/ab30d8b1-59a9-45ba-a3d2-8e8c08cb0fa0",
  },
  {
    name: "Multiplayer Pong",
    techStack: ["Node", "Socket.io"],
    description: "Multiplayer Pong game build with Node/Express and Socket.io",
    anchorLink: "https://pongjs-production.up.railway.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/10a524f9-b1e3-467d-8d29-60c2a0ca045b",
  },
  {
    name: "Games stores App",
    techStack: ["NextJS", "React", "Tailwind"],
    description: "Find games stores near you",
    anchorLink: "https://gamenext.netlify.app/",
    mediaUrl:
      "https://private-user-images.githubusercontent.com/94491571/355011744-2a15ec21-ac3a-44eb-9626-d820bc4b75b5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM5NzQ0NzAsIm5iZiI6MTcyMzk3NDE3MCwicGF0aCI6Ii85NDQ5MTU3MS8zNTUwMTE3NDQtMmExNWVjMjEtYWMzYS00NGViLTk2MjYtZDgyMGJjNGI3NWI1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODE4VDA5NDI1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFjYjM2NGE5NTZiMmU2ODBiZTYyNWUyNjFmZDcyZWY2YzE2YTgwM2VhZTcyMjAyNTIxMjYxYWE5ODQ2Yjg0MDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.BTe8fq-Y_xIAuyC5_2Uh50GoTcsubHh-qcKwpncjKe0",
  },
  {
    name: "Discord weather bot",
    techStack: ["Node", "Express"],
    description: "Discord weather bot built with DiscordJS",
    anchorLink: "https://github.com/Jhonneg/DiscordJS",
    mediaUrl:
      "https://github.com/Jhonneg/DiscordJS/raw/main/assets/Screenshot%20from%202024-05-13%2008-28-41.png",
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
    description: "E-Commerce shop built with React",
    anchorLink: "https://crownfashion.netlify.app/",
    mediaUrl:
      "https://github.com/user-attachments/assets/68f43d0e-ca2d-4a0b-b4d0-595d6f7d82d0",
  },
];
