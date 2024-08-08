/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'consolas'],
      redhat: ['Red Hat Display', 'consolas']
    }
  },
  plugins: [],
  darkMode: 'class'
}