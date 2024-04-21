/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#176B87',
        accent: '#E8F0F3',
        light: '#FDFEFF'
      }
    }
  },
  plugins: []
}
