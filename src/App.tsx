import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectGallery from "./components/ProjectGallery";
import Typer from "./components/Typer";

export default function App() {
  return (
    <>
      <Typer />
      <About />
      <ProjectGallery />
      <Footer />
    </>
  );
}
