import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { bg: "#FAFDF7", accent: "#2D6A4F", "accent-light": "#40916C", dark: "#1B1B1B", muted: "#6B7280", light: "#F0F5EC", border: "#E2E8D9", yellow: "#FEF9E7", "yellow-dark": "#D4A017" },
      },
      fontFamily: { serif: ["Georgia", "Times New Roman", "serif"], sans: ["DM Sans", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
