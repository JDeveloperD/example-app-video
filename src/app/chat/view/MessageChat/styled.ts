import { FLEX_CENTER } from '@styles/mixins'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import { Typography } from '@components'
import { MEDIA_BREAKPOINTS } from '@styles/constants'

const MAX_WITH_SX_MESSAGE = '250px'
const MAX_WITH_SM_MESSAGE = '350px'
const MAX_WITH_MD_MESSAGE = '450px'

const MessageBackground = styled.div<{ isPrimary: boolean }>`
  width: fit-content;
  max-width: ${MAX_WITH_SX_MESSAGE};

  ${MEDIA_BREAKPOINTS.mobile} {
    max-width: ${MAX_WITH_SM_MESSAGE};
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    max-width: ${MAX_WITH_MD_MESSAGE};
  }

  ${({ isPrimary, theme }) => {
    return isPrimary
    ? css`
      background: ${theme.colors.primary};
      border-radius: 0.75rem 0.75rem 0.25rem 0.75rem;
    `
    : css`
      background: ${theme.mode === 'light' ? theme.colors.light : rgba('#fff', 0.1)};
      border-radius: 0.75rem 0.75rem 0.75rem 0.25rem;
    `
  }}
`

const MessageText = styled(Typography)<{ isPrimary: boolean }>`
  padding: 0.75rem 0 0.75rem 1rem;
  color: ${({ isPrimary, theme }) => {
    return isPrimary
    ? theme.colors.light
    : theme.mode === 'light' ? theme.colors.gray : theme.colors.light
  }};
`

const MessageHour = styled.span<{ isPrimary: boolean }>`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 300;
  margin-right: 0.75rem;
  line-height: 2;
  color: ${({ isPrimary, theme }) => {
    return isPrimary
    ? rgba(theme.colors.light, 0.85)
    : theme.mode === 'light' ? theme.colors.gray : rgba(theme.colors.light, 0.5)
  }};
`

const MessagesList = styled.div<{ isPrimary?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${({ isPrimary }) => {
    return isPrimary
    ? css`
      align-items: flex-end;

      ${MessageBackground} {
        border-radius: 0.75rem 0.25rem 0.25rem 0.75rem;

        &:first-child {
          border-top-right-radius: 0.75rem;
        }

        &:last-child {
          border-bottom-right-radius: 0.75rem;
        }
      }
    `
    : css`
      ${MessageBackground} {
        border-radius: 0.25rem 0.75rem 0.75rem 0.25rem;

        &:first-child {
          border-top-left-radius: 0.75rem;
        }

        &:last-child {
          border-bottom-left-radius: 0.75rem;
        }
      }
    `
  }}
`

const MessageListWithUser = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 0.5rem;

  ${MessagesList} {
    width: calc(100% - 50px);
  }
`

const MessageFigure = styled(MessageBackground)`
  
  padding: 0.26rem;

  img {
    width: 100%;
    object-fit: contain;
    max-height: 200px;
    border-radius: inherit;
  }
`

// audio
const MessageAudioBackground = styled(MessageBackground)`
  display: flex;
  gap: 1rem;
`

const ButtonPlayAudio = styled.button`
  border-style: none;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  width: 45px;
  height: 45px;
  ${FLEX_CENTER}
  border-radius: 50%;
`

export {
  MessageBackground,
  MessageListWithUser,
  MessageText,
  MessagesList,
  MessageHour,
  MessageFigure,
  ButtonPlayAudio,
  MessageAudioBackground
}
