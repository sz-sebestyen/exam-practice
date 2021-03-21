module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html"],
  },
  // purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
