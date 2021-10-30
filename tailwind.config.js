module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      // Active menu link classes
      "border-l-2",
      "border-blue-500"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter, sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
