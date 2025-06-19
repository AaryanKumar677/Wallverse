/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        // Geist font from next/font
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        gradientStart: "#ff8a00",
        gradientEnd: "#e52e71",
      },
      backgroundImage: {
        "gradient-to-rainbow": "linear-gradient(90deg, #ff8a00, #e52e71)",
        "gradient-to-purple": "linear-gradient(to right, #ff5fbd, #9c27b0)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 105, 180, 0.6)",
      },
    },
  },
  plugins: [],
};
