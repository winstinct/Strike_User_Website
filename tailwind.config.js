const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'serif': ['Inter', 'sans-serif']
        },
        boxShadow: {
          '2xl': '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        },
        gradientBg: 'linear-gradient(180deg, #A967FF0%, #5500C3100%)'
      },
    },
  },
  plugins: [],
});

