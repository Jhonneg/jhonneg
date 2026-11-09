import Link from "next/link";
import React from "react";
import Image from "next/image";
import ghSvg from "@/public/github-mark-white.svg";

export default function Navbar() {
  return (
    <nav aria-label="Primary navigation" className="navbar items-center justify-center rounded-3xl bg-neutral">
      <a href="https://github.com/jhonneg" target="_blank" rel="noreferrer" aria-label="Jhonne on GitHub" className="rounded-full p-2 transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning">
        <Image
          className="animate-spin-slow"
          width="30"
          height="30"
          src={ghSvg}
          alt="github"
        />
      </a>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning" href="/contact">Contact</Link>
        </li>
        <li>
          <Link className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning" href="/projects/js">Projects</Link>
        </li>
        <li>
          <Link className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning" href="/about">About me</Link>
        </li>
        {/* <li>
          <Link href="/chat">Chat</Link>
        </li> */}
      </ul>
    </nav>
  );
}
