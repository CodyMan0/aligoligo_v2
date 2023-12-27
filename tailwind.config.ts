
import type { Config } from 'tailwindcss'

import { backgroundImage, borderRadius, boxShadow, colors, fontSizes,spacing } from './styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
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
          'flash-code': {
            '0%': { backgroundColor: 'rgba(63, 207, 142, 0.1)' },
            '100%': { backgroundColor: 'transparent' },
          },
          slideIn: {
            '0%, 100%': { transform: 'translate3d(0,0,0)' },
          },
     
          spin: {
            '0%, 100%': { transform: 'rotate(360deg)' },
          },
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          'pulse-radar': {
            '0%': { transform: 'scale(0)', opacity: '0' },
            '50%': { opacity: '0.8' },
            '100%': { transform: 'scale(100%)', opacity: '0' },
          },
        },
        animation: {
          'flash-code': 'flash-code 1s forwards',
          'flash-code-slow': 'flash-code 2s forwards',
          spin: 'spin 1s both infinite',
          marquee: 'marquee 35s linear infinite',
          'pulse-radar': 'pulse-radar 3s linear infinite',
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
