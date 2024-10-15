/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      fontFamily:{
        nunito:["Nunito", "sans-serif"]
      },
      spacing:{
        "big":"38rem"
      }
    },
  },
  plugins: [],
}