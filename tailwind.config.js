/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.pug", "./src/scss/**/*.scss"],
  theme: {
    extend: {
      fontFamily: {
        dewi: ['"RF Dewi"', 'sans-serif']
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #0D99F8, #21A0F8, #54B5FF, #0DBBF8, #0DDBF8)',
        'logo-mask-gradient': `
          linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.3)),
          url('../images/footer/logo-mask.svg')
        `,
      },
      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-xxl': '1360px',
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
        'xxl': '1360px',
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
