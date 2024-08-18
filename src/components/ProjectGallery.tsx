import ProjectCard from "./ProjectCard";
import { projectsData } from "../projects";

export default function ProjectGallery() {
  return (
    <>
      <div>
        <p className="main-title">Projects</p>
      </div>
      {projectsData.map((projects) => {
        <ProjectCard
          key={projects.name}
          name={projects.name}
          description={projects.description}
          anchorLink={projects.anchorLink}
          mediaUrl={projects.mediaUrl}
        />;
      })}
    </>
  );
}
