/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': "-2px 5px 3px 1px #2b2b2b"
      }
    },
  },
  plugins: [],
}

