module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: {
          150: '#fcf4fc',
          450: '#ebbfeb',
          550: '#bb2abbX',
          600: '#C026D3',
          650: '#7d267d',
          850: '#660066',
          1050: '#4e004e',
        },
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
