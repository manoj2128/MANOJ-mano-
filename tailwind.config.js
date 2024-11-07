/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary ' : 'rgb(88, 44, 114)',
        'secondary ': 'rgb(88, 44, 114)',
      }
    },
    fontFamily : {
       'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

