import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray500: '#8d8d99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      xs: '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
