import { Typography } from '@components'
import styled from 'styled-components'

const Wrapper = styled.article<{background: string}>`
  padding: 1.5rem;
  border-radius: 20px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;

  ${Typography} {
    max-width: 400px;
  }
`

export {
  Wrapper
}
