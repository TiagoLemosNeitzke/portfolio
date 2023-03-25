/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.{html,js}", "./src/php/*.{php}"],
  theme: {
    colors:{
      'primary-color': '#01b5c0',
      'primary-color-400': '#0BA8B1',
      'secondary-color': '#b1dee0',
      'white': "#fff",
      'emphasis': '#9b9191'
    },
    fontSize: {
      'title-1': ['68px', '74px'],
      'title-2': ['48px', '62px'],
      'title-3': ['36px', '46.8px'],
      'title-4': ['28px', '36.4px'],
      'title-5': ['18px', '32px'],
      'title-6': ['16px', '24px'],
    },
    extend: {},
  },
  plugins: [],
}
