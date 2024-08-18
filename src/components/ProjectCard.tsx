import { ProjectCardProps } from "../projects";

export default function ProjectCard({
  name,
  description,
  anchorLink,
  mediaUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <a href={anchorLink}>
      <div className="card card-normal bg-base-100 shadow-xl">
        <figure>
          <img src={mediaUrl} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            {techStack.map((tech, index) => (
              <div key={index} className="badge badge-outline">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
