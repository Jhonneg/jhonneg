import ghSvg from "../assets/github-mark-white.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="flex justify-center items-center">
          <img
            className="animate-spin-slow"
            width="30"
            height="30"
            src={ghSvg}
            alt="github"
          />
        </nav>
      </footer>
    </>
  );
}
