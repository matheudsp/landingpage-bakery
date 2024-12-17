/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideDown: 'slideDown 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
      },
    },
  },
  plugins: [],
};