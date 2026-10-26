/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      // Brand palette for The Signature Estate
      colors: {
        ivory: '#F5F3ED',
        paper: '#FBFAF6',
        charcoal: '#242321',
        taupe: '#A9A297',
        line: '#DEDAD1',
        accent: '#B49A70',
        sand: '#E8E1D5',
        clay: '#DCD3C5', // philosophy item panels
        // Dark sections (statistics, contact, footer)
        ink: {
          DEFAULT: '#0B0D0C',
          card: '#151816',
          line: '#262A27',
          text: '#F7F5EF',
          muted: '#AAA9A2',
        },
        lime: '#C6F238',
        // Champagne gold for the dark hero and navbar
        gold: {
          DEFAULT: '#C9A96E',
          light: '#DCC292',
        },
      },
      fontFamily: {
        // Headings: simple, modern and premium
        display: ['Manrope', '"DM Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        // Kept only for the footer wordmark, the CEO signature and philosophy numerals
        serif: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
      },
    },
  },
  plugins: [],
};
