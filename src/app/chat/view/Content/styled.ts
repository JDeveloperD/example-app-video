import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
`

const Content = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0 0.5rem;

  &:hover {
    overflow-y: scroll;
    padding-right: 0;
  }
`

export {
  Wrapper,
  Content
}
