/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: '#005148',
        customLight: '#9C9C9C',
        customDeepGreen: '#07512B',
        customTextGray: '#D5CFCF',
        customBlue: '#2427AB',
        customLightBlue: '#4285F4',
      },
      width: {
        '1/5': '20%',
        '3/10': '30%',
      },
      maxWidth: {
        '1700px': '1700px',
      },
      borderRadius: {
        '50px': '50px',
      },
    },
  },
  plugins: [],
}
