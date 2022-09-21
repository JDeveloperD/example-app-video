import { Switch, Typography } from '@components'
import { useTheme } from './ThemeContext'

const SwitchTheme = () => {
  const { toggleTheme, isThemeLight } = useTheme()

  return (
    <div className='d-inline-flex align-items-center gap-3'>
      <Typography variant='small'>
        {isThemeLight ? 'Light' : 'Dark'} mode
      </Typography>
      <Switch checked={!isThemeLight} onChange={toggleTheme}/>
    </div>
  )
}

export default SwitchTheme
