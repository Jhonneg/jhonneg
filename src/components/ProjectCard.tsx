import { ProjectCardProps } from "../projects";

export default function ProjectCard({
  name,
  description,
  anchorLink,
  mediaUrl,
}: ProjectCardProps) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <a href={anchorLink}>
        <figure>
          <video
            loop
            typeof="video/mp4"
            autoPlay
            muted
            width="500"
            height="300"
            src={mediaUrl}
          ></video>
        </figure>
      </a>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
