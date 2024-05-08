import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{ts, tsx}',
    './components/**/*.{ts, tsx}',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

