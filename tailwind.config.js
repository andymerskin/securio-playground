const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        lime: colors.lime,
        teal: colors.teal,
        blueGray: colors.blueGray,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
