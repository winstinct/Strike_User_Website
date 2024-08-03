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
          '2xl': '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        },
        gradientBg: 'linear-gradient(180deg, #A967FF0%, #5500C3100%)'
      },
    },
  },
  plugins: [],
}

