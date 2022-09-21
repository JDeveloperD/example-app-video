import { BLUE_SCALE, COLORS } from '@styles/constants'
import { DefaultTheme } from 'styled-components'

const THEME_DARK: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: COLORS.blue,
    secondary: '#242730',
    accent: '',

    info: BLUE_SCALE[400],
    warning: '#FF7551',
    danger: '#EC5252',
    success: '#22B07D',

    white: '#FFF',
    light: '#FFFFFF',
    gray: '#808191',
    black: '#242730',

    textBody: '#B7B9D2',
    link: '#08A0F7',

    backgroundBody: '#1F1D2B'
  },
  fonts: {
    fontPrimary: 'Poppins',
    fontSecondary: ''
  },
  fontSizes: {
    body: '1rem'
  },
  shadows: {
    small: '',
    default: ''
  }
}

export default THEME_DARK
