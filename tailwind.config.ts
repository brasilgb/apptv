import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'solar-blue-dark': '#154295',
        'solar-blue-light': '#29ABE2',
        'solar-yellow-dark': '#F18800',
        'solar-yellow-light': '#FFD100',
        'solar-gray-dark': '#F1F1F1',
        'solar-gray-middle': '#F8F8F8',
        'solar-gray-light': '#FAFAFA',
        'solar-orange-middle': '#F5B025',
        'solar-orange-dark': '#EC6608',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'solar-image': "url('/images/wallpaper.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
