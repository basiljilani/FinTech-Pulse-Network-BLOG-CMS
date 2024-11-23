/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src-2-frontend/**/*.{js,ts,jsx,tsx}'
  ], // Updated to include `src-2-frontend` folder
  theme: {
    extend: {}, // You can customize your theme here if needed
  },
  plugins: [], // Add Tailwind plugins here if required
};
