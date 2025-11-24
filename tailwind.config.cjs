/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rayBlue: "#064663",
        rayTeal: "#08979c",
        rayLight: "#f3fafc"
      }
    }
  },
  plugins: []
};
