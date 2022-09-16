import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.article`
  background: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.light
    : theme.colors.black
  }};
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
`

const Thumbnail = styled.figure`
  position: relative;
  width: 100;
  padding-bottom: 65%;
`

const Info = styled.div`
  padding: 1.75rem 1.5rem 1.5rem 1.5rem;
  position: relative;

  a:hover {
    color: ${({ theme }) => theme.mode === 'dark' && theme.colors.light};
  }
`

const Time = styled.time`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => rgba(theme.colors.secondary, 0.5)};
  border-radius: 7px;
  color: white;
  padding: 2px 12px;
  font-size: 10px;
`

const Author = styled.div`
  position: absolute;
  top: -25px;
  right: 1.5rem;
`

export {
  Wrapper,
  Info,
  Time,
  Thumbnail,
  Author
}
