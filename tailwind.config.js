/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.vue", "./src/components/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#274e74",
        secondary: "#f1f5f9",
        hover: "#38bdf8"
      }
    },
  },
  plugins: [],
}

