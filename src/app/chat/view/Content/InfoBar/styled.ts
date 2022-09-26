import styled from "styled-components";

const Wrapper = styled.header`
  background: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.light
    : theme.colors.secondary
  }};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`

export {
  Wrapper
}
