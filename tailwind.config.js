/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          bebas: ['var(--bebas-neue)'],
        },
      },
      colors: {
        aqua: '#64EEBC',
        white: '#FFF',
        black: '#242424',
        red: '#F00',
      },
    },
  },
  plugins: [],
}
