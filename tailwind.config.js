/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amethyst': '#5f689f',
        'peach': '#ffd9d7',
        'lavender': '#b5b7d3',
        'coral': '#f59694',
        'light-coral': '#fab3b0',
        'cotton': '#f5f0ea',
        'dark-purple': '#342e37'
      },
    },
  },
  plugins: [],
}