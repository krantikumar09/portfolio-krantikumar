/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "Arial", "sans-serif"],
      },
      colors: {
        solidHeadingLight: "#42446E",
        solidHeadingDark: "#CCCCCC",
        contentLight: "#A7A7A7",
        contentDark: "#666666",
        buttonText: "#018C0F",
        ButtonSuccess: "#D7FFE0",
        darkMode: "#191919",
        lightMode: "#fff",
      },
      backgroundColor: {
        darkMode: "#191919",
        lightMode: "#fff",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%)",
      },
    },
  },
  plugins: [ tailwindScrollbar],
};
