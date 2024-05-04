/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'webkit-fill-available': '-webkit-fill-available',
      },
    },
  },
  plugins: [],
}

