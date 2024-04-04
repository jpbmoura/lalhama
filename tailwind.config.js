/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brown: {
          100: "#FFE5D9",
          200: "#F0C3AD",
          300: "#E09670",
          400: "#F57331",
          500: "#E55C17",
          600: "#BF521B",
          700: "#994318",
          800: "#823D1A",
          900: "#6B3316",
        },
      },
    },
  },
  plugins: [],
};
