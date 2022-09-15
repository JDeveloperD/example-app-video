import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark',
    colors: {
      primary: string,
      secondary: string,
      accent: string,

      info: string,
      warning: string,
      danger: string,
      success: string

      light: string,
      gray: string,

      textBody: string,
      link: string,

      backgroundBody: string,
    },
    fonts: {
      fontPrimary: string,
      fontSecondary: string
    },
    fontSizes: {
      body: string
    },
    shadows: {
      small: string,
      default: string
    }
  }
}

export type ThemeColor =
'primary'| 'secondary'| 'accent'| 'info'|
'warning'| 'danger'| 'success'|
'light'| 'gray'|
'textBody'| 'link'|
'backgroundBody'
