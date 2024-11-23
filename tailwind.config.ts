import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        "light-blue": "#f5f7ff",
        "dark-gray": "#1f2937",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Adding the Inter font
      },
    },
  },
  plugins: [],
} satisfies Config;
