import { ProjectCardProps } from "../projects";

export default function ProjectCard({
  name,
  description,
  anchorLink,
  mediaUrl,
  techStack,
}: ProjectCardProps) {
  const isImage = mediaUrl.split().pop() === "jpg";
  return (
    <div className="card bg-base-100 w-96 lg:w-72 shadow-xl">
      <a href={anchorLink}>
        {isImage ? (
          <img src={mediaUrl} alt={name} />
        ) : (
          <video
            loop
            typeof="video/mp4"
            autoPlay
            muted
            width="500"
            height="500"
            src={mediaUrl}
          ></video>
        )}
      </a>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          {techStack.map((tech, index) => (
            <div key={index} className="badge badge-secondary">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
