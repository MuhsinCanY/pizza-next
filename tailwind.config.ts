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
      },
    },
  },
  plugins: [],
}
export default config
