/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.{html,js}", "./src/php/*.{php}"],
  theme: {
    colors: {
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
      'title-4': ['24px', '36.4px'],
      'title-5': ['18px', '32px'],
      'title-6': ['16px', '24px'],
    },
    keyframes: {
      progressBar60: {
        '0%': { width: '0%' },
        '60%': { width: '60%' },
      },
      progressBar70: {
        '0%': { width: '0%' },
        '70%': { width: '70%' },
      },
      progressBar75: {
        '0%': { width: '0%' },
        '75%': { width: '75%' },
      },
      progressBar90: {
        '0%': { width: '0%' },
        '90%': { width: '90%' },
      }
    },
    animation: {
      progressBar60: 'progressBar60 4s ease-in-out',
      progressBar70: 'progressBar70 4s ease-in-out',
      progressBar75: 'progressBar75 4s ease-in-out',
      progressBar90: 'progressBar90 4s ease-in-out',
    },
    extend: {},
  },
  plugins: [],
}
