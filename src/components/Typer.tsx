import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

type TyperProps = {
  delay: number;
  infinite: boolean;
};

export default function Typer({ delay, infinite }: TyperProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const text = [
    "A aspiring webdev",
    "A linux entusiast",
    "A aspiring 3D artist",
    "Front-end enjoyer",
  ];

  return (
    <>
      <section className="bg-base-200 min-h-48 rounded-3xl flex items-center justify-center">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">I'm Jhonne</h1>
            <ReactTyped
              strings={[
                "A aspiring webdev",
                "A linux entusiast",
                "A aspiring 3D artist",
                "Front-end enjoyer",
              ]}
              typeSpeed={50}
              loop
              cursorChar=""
            />
          </div>
        </div>
      </section>
      <section className="header">
        <h1 className="pmain"></h1>
        <p className="typing sub-title para-black"></p>
      </section>
    </>
  );
}
