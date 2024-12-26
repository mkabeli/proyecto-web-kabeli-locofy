/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightseagreen: {
          "100": "#40a192",
          "200": "#3fa192",
          "300": "rgba(63, 161, 146, 0.65)",
        },
        darkslateblue: {
          "100": "#3b3b77",
          "200": "#333366",
          "300": "rgba(86, 86, 175, 0.85)",
          "400": "rgba(86, 86, 175, 0.5)",
        },
        lightgray: "#ccc",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "underline-01-medium-01-14": "Inter",
        nunito: "Nunito",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
