/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#24535A',
        night: '#080D0F',
        ink: '#1D3D44',
        mist: '#EEF5F1',
        surface: '#2F6970',
        'surface-alt': '#3B7A7F',
        cream: '#F8F4EC',
        copper: '#D9785D',
        'copper-dim': '#B85D48',
        'copper-glow': '#ED9A7F',
        muted: '#637D7C',
        'muted-light': '#6F8987',
        'muted-on-dark': '#D0DEDA',
        line: '#C2D3CE',
        'line-dark': '#668589',
        'line-light': '#D8DDD5',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['"Epilogue"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}