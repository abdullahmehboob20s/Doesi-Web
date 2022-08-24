// tailwind.config.js
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Calibri: "Calibri",
    },
    extend: {
      colors: {
        pink: "#C550FC",
        ourBlue: "#1154FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
