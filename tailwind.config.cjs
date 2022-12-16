const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.zinc,
        text_primary: colors.slate,
        text_secondary: colors.orange,
      },
    },
  },
  plugins: [],
};
