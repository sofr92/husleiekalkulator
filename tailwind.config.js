/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fbe8de',
          100: '#f4cbbc',
          200: '#eda192',
          300: '#e47b6b',
          400: '#d85542',
          500: '#c63e2b',
          600: '#a4442f',
          700: '#83382b',
          800: '#662e25',
          900: '#51261f'
        }
      }
    }
  },
  plugins: []
};
