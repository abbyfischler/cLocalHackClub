module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'phantom-sans': 'Phantom Sans, sans-serif',
      },
      colors: {
        'red': '#ec3750',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
