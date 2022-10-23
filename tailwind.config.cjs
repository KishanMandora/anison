/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/10": "10%",
      },
      height: {
        "1/10": "10%",
        "8/10": "80%",
        "9/10": "90%",
        120: "30rem",
      },
      width:{
        120: "30rem",
      },
      minHeight: {
        "1/10": "10%",
      },
      colors: {
        primary: "#e13c33",
        secondary: {
          "extra-dark": "#0c0c0c",
          "extra-light": "#2b2b2b",
          dark: "#161616",
          light: "#212121",
          transparent: "#0c0c0cb3",
        },
        error: "#F95D4E",
      },
      fontFamily: {
        "work-sans": ["Work Sans"],
      },
      screens: {
        xxs: "380px",
        xs: "520px",
        "semi-lg": "840px",
        "semi-xl": "1072px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
