/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        "backdrop": "#3E3E3E",
        "soft": "#BEBEBE",
        "link-inactive": "#B9B7B7"
      }
    },
  },
  plugins: [
    require('tailwind-children'),
    ]
}