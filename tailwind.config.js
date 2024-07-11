/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        squarePeg: ['"Square Peg"', 'cursive'],
      },
      colors: {
        customDarkGreen: '#005148',
        customLight: '#9C9C9C',
        customDeepGreen: '#07512B',
        customTextGray: '#D5CFCF',
        customBlue: '#2427AB',
        customLightBlue: '#4285F4',
        customYellow: '#FBBC05',
        customYellowB: '#D3A10F',
        customBrightYellow: '#FBBC05'
      },
      width: {
        '1/5': '20%',
        '3/10': '30%',
      },
      maxWidth: {
        '1700px': '1700px',
      },
      borderRadius: {
        '50px': '50px', // custom 50px border radius
        '35px': '35px',  // custom 35% border radius
        'tl-45px': '45px 0 0 0', // top-left corner
      },
      fontSize: {
        '180px': '180px',
      },
      lineHeight: {
        '156px': '156px',
      },
      height: {
        '696px': '696px',
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Poppins", "sans-serif"],
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
