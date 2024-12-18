/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#F8FAFC",
        verylight: "#D9EAFD",
        lightgray: "#BCCCCD",
        mutedblue: "#9AA6B2",
      },
    },
  },
  plugins: [],
};
