/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FFF8F0', dark: '#F5EBE0' },
        brown: { DEFAULT: '#b5651d', dark: '#8B4513', light: '#D4A574' },
        gold: { DEFAULT: '#C8A951', light: '#E8D5A3' },
        charcoal: '#2C2C2C',
        'warm-gray': '#6B5B4E',
        blush: '#F5C6C6',
        sage: '#A8B5A0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
