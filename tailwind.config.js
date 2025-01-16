/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:["Nunito", "sans-serif"]
      },
      spacing:{
        "big":"38rem"
      }
    },
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
  },
  plugins: [],
}