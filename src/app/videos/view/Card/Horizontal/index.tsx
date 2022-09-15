import { Avatar, Typography } from '@components'
import { AllHTMLAttributes, FC } from 'react'
import { Wrapper } from './styled'

export type VideoCardHorizontalProps = AllHTMLAttributes<HTMLDivElement> & {
  title: string,
  authorName: string
  thumbnail: string
}

const VideoCardHorizontal: FC<VideoCardHorizontalProps> = ({
  title,
  authorName,
  className,
  thumbnail,
  style
}) => {
  return (
    <Wrapper
      className={className}
      style={style}
      background={thumbnail}
    >
      <Typography
        variant="headline"
        color="light"
        fontWeight={700}
        size={3}
        as="h2"
      >{title}</Typography>
      <div className="d-flex gap-3">
        <Avatar verified />
        <div>
          <Typography
            fontWeight={'bold'}
            color='light'
            className="mb-0"
          >{authorName}</Typography>
          <Typography
            color='light'
            variant="small"
          >
            53K vistas  •  hace 2 semanas
          </Typography>
        </div>
      </div>
    </Wrapper>
  )
}

export default VideoCardHorizontal
