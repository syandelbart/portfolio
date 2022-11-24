/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#0e7490",
        "background": "#222020",
        "default": "#f5f5f5",
        "nav-background": "#222020",
        "nav-text": "#ffffff",
        "footer-background": "#222020",
        "footer-text": "#ffffff",
        "backdrop": "#b0b0b0",
        "backdrop-dark": "#3E3E3E",
        "soft": "#BEBEBE",
        "link-inactive": "#212121",
        "link-inactive-dark": "#B9B7B7",
      }
    },
  },
  plugins: [
    require('tailwind-children'),
    ]
}