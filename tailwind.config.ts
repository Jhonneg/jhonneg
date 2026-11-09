import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        display: [
          "clamp(2rem, 5vw, 3.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.03em" },
        ],
        section: [
          "clamp(1.75rem, 3.5vw, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        reading: "68ch",
      },
      animation: {
        "spin-slow": "spin 11s linear infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["coffee"],
  },
};
export default config;
