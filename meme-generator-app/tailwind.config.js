/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        impact: ['Impact']
      },
      fontWeight:{
        'poppins-medium': 500,
        'poppins-semibold': 600,
      }
    },
  },
  plugins: [],
}