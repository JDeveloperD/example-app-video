import { CONTAINER_MAX_WIDTHS, MEDIA_BREAKPOINTS } from '@styles/constants'
import styled from 'styled-components'

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    width: 100%;
    min-height: 100vh;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    flex-direction: row;
  }
`
const LeftSection = styled.div`
  & > div {
    max-width: ${CONTAINER_MAX_WIDTHS.sm};
    margin: 0 auto;
  }
`

const RightSection = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  width: 100%;

  ${MEDIA_BREAKPOINTS.laptop} {
    display: block;
  }
`

export {
  AuthWrapper,
  LeftSection,
  RightSection
}
