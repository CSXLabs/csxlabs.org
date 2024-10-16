import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["'Schibsted Grotesk'", "Roboto", "sans-serif"],
        "mono": ["'Space Mono'", "Roboto Mono", "monospace"]
      }
    },
  },
  plugins: [],
};
export default config;