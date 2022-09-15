import { useCallback, useState } from 'react'

const useToggle = (defaultState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(defaultState)

  const toggle = useCallback(() => {
    setState(prev => !prev)
  }, [state])

  return [state, toggle]
}

export default useToggle
