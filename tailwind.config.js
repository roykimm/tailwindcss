module.exports = {
  purge: {
    // enabled : true,
    // content : ["./src/**/*.js", "./index.html"]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center : true,
      padding: '2rem'
    },
    extend : {
      colors : {
        brand : {
          light : "#3fbaeb",
          DEFAULT : "#0fa9e6",
          dark : "#0c87b8"
        }
      },
      fontFamily : {
        headline : "Poppins, sans-serif"  // font-head line
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
