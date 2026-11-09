import ProjectGallery from "@/components/project-gallery.client";
import { portfolioMetadata } from "@/lib/seo";

export function generateMetadata() {
  return portfolioMetadata("/projects/python", "projectsPython");
}

export default function Page() {
  return <ProjectGallery category="python" />;
}
