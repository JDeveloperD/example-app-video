import { rgba } from 'polished'
import styled from 'styled-components'

const HeadWrapper = styled.header`
  padding: 1rem 0;
  background: ${({ theme }) => {
    return rgba(theme.colors.backgroundBody, 0.8)
  }};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
`

export {
  HeadWrapper
}
