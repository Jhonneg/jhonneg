import Link from "next/link";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";

const stack = [
  {
    key: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    key: "frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  { key: "delivery", technologies: ["Jest", "Docker", "GitHub Actions"] },
  { key: "python", technologies: ["Python", "RAG", "LangChain"] },
] as const;

export default function Page() {
  const { about } = dictionaries[getLocale()];

  return (
    <article className="mb-12 text-left" aria-labelledby="about-title">
      <header className="mb-6 rounded-3xl border border-primary/20 bg-base-200 px-6 py-10 sm:p-10">
        <h1
          id="about-title"
          className="text-4xl font-bold text-warning sm:text-5xl"
        >
          {about.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-8 text-base-content">
          {about.intro}
        </p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-primary/30 bg-base-200 shadow-lg">
        <div
          aria-hidden="true"
          className="flex items-center gap-2 border-b border-primary/20 bg-neutral px-6 py-4"
        >
          <span className="size-3 rounded-full bg-warning" />
          <span className="size-3 rounded-full bg-primary" />
          <span className="size-3 rounded-full bg-base-content/40" />
          <span className="ml-3 text-xs text-base-content/70">
            jhonne@portfolio:~
          </span>
        </div>

        <div className="space-y-10 px-5 py-8 sm:p-10">
          <section aria-labelledby="whoami-command">
            <h2
              id="whoami-command"
              className="text-xl font-semibold text-warning"
            >
              <span aria-hidden="true">$ </span>
              {about.whoami.heading}
            </h2>
            <div className="mt-4 max-w-3xl space-y-4 text-base leading-8 text-base-content">
              <p>{about.whoami.story}</p>
              <p>{about.whoami.practice}</p>
            </div>
          </section>

          <section aria-labelledby="stack-command">
            <h2
              id="stack-command"
              className="text-xl font-semibold text-warning"
            >
              <span aria-hidden="true">$ </span>
              {about.stack.heading}
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {stack.map(({ key, technologies }) => (
                <div
                  key={key}
                  className="min-w-0 rounded-2xl border border-primary/20 bg-base-300/50 p-5"
                >
                  <dt className="font-semibold text-warning">
                    {about.stack[key]}
                  </dt>
                  <dd className="mt-2 break-words text-sm leading-7 text-base-content">
                    {technologies.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="projects-command">
            <h2
              id="projects-command"
              className="text-xl font-semibold text-warning"
            >
              <span aria-hidden="true">$ </span>
              {about.projects.heading}
            </h2>
            <p className="mt-4 text-base-content">{about.projects.intro}</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-base-content sm:text-base">
              <li>
                <Link
                  href="/projects/js"
                  className="link link-warning focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
                >
                  {about.projects.planets}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/js"
                  className="link link-warning focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
                >
                  {about.projects.pong}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/python"
                  className="link link-warning focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
                >
                  {about.projects.rag}
                </Link>
              </li>
            </ul>
            <Link
              href="/projects/js"
              className="mt-6 inline-flex min-h-11 items-center text-warning underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
            >
              {about.projects.view} →
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
