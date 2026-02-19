/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e8f0ff',
          100: '#dce8ff',
          200: '#b8d1ff',
          300: '#80afff',
          400: '#4d8fff',
          500: '#1a6fff',
          600: '#0146c7',
          700: '#013aa3',
          800: '#012d80',
          900: '#041133',
          950: '#020a1f',
        },
        accent: {
          50: '#fffdf0',
          100: '#fff9d6',
          200: '#fff3a8',
          300: '#ffec70',
          400: '#ffe43d',
          500: '#ffd602',
          600: '#e6c000',
          700: '#b39500',
          800: '#806a00',
          900: '#4d4000',
        },
      },
      boxShadow: {
        'nav': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'nav-scroll': '0 8px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
