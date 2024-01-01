
import type { Config } from 'tailwindcss'

import { backgroundImage, borderRadius, boxShadow, colors, fontSizes,spacing } from './styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      pretendard: ['Pretendard'],
      insungit: ['InsungIt'],
    },
    extend: {
      colors,
      spacing,
      borderRadius,
      backgroundImage,
      boxShadow,
      fontSizes,
      fontFamily: {
        sans: ['Pretendard', 'Arial', 'sans-serif'],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    screens: {
      375: { max: '375px' },
      390: { max: '390px' },
    },
  },
  plugins: [],
}
export default config
