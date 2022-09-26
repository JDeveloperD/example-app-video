import { Typography } from "@components"
import Image from "next/image"
import styled from "styled-components"

const ImgWrapper = styled.div<{
  isPrimary: boolean
}>`
  background: ${({ isPrimary, theme }) => {
    return isPrimary
    ? theme.colors.primary
    : theme.mode === 'light'
      ? theme.colors.light
      : theme.colors.secondary
  }};
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
  }
`

const MessageTypeImage = ({
  src,
  text,
  isMessageFromTheLoggedInUser
}) => {
  return (
    <ImgWrapper isPrimary={isMessageFromTheLoggedInUser}>
      <img src={src} />
      {text && (
        <Typography
          variant='small'
          className="p-2"
          color={isMessageFromTheLoggedInUser ? 'light' : 'gray'}
        >{text}</Typography>)}
    </ImgWrapper>
  )
}

export default MessageTypeImage
