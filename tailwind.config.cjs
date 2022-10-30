/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'poke-red':'#DC0A2D',
        'poke-blue':'#28AAFD',
        'poke-green':'#51AE5F'
      }
    },
  },
  plugins: [],
}
