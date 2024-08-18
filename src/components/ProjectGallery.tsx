import ProjectCard from "./ProjectCard";
import { projectsData } from "../projects";

export default function ProjectGallery() {
  return (
    <>
      <div>
        <p className="main-title">Projects</p>
      </div>
      <div className="grid-cols-3 gap-3">
        {projectsData.map((projects) => (
          <ProjectCard
            key={projects.name}
            name={projects.name}
            techStack={projects.techStack}
            description={projects.description}
            anchorLink={projects.anchorLink}
            mediaUrl={projects.mediaUrl}
          />
        ))}
      </div>
    </>
  );
}
