/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  darkMode: ["class", "class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#007BFF",
          dark: "#0D6EFD",
        },
        secondary: {
          light: "#6C757D",
          dark: "#ADB5BD",
        },
        accent: "#FFC107",
        success: "#28A745",
        danger: "#DC3545",
        info: "#17A2B8",
        bg: {
          light: "#FFFFFF",
          dark: "#191919",
        },
        card: {
          light: "#F8F9FA",
          dark: "#212529",
        },
        text: {
          primary: {
            light: "#212529",
            dark: "#E9ECEF",
          },
          secondary: {
            light: "#495057",
            dark: "#CED4DA",
          },
          muted: {
            light: "#868E96",
            dark: "#6C757D",
          },
        },
      },
      backgroundColor: {
        light: "#FFFFFF",
        dark: "#191919",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%)",
      },
      screen: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        "4xl": ["2.5rem", "1.25"],
        "3xl": ["2rem", "1.25"],
        "2xl": ["1.75rem", "1.25"],
        xl: ["1.25rem", "1.5"],
        lg: ["1.125rem", "1.5"],
        base: ["1rem", "1.5"],
        sm: ["0.875rem", "1.5"],
      },
      keyframes: {
        "slide-bg": {
          "0%": {
            backgroundPosition: "100% 0",
          },
          "100%": {
            backgroundPosition: "0 0",
          },
        },
      },
      animation: {
        "slide-bg": "slide-bg 5s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    tailwindScrollbar,
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
};
