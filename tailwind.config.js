/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      colors:{
        'background':'#1f1f38',
        'backroundVariant':'#2c2c6c',
        'primary':'#4db5ff',
        'primaryVariant':'rgba(77, 181, 255, 0.4)',
        'colorWhite':'#fff',
        'colorLight':'rgba(255, 255, 255, 0.6)',
      },
      width:{
        containerWidthLg:'75%',
        containerWidthMd:'86%',
        containerWidthMs:'90%',
      },
      transitionProperty: { 
        transitionProp: 'all 400ms ease',
      },
    },
  },
  plugins: [],
}

