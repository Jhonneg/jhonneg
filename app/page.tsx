import Typer from "@/components/typer.client";
import FeaturedProjects from "@/components/featured-projects.server";
import { portfolioMetadata } from "@/lib/seo";

export function generateMetadata() {
  return portfolioMetadata("/");
}

export default function Home() {
  return (
    <>
      <Typer />
      <FeaturedProjects />
    </>
  );
}
