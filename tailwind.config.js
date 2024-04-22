/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#3C5B6F',
          200: '#153448',
        },
        'secondary': {
          100: '#DFD0B8',
          200: '#948979',
        },
      },
      fontFamily: {
        'body': ['Nunito', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

