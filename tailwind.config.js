/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },

    screens: {
      sm: '576px',
      md: '720px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
