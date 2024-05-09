import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{html, css, js, jsx, ts, tsx}', //fsr not working
    
    //
    './src/routes/*.{js,jsx,ts,tsx}',
    './src/components/*.{js, jsx, ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

