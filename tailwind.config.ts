import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/mvp-banner.png')",
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'normal'],
        barlow: ['Barlow', 'normal'],
      },
      backgroundColor: {
        pizza_yellow: '#FDC913',
        pizza_gray: '#5F5F5F',
        pizza_red: '#CE2829',
      },
      colors: {
        pizza_yellow: '#FDC913',
        pizza_gray: '#5F5F5F',
      },
      width: {
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        full: '100%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        '2/3': '66.666667%',
        pizza: '50%',
      },
    },
  },
  plugins: [],
}
export default config
