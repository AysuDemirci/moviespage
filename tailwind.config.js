/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      screens:{
        lg:"1140px",
        xl:"1140px",
        "2xl":"1140px"
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        
      },
      colors: {
        'machine-red': '#BC1A45',
        'machine-melon': '#FFD369',
        'machine-grey': '#DDDDDD',
        'machine-white': '#F7F7F7',
        'machine-darkgray':"#121212"
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
