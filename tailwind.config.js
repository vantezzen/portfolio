/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ebebeb",
          100: "#c1c1c1",
          200: "#979797",
          300: "#6e6e6e",
          400: "#454545",
          500: "#212121",
          600: "#1c1c1c",
          700: "#171717",
          800: "#121212",
          900: "#0d0d0d",
        },
        fire: {
          50: "#ffe9e9",
          100: "#ffcfcf",
          200: "#ffb7b7",
          300: "#ff9f9f",
          400: "#ff8787",
          500: "#ff6f5f",
          600: "#ff5757",
          700: "#ff3f3f",
          800: "#ff2727",
          900: "#ff0f0f",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "Inter", "Roboto", "sans-serif"],
        inter: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
