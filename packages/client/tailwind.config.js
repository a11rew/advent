module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryGreen: "hsl(119deg 53% 40%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
