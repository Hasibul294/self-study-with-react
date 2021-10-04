// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "home-image": "url('/src/images/home.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
