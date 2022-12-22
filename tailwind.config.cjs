/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        discord: "url('./assets/bg.svg')",
      },
      colors: {
        bgPrimary: "#202225",
        bgSecondary: "#2f3136",
        bgTertiary: "#36393f",
        bgQuaternary: "#292b2f",
        txtPrimary: "#b9bbbe",
        txtSecondary: "#dcddde",
        txtTertiary: "#4f545c",
      },
    },
  },
  plugins: [],
}
