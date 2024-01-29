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
        'gamja-flower': ['"Gamja Flower"', 'cursive'],
        'single-day': ['"Single Day"', 'cursive']
      },
      height: {
        "1/8": "12.5%",
        "5p": "7%"
    },
      margin: {
        "50p": "24%"
      },
      width: {
        "3/10": "29%",
        "4/10": "40%",
      },
  },
  plugins: [],
}
}
