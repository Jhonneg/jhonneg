import Typer from "@/components/typer.client";
import FeaturedProjects from "@/components/featured-projects.server";

export default function Home() {
  return (
    <>
      <Typer />
      <FeaturedProjects />
    </>
  );
}
