/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
   "./app/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": "#1e1e1e",
        "secondary": "#e2f163",
        "tertiary": "#896cfe"
      }
    },
  },
  plugins: [],
}

