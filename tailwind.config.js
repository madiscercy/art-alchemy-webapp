/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#1b1322",
        "alchemy-purple": "#c00dfa",
        "alchemy-purple-alt": "#660181",
        "alchemy-orange": "#ff7b6b",
        "alchemy-orange-alt": "#fccb7e",
        "alchemy-blue": "#2eb2f0",
        "alchemy-blue-alt": "#2e648a",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        cursive: ["UnifrakturCook", "cursive"],
      },
    },
  },
  variants: {},
  plugins: [],
};
