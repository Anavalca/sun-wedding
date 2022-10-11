/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      'sky-blue': '#d8ecf3',
      'sea-blue': '#5fd1d1',
      'sand-yellow': '#ede1c3',
      'jungle-green': '#027c7a',
      'grey':'#4b4e50',
      'yellow-opacity':'#fcf5e8',
      'white-opacity':'#ffffffa1',
      'red':"#ff5b5b",
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}