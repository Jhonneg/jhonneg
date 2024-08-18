import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
