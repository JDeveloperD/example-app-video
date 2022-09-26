import { darken, lighten } from 'polished'
import { createGlobalStyle, css } from 'styled-components'
import { GRAY_SCALE } from './constants'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  
  html {
    scroll-behavior: smooth;
  }
  :focus {
    outline: none;
  }

  #__next {
    min-height: 100vh;
  }

  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      background: ${theme.colors.backgroundBody};
      color: ${theme.colors.textBody};
      font-family: ${theme.fonts.fontPrimary};
      font-size: ${theme.fontSizes.body};
      transition: background 0.2s linear;
    }

    a {
      color: ${theme.colors.link};
      cursor: pointer;

      &:hover {
        color: ${darken(0.15, theme.colors.link)};
      }
    }

    button {
      cursor: pointer;
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.fontPrimary};
    }

    p {
    line-height: 1.8;
    margin-block-start: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-block-start: 0;
    }
    figure {
      margin: 0;
    }
  `}

  .w-0 {
    width: 0 !important;
  }

  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.mode === 'light' ? theme.colors.light : theme.colors.black};
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    /* background: ${({ theme }) => lighten(0.065, theme.colors.light)}; */
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.mode === 'light' ? darken(0.1, '#fff') : lighten(0.25, '#000')};
  }
`
