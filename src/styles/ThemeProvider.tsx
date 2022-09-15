import { FC, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyles, MODE_DARK } from '@styles'

const ThemeProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <StyledThemeProvider theme={MODE_DARK}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
