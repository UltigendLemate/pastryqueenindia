/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
        ProzaLibre: ["Proza Libre", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Quattrocento: ["Quattrocento", "serif"],
        Lustria: ['Lustria', "serif"],
        mon : ['Montserrat', "sans-serif"],
        pop : ['Poppins', "sans-serif"],
      },
      colors: {
        primary: "#689A9B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
