import { RESET_UL } from '@styles/mixins'
import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'

const List = styled.ul`
  ${RESET_UL}
  height: 100vh;
  overflow-y: scroll;
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${({ theme }) => {
    return theme.mode === 'dark'
      ? lighten(0.04, theme.colors.secondary)
      : lighten(0.45, theme.colors.gray)
  }};
`

const Item = styled.li`
`

const ChatItemWraper = styled.button`
  display: flex;
  width: 100%;
  gap: 10px;
  text-decoration: none;
  padding: 0.6rem;
  border-radius: 0.5rem;
  text-align: start;
  border-style: none;
  background: transparent;
  position: relative;
  transition: 0.3s;

  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 50%;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    z-index: 2;
    border-radius: 1rem;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: 0;
  }

  &:hover {
    background: ${({ theme }) => {
      return theme.mode === 'light'
      ? theme.colors.light
      : theme.colors.secondary
    }};

    &::before {
      opacity: 1;
    }
  }
`

const ChatItemPhoto = styled.div<{
  active?: boolean
}>`
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 50%;
  }

  ${({ active, theme }) => active && css`
    &::after {
      content: '';
      display: block;
      width: 13px;
      height: 13px;
      background-color: ${theme.colors.success};
      border-radius: 50%;
      bottom: 0px;
      right: 0px;
      position: absolute;
      border: 2px solid ${({ theme }) => theme.colors.backgroundBody};
    }
  `}
`

const ChatInfo = styled.div`
  width: calc(100% - 60px);
`

const ChatItemHeadDetail = styled.div`
  display: flex;
  width: 100%;

  h5 {
    width: calc(100% - 60px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  time {
    width:  60px;
    text-align: end;
  }
`

const ChatItemBody = styled.div``

export {
  List,
  Item,
  ChatItemWraper,
  ChatItemPhoto,
  ChatInfo,
  ChatItemHeadDetail,
  ChatItemBody
}
