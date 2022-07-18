/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    screens: {
      md: '1020px',
      lg: '1288px',
      xl: '1366px',
      '2xl': '1600px',
      '3xl': '1900px',
    },
    extend: {},
  },
  plugins: [],
};
