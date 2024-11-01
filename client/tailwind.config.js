/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        'discordbg': '#18191C',
        'discordbtn': '#4F545C',
        'discordtext': '#A7A9AD',
        'discordBtnHover': '#656b75',
        'discordText': '#A7A9AD'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      }
    },
    plugins: [require('daisyui')],
  }