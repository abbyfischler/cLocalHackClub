module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'phantom-sans': 'Phantom Sans, sans-serif',
      },
      backgroundImage: {
        'hero-pattern': "url('images/img_1453.jpg')",
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

