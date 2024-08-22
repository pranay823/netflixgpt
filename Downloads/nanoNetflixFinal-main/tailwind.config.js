/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'grey' : '#333333',
         'light-gray': '#8c8c8c',
         'offwhite' : '#ffffff',
         'bgcolor' : '#181818',
         'netred'  : '#E50815'
      }
    },
  },
  plugins: [],
}

