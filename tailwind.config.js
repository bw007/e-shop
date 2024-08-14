/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.pug", "./src/scss/**/*.scss"],
  theme: {
    extend: {
      fontFamily: {
        dewi: ['RF Dewi', 'sans-serif']
      }
    },
  },
  plugins: [],
};
