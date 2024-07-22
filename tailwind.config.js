
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1140px',
      '2xl': '1140px'
    },
    extend: {
      colors: {
        primary: "#EFD871",
        dark: "#1B2559",
        light: "#68769F",
        'light-gray': '#f0f0f0',
        'light-blue': '#e0f7fa',
        'light-green': '#d0f0c0',
        'soft-pink': '#f8bbd0',
        'warm-orange': '#ffcc80',
        'deep-purple': '#b388ff',
        'sky-blue': '#81d4fa',
        'pale-yellow': '#ffff8d',
        'rich-red': '#f44336',
        'deep-teal': '#004d40'
      }
    },
  },
  plugins: [],
}
