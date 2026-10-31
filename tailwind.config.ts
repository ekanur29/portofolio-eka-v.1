import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: "#E8B947",
        denim: "#2E77A3",
        cream: "#FFF8E7",
        ink: "#111111",
        coral: "#E8614A",
        mint: "#4AB89A",
        lav: "#9B7FE8",
        pink: "#E84A9B",
      },
      fontFamily: {
        baloo: ["var(--font-baloo)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        comic: "5px 5px 0px 0px #111111",
        "comic-lg": "7px 7px 0px 0px #111111",
        "comic-hover": "10px 10px 0px 0px #111111",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out 0.5s infinite",
        "float-slow": "float 4s ease-in-out 1s infinite",
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
