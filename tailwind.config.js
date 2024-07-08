/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "slidebar-up": "#1A1A1A",
        "main-color": "#1A1B26",
        "gradient-from": "#261F56",
        "gradient-to": "#27224B",
        "b-gradient-from": "#C630FB",
        "b-gradient-to": "#BE70FC"
      }
    },
  },
  plugins: [],
}

