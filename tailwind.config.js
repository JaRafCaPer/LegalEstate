module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        beige: '#E1D9D0',
        lightGray: '#5e747f',
        mediumGray: '#BDBDBC',
        darkGray: '#333333',
        textOnBeige: '#5e747f',
        textOnLightGray: '#E1D9D0',
      },
      fontFamily: {
        asen: ['Asen Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
