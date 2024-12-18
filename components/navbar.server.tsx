import Link from "next/link";
import React from "react";
import Image from "next/image";
import ghSvg from "@/public/github-mark-white.svg";

export default function Navbar() {
  return (
    <nav className="navbar items-center justify-center rounded-3xl bg-neutral">
      <a href="https://github.com/jhonneg" target="_blank">
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
          <Link href="contact">Contact</Link>
        </li>
        <li>
          <Link href="projects">Projects</Link>
        </li>
        <li>
          <Link href="about">About me</Link>
        </li>
        <li>
          <Link href="chat">Chat</Link>
        </li>
      </ul>
    </nav>
  );
}
