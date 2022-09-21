import { MEDIA_BREAKPOINTS } from '@styles/constants'
import styled, { css } from 'styled-components'

const SidebarWrapper = styled.aside<{ show: boolean }>`
  overflow: hidden;
  height: auto;
  max-height: 0;
  transition: max-height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${({ show }) => show && css`
    transition: max-height 0.75s cubic-bezier(0.24, 0.67, 0.81, 1.06);
    will-change: unset;
    max-height: 100vh;
    overflow-y: scroll;
  `}

  ${MEDIA_BREAKPOINTS.tablet} {
    max-height: initial;
  }
`

const SidebarOptions = styled.div``

const SidebarMenu = styled.div`
  /* height: 0;
  overflow: hidden; */
`

export {
  SidebarWrapper,
  SidebarOptions,
  SidebarMenu
}
