/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F6995C'
      },
      container: {
        padding: '3rem'
      },
    },
  },
  plugins: [],
}

