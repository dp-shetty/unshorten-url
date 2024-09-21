/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        mob:{min:'320px',max:'480px'},
      }
    },
  },
  plugins: [],
};
