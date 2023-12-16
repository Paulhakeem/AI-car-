/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#ffbb00",
        "black": "#000000",
        "green": "#48ac57",
        "gray": "#e7e9e5",
        "white": "#ffffff",
        "heading": "#222b36"
      }
    },
  },
  plugins: [],
}