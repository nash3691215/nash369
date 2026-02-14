/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6C3AED",
        "accent-light": "#8B5CF6",
        "accent-dark": "#5B21B6",
        brand: "#2563EB",
        "brand-light": "#3B82F6",
        dark: "#0b0b0b",
        soft: "#fafafa",
        slate: {
          900: "#0b0b0b",
          800: "#1a1a1a",
          700: "#555555"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
        glow: "0 0 20px rgba(108,58,237,0.15)",
        "glow-brand": "0 0 20px rgba(37,99,235,0.15)"
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        }
      },
      animation: {
        "pulse-soft": "pulse-soft 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
