/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        10: "0.1",
        20: "0.2",
        98: "0.98",
        80: "0.80",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        secondaryblack: "#0E0E0E",
        "erie-black": "#181818",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "tea-green": "#D4FAC9",
        "second-tea-green": "#DBF9CD",
        "ocean-blue": "#423AD0",
        "second-ocean-blue": "#4131CB",
        "dark-charcoal": "#303030",
        "blue-purple": "#413AC8",
        'secondary-purple': '#443CCF',
      },
    },
  },
  plugins: [],
};


