/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1929',
          dark: '#1a1a2e',
        },
        purple: {
          DEFAULT: '#533483',
          dark: '#3F2E50',
        },
        orange: {
          DEFAULT: '#FF6B35',
          gold: '#F7931E',
          red: '#E06C3F',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0A1929 0%, #1a1a2e 50%, #533483 100%)',
      },
    },
  },
  plugins: [],
}

