import Image from 'next/image'
import { FC } from 'react'
import { SizeAvatar, Wrapper, Verified } from './avatar.styled'
import { BsCheckLg } from '@components'

export type AvatarProps = {
  src?: string
  size?: SizeAvatar,
  verified?: boolean
}

const Avatar: FC<AvatarProps> = ({ src, size, verified }) => {
  return (
    <Wrapper size={size}>
      <Image
        src={src ?? '/img/avatar/avatar1.png'}
        alt=""
        layout="fill"
        objectFit='cover'
      />
      {verified && (
        <Verified>
          <BsCheckLg />
        </Verified>
      )}
    </Wrapper>
  )
}

export default Avatar
