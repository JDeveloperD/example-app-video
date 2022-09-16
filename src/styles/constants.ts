export const RED_SCALE = {
  100: '#fef3f3',
  200: '#fbdcdc',
  300: '#f6aeae',
  400: '#f18080',
  500: '#EC5252',
  600: '#e72424',
  700: '#c31515',
  800: '#951010',
  900: '#670b0b'
}

export const BLUE_SCALE = {
  100: '#ceecfd',
  200: '#9cd9fc',
  300: '#6bc6fa',
  400: '#39b3f9',
  500: '#08A0F7',
  600: '#0680c6',
  700: '#056094',
  800: '#034063',
  900: '#022031'
}

export const GREEN_SCALE = {
  100: '#afefd8',
  200: '#84e7c3',
  300: '#59dfaf',
  400: '#2ed79a',
  500: '#22B07D',
  600: '#1e9b6e',
  700: '#16704f',
  800: '#0d4531',
  900: '#093022'
}

export const GRAY_SCALE = {
  100: '#F6F6F7',
  200: '#E9E8EC',
  300: '#DCDAE0',
  400: '#D0CCD4',
  500: '#C3BEC9',
  600: '#B6B0BD',
  700: '#A9A2B1',
  800: '#9C95A6',
  900: '#8F879A',
  1000: '#0B0D17'
}

export const ORANGE_SCALE = {
  100: '#ffdad0',
  200: '#ffc6b7',
  300: '#ffb29d',
  400: '#ff9d84',
  500: '#FF7551',
  600: '#ff4d1e',
  700: '#ea3000',
  800: '#b72600',
  900: '#841b00'
}

export const YELLOW_SCALE = {
  500: '#F2C94C'
}

export const COLORS = {
  blue: BLUE_SCALE[500],
  blueWhite: '#56CCF2',
  purple: '#9B51E0',
  red: RED_SCALE[500],
  orange: '#fd7e14',
  yellow: YELLOW_SCALE[500],
  green: GREEN_SCALE[500],
  white: '#fff',
  black: '#000'
}

export const FONTS = {
  titillium: 'Poppins'
}

export const SHADOWS = {
  sm: '3px 3px 8px 5px rgba(233, 232, 236, 0.3)',
  base: '6px 6px 10px 8px rgba(233, 232, 236, 0.3)'
}

export const FONTS_SIZES = {
  sm: '0.75rem',
  medium: '0.875rem',
  button: '0.9375rem',
  base: '1rem',
  lead: '1.125rem',
  large: '1.5625rem',
  xlarge: '2rem'
}

export const GRID_BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${GRID_BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${GRID_BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${GRID_BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${GRID_BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${GRID_BREAKPOINTS.xxl}px)`
}

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px'
}

export const TRANSITIONS = {
  base: '0.3s ease'
}

export const Z_INDEXS = {
  header: {
    sticky: 500,
    nav: 1000
  },
  modal: {
    overlay: 1500,
    content: 200
  }
}
