import Image from "next/image";
import discordSvg from "@/public/icons8-discord.svg";
import ytSvg from "@/public/icons8-youtube.svg";
import MailButton from "@/components/mailbutton.client";

export default function Page() {
  return (
    <main className="hero mb-12 min-h-screen rounded-3xl bg-base-200">
      <div className="hero-content:hover:opacity-100 text-center">
        <div className="flex max-w-md flex-col items-center justify-center">
          <h1 className="mb-11 text-5xl font-bold">Get in contact</h1>
          <div className="mr-10">
            <div className="flex items-center justify-center py-4">
              <Image
                className="mx-4 animate-spin-slow"
                width="30"
                height="30"
                src={discordSvg}
                alt="discord-logo"
              />
              <span>@jonee2</span>
            </div>
            <div className="flex items-center justify-center py-4">
              <Image
                className="mx-4 animate-spin-slow"
                width="30"
                height="30"
                src={ytSvg}
                alt="discord-logo"
              />
              <span>@Jonee15</span>
            </div>
          </div>
          <MailButton />
        </div>
      </div>
    </main>
  );
}
