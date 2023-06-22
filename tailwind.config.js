/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#f1f1f1",
        "black": "#09090E"
      },
      fontFamily: {
        'display': ['Raleway'],
        'body': ["Open Sans"]
      }
    },
  },
  plugins: [],
}