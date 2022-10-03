import { FC } from 'react'
import { ButtonPlayAudio, MessageAudioBackground, MessageHour } from './styled'
import { BsFillPlayFill } from '@components'
import { formatToTime } from '@utils'

type MessageAudioProps = {
  isPrimary: boolean
  date: Date
  src: string
}
const MessageAudio: FC<MessageAudioProps> = ({
  isPrimary,
  date,
  src
}) => {
  return (
    <MessageAudioBackground isPrimary={isPrimary} className='p-2'>
      <ButtonPlayAudio>
        <BsFillPlayFill />
      </ButtonPlayAudio>
      <div className='d-flex align-items-end'>
        <div id="waveform" />
        <div className='d-flex justify-content-between'>
          <MessageHour isPrimary={isPrimary}>
            {'01:30'}
          </MessageHour>
          <MessageHour isPrimary={isPrimary}>
            {formatToTime(date)}
          </MessageHour>
        </div>
      </div>
    </MessageAudioBackground>
  )
}

export default MessageAudio
