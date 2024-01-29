/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'], 
      },
      colors:{
        'main': '#1C1E53',
        'border-rgba': 'rgba(244, 246, 252, 0.20)',
        'foter' : '#282938',
        'royal' : '#2405F2'
      },
      maxWidth:{
        base: '1320px'
      },
    },
    backgroundImage:{
      'hero-bg': "url('./img/kitobxon.png')",
    },
  
  },
  plugins: [],
}