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
        strat: {
          bg: "#0a0d12",
          bg2: "#0f1319",
          bg3: "#151b24",
          surface: "#1a2230",
          border: "rgba(255, 255, 255, 0.07)",
          border2: "rgba(255, 255, 255, 0.13)",
          text: "#e8edf5",
          muted: "#7a8899",
          accent: "#00e5a0",
          accent2: "#00aaff",
          accent3: "#ff6b35",
          gold: "#f4c842",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        pulse: "pulse-dot 2s infinite",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
