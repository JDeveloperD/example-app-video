import { formatToTime } from '@utils'
import { FC } from 'react'
import { MessageFigure, MessageHour } from './styled'

type MessageImageProps = {
  date: Date
  isPrimary: boolean
  src: string
}

const MessageImage: FC<MessageImageProps> = ({
  date,
  isPrimary,
  src
}) => {
  return (
    <MessageFigure isPrimary={isPrimary}>
      <img src={src} />
      <MessageHour as='p' isPrimary={isPrimary} className='text-end mb-0'>
        {formatToTime(date)}
      </MessageHour>
    </MessageFigure>
  )
}

export default MessageImage
