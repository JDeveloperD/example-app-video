import { BLUE_SCALE, COLORS } from '@styles/constants'
import { DefaultTheme } from 'styled-components'

const THEME_LIGHT: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: COLORS.blue,
    secondary: '#242730',
    accent: '',

    info: BLUE_SCALE[400],
    warning: '#FF7551',
    danger: '#EC5252',
    success: '#22B07D',

    white: '#FFF',
    light: '#f8f8f8',
    gray: '#808191',
    black: '#000',

    textBody: '#808191',
    link: '#08A0F7',

    backgroundBody: '#FFF'
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

export default THEME_LIGHT
