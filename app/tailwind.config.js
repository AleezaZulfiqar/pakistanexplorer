/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // All files inside app directory
    "./pages/**/*.{js,ts,jsx,tsx}",     // All files inside pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // All files inside components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
