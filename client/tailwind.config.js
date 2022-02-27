module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          1000: '#160309',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],      
    },
  },
  plugins: [],
}
