import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
      sans: ["var(--font-poppins)", "var(--font-zen-kaku)"], // heading
      paragraph: ["var(--font-inter)", "var(--font-noto-jp)"], // body
      },
    },
  },

  plugins: [],
};

export default config;