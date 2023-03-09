/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage:{
        'main-image':'url("./images/website-background.jpg")'
      }
    },
  },
  plugins: [],
}
