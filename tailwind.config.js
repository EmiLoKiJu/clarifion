/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '12px',
      base: '14px',
      xl: '16px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '32px',
      '5xl': '48px',
    },
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
