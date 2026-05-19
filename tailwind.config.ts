import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#030712",
        ink: "#08111f",
        mist: "#b7c6dc",
        electric: "#38bdf8",
        cyanGlow: "#22d3ee",
        violetGlow: "#8b5cf6",
        pinkGlow: "#fb7bcf",
        tealGlow: "#2dd4bf",
      },
      boxShadow: {
        glow: "0 0 80px rgba(56, 189, 248, 0.24)",
        violet: "0 0 90px rgba(139, 92, 246, 0.28)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.16), 0 24px 80px rgba(2,6,23,0.45)",
      },
      backgroundImage: {
        "radial-lift":
          "radial-gradient(circle at 20% 10%, rgba(56, 189, 248, 0.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(139, 92, 246, 0.16), transparent 32%), linear-gradient(180deg, #020617 0%, #06111f 48%, #020617 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        aurora: {
          "0%": { transform: "translate3d(-5%, -2%, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(4%, 3%, 0) rotate(8deg)" },
          "100%": { transform: "translate3d(-5%, -2%, 0) rotate(0deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        trace: {
          "0%": { strokeDashoffset: "220" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        aurora: "aurora 16s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        trace: "trace 2.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
