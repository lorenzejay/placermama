module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: {
          100: `#f3ebe3`,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
