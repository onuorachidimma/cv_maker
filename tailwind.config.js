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
        customBrightYellow: '#FBBC05',
        customLightGreen: '#77CBA22E',
        customGreen: '#77CBA2',
        customLightSeaGreen: '#E4F5EC',
        customSeaGreen: '#77CBA2',
      },
      width: {
        '1/5': '20%',
        '3/10': '30%',
        '337px': '337px',
        '297px': '297px',
        '986px': '986px',
        '840px' : '840px',
        '134px' : '134px',
      },
      maxWidth: {
        '1700px': '1700px',
      },
      borderRadius: {
        '50px': '50px', // custom 50px border radius
        '35px': '35px',  // custom 35% border radius
        'tl-45px': '45px 0 0 0', // top-left corner
        'tlbr-44px': '44px 0 44px 0', // top-left corner
        'tl-44px': '44px 0 0 0', // top-left corner
        'br-44px': '0 0 44px 0', // top-left corner
      },
      fontSize: {
        '150px': '150px',
      },
      lineHeight: {
        '156px': '156px',
        '70px': '70px'
      },
      height: {
        '696px': '696px',
        '61px' : '61px'
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
