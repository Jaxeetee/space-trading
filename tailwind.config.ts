import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    // './src/**/*.tsx', //fsr not working
    // './src/**/*.jsx', //fsr not working
    // './src/**/*.ts', //fsr not working
    // './src/**/*.js', //fsr not working
    
    './src/**/*.{html,js,jsx,ts,tsx}',
    // // this is working
    // './src/routes/*.{js, jsx, ts, tsx}',
    // './src/components/*.{js, jsx, ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

