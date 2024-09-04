/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'orange-color': '#ff4d05'
      },
      backgroundColor: {
        'orange-color': '#ff4d05',
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}