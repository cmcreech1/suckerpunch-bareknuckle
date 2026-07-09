/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sp-dark': '#1a1a1a',
        'sp-black': '#0f0f0f',
        'sp-red': '#ff0000',
        'sp-white': '#ffffff',
        'sp-gray': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
