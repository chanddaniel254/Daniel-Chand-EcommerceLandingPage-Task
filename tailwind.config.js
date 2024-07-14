/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#484848",
      },
      fontSize: {
        xxl: "52px",
        xxxl: "91px",
        xxxxl: "181px",
      },
      borderRadius: {
        button: "10px",
      },
      fontFamily: {
        poppinsRegular: ["Poppins", "Regular"],
        poppinsMedium: ["Poppins", "Medium"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".text-stroke": {
            color: "transparent",
            "-webkit-text-stroke": "1.3px black",
          },
        },
        ["responsive", "hover"]
      );
    }),
  ],
};
