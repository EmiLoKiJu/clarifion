/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'serif'],
      },
      colors: {
        'black2': '#252f3d',
        'blacktext': '#4d5254',
        'white2': '#edf3fd',
        'blue2': '#2c7ef8',
      },
    },
  },
  plugins: [],
}
