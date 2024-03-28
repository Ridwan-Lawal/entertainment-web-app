/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "850px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
