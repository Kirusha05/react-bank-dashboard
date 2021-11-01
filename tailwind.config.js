module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      // Active menu link classes
      "border-l-2",
      "border-blue-500",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      width: {
        84: "21rem",
        88: "22rem",
        92: "23rem"
      },
      minWidth: {
        56: "14rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
      },
      gridTemplateColumns: {
        custom: "2fr 1fr 1fr 1fr 1fr"
      },
      colors: {
        turquoise: "#68DBF2"
      }
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
