module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: "Barlow, sans-serif",
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
      },
      colors: {
        dark: "#0B0D17",
        primary: "#D0D6F9",
        "in-between": "rgba(151,151,151,.4)",
      },
    },
  },
  plugins: [],
};
