module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#110000",
        "100": "#000",
      },
      white: {
        "50": "#FEF5E7",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "50": "#5F95FE",
        "100": "#39B54A",
      },
      red: {
        "50": "#DB62623D",
        "100": "#DB626226"
      },
    },
    fontFamily: {
      'clash': ["ClashDisplay"],
      'dragon': ["dragonslapper"],
      'vinque': ["vinque"],
      'montserat': ['"Montserrat", sans-serif']
    }
  },
  plugins: [],
}
