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
        brand: {
          // Navy / cool blue — primary backgrounds
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#0f1b3e",
        },
        // Red — heating / primary CTA (logo thermometer bulb + right wave)
        heat: {
          50:  "#fff1f2",
          100: "#ffe4e6",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
        },
        // Orange — thermometer stem / warm accent
        warm: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        // Sky — cooling tube / cool accent (logo bottom)
        cool: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        // Design system tokens from HTML reference
        accent: {
          DEFAULT: "#C8330A",
          hover:   "#b02c08",
          light:   "#E85A2A",
        },
        surface: {
          DEFAULT: "#151720",
          2:       "#1c1f2e",
        },
        site: {
          bg: "#0D0F18",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
