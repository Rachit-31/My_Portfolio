/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222222',    // Set your primary color
        secondary: '#7B7B7B',  // Set your secondary color
        tertiary: '#F8F8F8',   // Set your tertiary color
      },
    },
  },
  plugins: [],
}