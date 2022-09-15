import { DefaultTheme } from 'styled-components'

const MODE_DARK: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: '#08A0F7',
    secondary: '#242730',
    accent: '',

    info: '',
    warning: '#FF7551',
    danger: '#EC5252',
    success: '#22B07D',

    light: '#FFFFFF',
    gray: '#808191',

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

export default MODE_DARK
