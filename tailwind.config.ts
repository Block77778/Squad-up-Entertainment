import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--text-primary)",
        card: "var(--dark-panel)",
        purple: "var(--purple)",
        "purple-light": "var(--purple-light)",
        teal: "var(--teal)",
        "teal-light": "var(--teal-light)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
      },
    },
  },
  plugins: [],
} satisfies Config;
