import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        greyxb: ['var(--font-greyxb)','sans-serif'],
        greyb: ['var(--font-greyb)','sans-serif'],
        greymd: ['var(--font-greymd)','sans-serif'],
        greydb: ['var(--font-greydb)','sans-serif'],
        greyrg: ['var(--font-greyrg)','sans-serif'],
        outfit: ['var(--font-outfit)','sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
