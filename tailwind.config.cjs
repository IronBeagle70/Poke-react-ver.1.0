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
        'poke-green':'#51AE5F',
        'poke-black-img':'#2B2B2B',
        'poke-blue-img':'#4C8FD2',
        'poke-white-img':'#DEDEDE',
        'poke-sky-img':'#A1DAFE',
        'poke-new-red-img':'#FF4763',
        'poke-new-green-img':'#4FAE5D',
        'poke-new-yellow-img':'#FFE748',
        'poke-new-black-img':'#191919',
        'poke-new-red-top':'#89061C'
      }
    },
  },
  plugins: [],
}
