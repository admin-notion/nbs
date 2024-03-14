import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "serif"],
      Urbanist: ["Urbanist", "serif"],
      PressStart: ['"Press Start 2P"', "serif"],
      Oswald: ['"Oswald"', "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/branding/Robo.png')",
      },
    },
  },
  plugins: [],
};
export default config;
