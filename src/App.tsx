import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectGallery from "./components/ProjectGallery";
import Typer from "./components/Typer";

function App() {
  return (
    <>
      <Typer delay={50} infinite />
      <About />
      <ProjectGallery />
      <Footer />
    </>
  );
}

export default App;
