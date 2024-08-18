import { ReactTyped } from "react-typed";

export default function Typer() {
  const text = [
    "A aspiring webdev",
    "A linux entusiast",
    "A aspiring 3D artist",
    "Front-end enjoyer",
  ];

  return (
    <>
      <section className="bg-base-200 min-h-48 rounded-3xl flex items-center justify-center mb-12">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">I'm Jhonne</h1>
            <ReactTyped strings={text} typeSpeed={50} loop cursorChar="" />
          </div>
        </div>
      </section>
      <section className="my-12">
        <h1 className="uppercase my-8 text-2xl">About Me</h1>
        <p>
          I'm a aspiring webdev and my focus is designing user-friendly
          web-applications
        </p>
      </section>
    </>
  );
}
