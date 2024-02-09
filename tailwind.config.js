/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightBlue: '#191970',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
