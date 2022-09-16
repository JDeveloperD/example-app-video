import THEME_DARK from '@styles/mode/dark'
import THEME_LIGHT from '@styles/mode/light'
import { setLocalStorage } from '@utils'
import { useState } from 'react'
import { DefaultTheme } from 'styled-components'

const useToggleTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(THEME_LIGHT)

  const toggleTheme = () => {
    const ob = theme.mode === 'light' ? THEME_DARK : THEME_LIGHT
    // set localstorage
    setLocalStorage('theme', ob)
    // set state
    setTheme(ob)
  }

  return {
    isThemeLight: theme.mode === 'light',
    theme,
    toggleTheme,
    setTheme
  }
}

export default useToggleTheme
