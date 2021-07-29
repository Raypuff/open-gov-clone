module.exports = {
  mode: "jit",
  purge: ["./pages//*.{js,ts,jsx,tsx}", "./components//*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Lato', sans-serif",
      },
      colors: {
        gov: {
          DEFAULT: "#276EF1",
          50: "#FFFFFF",
          100: "#E7EFFD",
          200: "#B7CEFA",
          300: "#87AEF7",
          400: "#578EF4",
          500: "#276EF1",
          600: "#0E55D7",
          700: "#0B42A7",
          800: "#082F77",
          900: "#051C47",
        },
      },
      screens: {
        "1.5xl": "1408px",
      },
      backgroundImage: (theme) => ({
        "public-good": "url('../assets/home-banner.png')",
      }),
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
