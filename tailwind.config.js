/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans SC', 'sans-serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        study1: {
          "primary": "#B9AEFF",
          "secondary": "#51459f",
          "accent": "#9d3ebc",
          "neutral": "#23233f",
          "base-100": "#1B1C30",
          "info": "#B9AEFF",
          "success": "#4cdcac",
          "warning": "#f8a72e",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

