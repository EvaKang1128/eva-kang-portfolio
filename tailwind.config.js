/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: '#DCD6FF',
        'lavender-light': '#F1EEFF',
        cream: '#FFF1BF',
        'cream-light': '#FFF9E6',
        sky: '#CDEBFF',
        'sky-light': '#EDF8FF',
        primary: '#6F63D9',
        'primary-dark': '#5046B8',
        ink: '#24242A',
        muted: '#61616C',
        surface: '#FFFFFF',
        canvas: '#FFFEFC',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(58, 54, 99, 0.10)',
        lift: '0 14px 30px rgba(58, 54, 99, 0.14)',
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
