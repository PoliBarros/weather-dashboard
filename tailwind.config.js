import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'], // Add Roboto as the default sans font
      },
      keyframes: {
        sunrise: {
          '0%': { bottom: '43%', left: '-44%' },
          '25%': { bottom: '50%', left: '-35%' },
          '50%': { bottom: '60%', left: '-19%' },
          '100%': { bottom: '60%', left: '-19%' },
        },
        sunset: {
          '0%': { bottom: '43%', left: '-44%' },
          '25%': { bottom: '50%', left: '-35%' },
          '50%': { bottom: '60%', left: '-19%' },
          '75%': { bottom: '65%', left: '3%' },
          '100%': { bottom: '60%', left: '19%' },
        },
      },
      animation: {
        sunrise: 'sunrise 5s linear forwards ',
        sunset: 'sunset 5s linear forwards',
      },
    },
    plugins: [],
  },
};
