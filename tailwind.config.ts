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
        bg: '#080c14',
        card: '#10172a',
        'card-border': '#1c2642',
        cyan: { DEFAULT: '#06b6d4', dark: '#0891b2' },
        muted: '#7c8fad',
        dim: '#3a4a63',
      },
    },
  },
  plugins: [],
};

export default config;
