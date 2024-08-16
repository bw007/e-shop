/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.pug", "./src/scss/**/*.scss"],
  theme: {
    extend: {
      fontFamily: {
        dewi: ['"RF Dewi"', 'sans-serif']
      },
      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
      screens: {
        'tiny': '320px',
        'xxs': '375px', 
        'xs': '520px',  
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '1.5rem',
      },
    },
  },
  plugins: [],
};
