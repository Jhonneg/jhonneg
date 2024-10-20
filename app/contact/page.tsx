import Image from "next/image";
import discordSvg from "@/public/icons8-discord.svg";
import ytSvg from "@/public/icons8-youtube.svg";
import MailButton from "@/components/mailbutton.client";

export default function Page() {
  return (
    <main className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold mb-11">Get in contact</h1>
          <div className="mr-10">
            <div className="flex justify-center items-center py-4">
              <Image
                className="mx-4 animate-spin-slow"
                width="30"
                height="30"
                src={discordSvg}
                alt="discord-logo"
              />
              <span>@jonee2</span>
            </div>
            <div className="flex justify-center items-center py-4">
              <Image
                className="mx-4 animate-spin-slow"
                width="30"
                height="30"
                src={ytSvg}
                alt="discord-logo"
              />
              <span>@Joneewars2</span>
            </div>
          </div>
          <MailButton />
        </div>
      </div>
    </main>
  );
}
