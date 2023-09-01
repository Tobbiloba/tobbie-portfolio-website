/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2545',
        secondary: '#fff',
        neutral: '#134074',
        extralight: '#EEF4ED',
        light: '#8DA9C4',
      },
    },
  },
  plugins: [],
}
