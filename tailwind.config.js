/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      fontFamily: {
        poppins: "Poppins",
        pacifico: "Pacifico",
      },
    },
  },
  plugins: [],
};
