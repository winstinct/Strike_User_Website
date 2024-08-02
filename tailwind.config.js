/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          inter: ["Inter", "sans-serif"]
        },
        boxShadow: {
          '3xl': '0px 0px 8px 0px rgba(0, 0, 0, 0.25)',
          '2xl': '0px 0px 5px 0px rgba(0, 0, 0, 0.10)',
          '6xl': 'rgba(0, 0, 0, 0.35) 10px 0 5px -2px'
        },
        gradientBg: 'linear-gradient(180deg, #A967FF0%, #5500C3100%)'
      },
    },
  },
  plugins: [],
}

