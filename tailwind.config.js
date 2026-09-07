/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        netflixRed: "#E50914",
        netflixDarkRed: "#B00710",
        netflixRedHover: "#C11119",
        darkSurface: "#161616",
        faqCard: "#2d2d2d",
        faqCardHover: "#414141",
        footerBg: "#0f0f0f",
        footerText: "#b3b3b3",
      },
      fontFamily: {
        sans: [
          '"Nettflix Sans"',
          "Helvetica Neue",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
