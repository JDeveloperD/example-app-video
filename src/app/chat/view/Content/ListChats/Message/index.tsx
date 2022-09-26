import { Typography } from '@components'
import { FC } from 'react'
import { MessageContent } from './styled'

type MessageProps = {
  text: string
  isMessageFromTheLoggedInUser: boolean
}

const MessageDefault: FC<MessageProps> = ({ text, isMessageFromTheLoggedInUser }) => {
  return (
    <MessageContent
      isPrimary={isMessageFromTheLoggedInUser}
    >
      <Typography
        variant="small"
        as="small"
        color={isMessageFromTheLoggedInUser ? 'light' : 'gray'}
      >{text}</Typography>
      <Typography
        variant="small"
        as="small"
        color={isMessageFromTheLoggedInUser ? 'light' : 'gray'}
        className="text-nowrap">10:03 AM</Typography>
    </MessageContent>
  )
}

export default MessageDefault
