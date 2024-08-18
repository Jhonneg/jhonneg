import ProjectCard from "./ProjectCard";
import { projectsData } from "../projects";

export default function ProjectGallery() {
  return (
    <>
      <div>
        <p className="text-4xl">Projects</p>
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 my-12">
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
      </div>
    </>
  );
}
