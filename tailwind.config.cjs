/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      colors: {
        primary: "#e13c33",
        secondary: "#0c0c0c",
      },
      fontFamily: {
        "work-sans": ["Work Sans"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
