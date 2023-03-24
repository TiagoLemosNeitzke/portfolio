/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors:{
      'primary-color': '#01b5c0',
      'primary-color-400': '#0BA8B1',
      'secondary-color': '#d6f3f5',
      'white': "#fff",
      'emphasis': '#9b9191'
    },
    fontSize: {
      'title-1': ['68px', '74px'],
      'title-2': ['48px', '62px'],
      'title-3': ['36px', '46.8px'],
      'title-4': ['28px', '36.4px'],
      'title-5': ['18px', '28px'],
      'title-6': ['16px', '24px'],
    },
    extend: {},
  },
  plugins: [],
}
