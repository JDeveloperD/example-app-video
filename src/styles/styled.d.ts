import 'styled-components'

export type Colors = {
  primary: string,
  secondary: string,
  accent: string,

  info: string,
  warning: string,
  danger: string,
  success: string

  white: string,
  light: string,
  gray: string,
  black: string,

  textBody: string,
  link: string,

  backgroundBody: string,
}

export type Color = keyof Colors

export type ThemeSize = 'sm' | 'md' | 'lg' // tamaños

export type ThemeMode = 'light' | 'dark' // modos de tema

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode,
    colors: Colors,
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
