import Link from "next/link";
import { projectsData, projectsDataPython } from "@/constants/projects";

const featuredProjects = [
  projectsData[1],
  projectsData[0],
  projectsDataPython[2],
];

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-projects-title" className="mb-12">
      <div className="mb-6 flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-warning">
            Selected work
          </p>
          <h2 id="featured-projects-title" className="mt-2 text-3xl font-bold">
            Projects worth a closer look
          </h2>
        </div>
        <Link
          href="/projects/js"
          className="link link-warning w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
        >
          Browse all projects →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <a
            key={project.name}
            href={project.anchorLink}
            target="_blank"
            rel="noreferrer"
            className="group relative flex min-h-80 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-base-200 text-center transition hover:border-warning/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
          >
            <video
              className="pointer-events-none absolute inset-0 size-full object-cover"
              src={project.mediaUrl.trim()}
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-base-300/70 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-100" />
            <div className="relative z-10 flex flex-col items-center p-5 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-100">
              <h3 className="text-xl font-bold text-warning">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-warning">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge badge-primary badge-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
