import { Switch, Typography } from '@components'
import { useTheme } from './ThemeContext'

const SwitchTheme = () => {
  const { toggleTheme, isThemeLight } = useTheme()

  return (
    <div className='d-flex align-items-center gap-4'>
      <Switch checked={!isThemeLight} onChange={toggleTheme}/>
      <Typography variant='small'>
        {isThemeLight ? 'Light' : 'Dark'} mode
      </Typography>
    </div>
  )
}

export default SwitchTheme
