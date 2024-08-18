import { ProjectCardProps } from "../projects";

export default function ProjectCard({
  name,
  description,
  anchorLink,
  mediaUrl,
  techStack,
}: ProjectCardProps) {
    
  return (
    <div className="card bg-base-300 sm:w-5/6 md:w-96 lg:w-80 shadow-xl text-center ">
      <a href={anchorLink}>
        <img src={mediaUrl} alt={name} />
        <video
          loop
          typeof="video/mp4"
          autoPlay
          muted
          width="500"
          height="500"
          src={mediaUrl}
        ></video>
      </a>
      <div className="card-body flex items-center flex-grow">
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
