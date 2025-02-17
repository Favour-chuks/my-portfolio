/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/assets/pages/*.{js,ts,jsx,tsx}",
    "./src/assets/component/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
