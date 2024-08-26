import ProjectCard from "@/components/project-card.server";
import { projectsData } from "@/constants/projects";

export default function Page() {
  return (
    <>
      <div>
        <section className="bg-base-200 min-h-48 rounded-3xl flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">My Projects</h1>
            </div>
          </div>
        </section>
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
