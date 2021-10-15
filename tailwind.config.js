module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "gradient-from": "#008b79",
        "gradient-to": "#1180a1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
