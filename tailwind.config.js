/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fed7aa',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        secondary: {
          100: '#fce7f3',
          500: '#ec4899',
          600: '#db2777',
        },
        accent: {
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'celebration': 'celebration 0.6s ease-in-out',
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        celebration: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1) rotate(-5deg)' },
          '50%': { transform: 'scale(1.2) rotate(5deg)' },
          '75%': { transform: 'scale(1.1) rotate(-2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}