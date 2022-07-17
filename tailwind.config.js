/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    backgroundImage: {
      'bg-hero': "url('/assets/bghome.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
