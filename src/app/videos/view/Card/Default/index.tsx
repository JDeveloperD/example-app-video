import { Avatar, Typography } from '@components'
import Image from 'next/image'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { Info, Wrapper, Time, Thumbnail, Author } from './styled'

export type VideoCardDefaultProps = {
  authorName: string
  title: string
  time: string
  thumbnail: string
}

const PostCardDefault: FC<VideoCardDefaultProps> = ({
  authorName,
  title,
  time,
  thumbnail
}) => {
  const { mode } = useTheme()

  return (
    <Wrapper>
      <Thumbnail>
        <Image
          src={thumbnail}
          layout="fill"
          priority
        />
      </Thumbnail>
      <Time>{time}</Time>
      <Info>
        <Author>
          <Avatar verified />
        </Author>
        <Typography
          className="mb-3"
          variant="small"
        >
          {authorName}
        </Typography>
        <Typography
          as='a'
          className="d-block mb-3"
          fontWeight={600}
          color={mode === 'light' ? 'textBody' : 'light'}
        >
          {title}
        </Typography>
        <Typography
          variant="small"
        >
          53K vistas  •  hace 2 semanas
        </Typography>
      </Info>
    </Wrapper>
  )
}

export default PostCardDefault
