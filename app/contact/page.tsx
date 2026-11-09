import Image from "next/image";
import discordSvg from "@/public/icons8-discord.svg";
import { WhatsAppButton } from "@/components/whatsappbutton.client";
import { contact } from "@/constants/contact";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";

export default function Page() {
  const { contact: copy } = dictionaries[getLocale()];

  return (
    <section className="mb-12 text-left" aria-labelledby="contact-title">
      <header className="rounded-3xl border border-primary/20 bg-base-200 px-6 py-10 sm:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-warning">
          {copy.location}
        </p>
        <h1
          id="contact-title"
          className="mt-4 text-4xl font-bold text-warning sm:text-5xl"
        >
          {copy.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-base-content">
          {copy.intro}
        </p>
        <a
          href="/CVWEB2026.pdf"
          download="Jhonne-Guerra-CV-PT-BR.pdf"
          className="link link-warning mt-5 inline-flex min-h-11 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
        >
          {copy.cv} ↓
        </a>
      </header>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-warning">{copy.primary}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="flex min-w-0 flex-col rounded-3xl border border-primary/30 bg-base-200 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-warning">{copy.email}</h3>
            <p className="mt-4 break-all text-base-content">{contact.email}</p>
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-warning mt-8 min-h-11 w-fit rounded-full px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
            >
              {copy.emailAction}
            </a>
          </article>
          <article className="flex min-w-0 flex-col rounded-3xl border border-primary/30 bg-base-200 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-warning">
              {copy.linkedIn}
            </h3>
            <p className="mt-4 break-words text-base-content">
              linkedin.com/in/jhonne-guerra-505494197
            </p>
            <a
              href={contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.linkedInAction}: LinkedIn (${copy.newTab})`}
              className="btn btn-warning mt-8 min-h-11 w-fit rounded-full px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
            >
              {copy.linkedInAction} ↗
            </a>
          </article>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-warning">{copy.other}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="rounded-3xl border border-primary/20 bg-base-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-warning">
              {copy.whatsapp}
            </h3>
            <WhatsAppButton />
          </article>
          <article className="rounded-3xl border border-primary/20 bg-base-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-warning">
              {copy.discord}
            </h3>
            <p className="mt-3 text-sm text-base-content">{copy.discordHelp}</p>
            <div className="mt-5 flex items-center gap-3">
              <Image
                className="motion-safe:animate-spin-slow"
                width={30}
                height={30}
                src={discordSvg}
                alt=""
              />
              <span className="text-lg text-warning">{contact.discord}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
