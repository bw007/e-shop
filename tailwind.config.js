/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.pug", "./src/scss/**/*.scss"],
  theme: {
    extend: {
      fontFamily: {
        dewi: ['RF Dewi', 'sans-serif']
      }
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
