/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sp-dark': '#1A1A1A',
        'sp-black': '#0F0F0F',
        'sp-red': '#FF0000',
        'sp-white': '#FFFFFF',
        'sp-gray': '#2A2A2A',
        'sp-tribal': '#2A2A2A',
      },
      fontFamily: {
        'trade': ['Trade Gothic', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'trade-h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'trade-h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'trade-h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'trade-body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
