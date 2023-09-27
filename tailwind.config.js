/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      fontFamily: {
        iransansdnLight: ["iransansdn light"],
        iransansdn: ["iransansdn"],
        iransansdnBold: ["iransansdn bold"],
        iransans: ["iransans"],
        iransansUltraLight: ["iransans ultraLight"],
        iransansLight: ["iransans light"],
        iransansMedium: ["iransans medium"],
        iransansBold: ["iransans bold"],
      },
      colors: {
        dark: {
          DEFAULT: "#ffffff",
          100: "#ffffffec",
          200: "#d3d3d3",
          300: "#bebebe",
          400: "#8c8c8c",
          500: "#737373",
          600: "#464646",
          700: "#252525",
          800: "#212121",
          900: "#1c1c1c",
          950: "#161616",
        },
        sbz: {
          1: "#7cbf00",
          2: "#0cc725",
        },
        orng: {
          1: "#ff4500",
          2: "#b32505",
          3: "#c08a71",
          4: "#857060",
          5: "#6d5d51",
          6: "#38302a",
        },
      },
      boxShadow: {
        dna: "0px 1px 10px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [
    function({addVariant}) {
      addVariant('child', '& > *');
      // addVariant('child-li', '& > li');
      // addVariant('child-a', '& > a');
      addVariant('child-hover', '& > *:hover');
    }
  ],
};
