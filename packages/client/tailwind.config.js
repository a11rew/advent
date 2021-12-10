module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
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
