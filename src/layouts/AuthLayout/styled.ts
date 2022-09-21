import { CONTAINER_MAX_WIDTHS, MEDIA_BREAKPOINTS } from '@styles/constants'
import { rgba } from 'polished'
import styled from 'styled-components'

const AuthWrapper = styled.div`
  background-image: url('/img/register_bg_2.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  width: 100%;
  min-height: 100vh;

  ${MEDIA_BREAKPOINTS.desktop} {
    background-size: cover;
  }
`

const AuthHeader = styled.header`
  padding: 1rem 0;
  background: ${({ theme }) => {
    return rgba(theme.colors.backgroundBody, 0.4)
  }};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`

const AuthFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
`

const AuthContent = styled.main`
  width: 100%;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${CONTAINER_MAX_WIDTHS.sm};
  margin: 0 auto;
`

export {
  AuthHeader,
  AuthWrapper,
  AuthFooter,
  AuthContent
}
