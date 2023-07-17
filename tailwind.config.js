/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "alchemy-white": "#e4dfda",
        "alchemy-purple": "#9b5094",
        "alchemy-purple-alt": "#6b337a",
        "alchemy-orange": "#ff850a",
        "alchemy-gray": "#484a47",
        "alchemy-licorice": "#22181c",
      },
      fontFamily: {
        serif: ["InknutAntiqua", "serif"],
        cursive: ["UnifrakturCook", "cursive"],
      },
    },
  },
  variants: {},
  plugins: [],
};
