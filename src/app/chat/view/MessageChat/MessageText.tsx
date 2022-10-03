import { MessageBackground, MessageHour, MessageText as Text } from './styled'
import { FC } from 'react'
import { formatToTime } from '@utils'
import Typography from '@components/data-display/Typography'

export type MessageChatProps = {
  text: string
  isPrimary: boolean
  date: Date
  sentByName?: string
  className?: string
  onClick?: Function
}

const MessageText: FC<MessageChatProps> = ({
  sentByName,
  text,
  date,
  isPrimary,
  className
}) => {
  return (
    <MessageBackground isPrimary={isPrimary} className={className}>
      {sentByName && !isPrimary && (
        <Typography
          className='px-3 mt-2'
          variant='small'
          as='h6'
          fontWeight={700}
          color={'danger'}
          style={{ marginBottom: '-0.5rem' }}
        >
          {sentByName}
        </Typography>
      )}
      <div className="d-flex gap-1 align-items-end">
        <Text
          variant='small'
          isPrimary={isPrimary}
        >
          {text}
        </Text>

        <MessageHour isPrimary={isPrimary}>
          {formatToTime(date)}
        </MessageHour>
      </div>
    </MessageBackground>
  )
}

export default MessageText
