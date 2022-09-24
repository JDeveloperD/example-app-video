import {
  Avatar,
  BiChevronDown,
  Typography,
  BsBellFill,
  Badge,
  BiChevronUp
} from '@components'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import DropDown from './DropDown'
import { AccountWrapper, ButtonToggle } from './styled'

const AuthAccountInfo = () => {
  const { data: session } = useSession()
  const { mode } = useTheme()
  const [show, setShow] = useState(false)

  if (!session || !session.user) {
    return null
  }

  const handleBlur = (e: any) => {
    // firefox onBlur issue workaround
    if (e.nativeEvent.explicitOriginalTarget &&
        e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
      return
    }

    if (show) {
      setTimeout(() => {
        setShow(false)
      }, 200)
    }
  }

  return (
    <AccountWrapper>
      <div className="position-relative">
        <ButtonToggle
          onClick={() => setShow(prev => !prev)}
          onBlur={handleBlur}
        >
          <Avatar size='sm' src={session.user.image} />
          <Typography variant="small">{session.user.name}</Typography>
          <div>
            {show ? (<BiChevronUp />) : (<BiChevronDown />)}
          </div>
        </ButtonToggle>
        <DropDown
          hidden={show}
          isLight={mode === 'light'}
          name={session.user?.name}
        />
      </div>

      <Badge
        color="danger"
        variant='dot'
        as='button'
        textColor="gray"
        >
          <BsBellFill />
      </Badge>
    </AccountWrapper>
  )
}

export default AuthAccountInfo
