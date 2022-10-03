import { Avatar, BsThreeDotsVertical, Button, FiSearch, Typography } from '@components'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { ChatBoxHeaderBackground } from './styled'

export type BoxHeaderProps = {
  name: string
  photo: string
  typeGroup: 'PRIVATE' | 'GROUP'
  totalMembers?: number
}

const BoxHeader: FC<BoxHeaderProps> = ({
  name,
  photo,
  typeGroup,
  totalMembers
}) => {
  const { mode } = useTheme()

  return (
    <ChatBoxHeaderBackground>
      <div className="d-inline-flex gap-2 align-items-center">
        <Avatar size="sm" src={photo} />
        <div>
          <Typography
            fontWeight={600}
            variant="small"
            color={mode === 'light' ? 'secondary' : 'light'}
          >{name}</Typography>
          <Typography variant="small" color="gray">
            {typeGroup === 'GROUP' && `${totalMembers} miembro(s)`}
            {typeGroup === 'PRIVATE' && 'Online'}
          </Typography>
        </div>
      </div>
      <div>
        <Button variant="icon" color="gray">
          <FiSearch />
        </Button>
        <Button variant="icon" color="gray">
          <BsThreeDotsVertical />
        </Button>
      </div>
    </ChatBoxHeaderBackground>
  )
}

export default BoxHeader
