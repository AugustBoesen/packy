import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      animation: {
        'spin-slow': 'spin 120s linear infinite',
        'pulse-slow': 'pulse 10s linear infinite',
        'bounce-slow': 'bounce 90s linear infinite',
      }
    }

  },
  plugins: [],
};
export default config;
