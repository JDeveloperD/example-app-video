import { ReactNode } from 'react'
import { Container as BsContainer } from 'react-bootstrap'

type ContainerProps = {
  children: ReactNode,
  fluid?: 'md' | 'lg' | 'xl' | 'xxl'
}

const Container = ({ children, fluid, ...props }: ContainerProps) => {
  return (
    <BsContainer fluid={fluid ?? 'xxl'} {...props}>
      {children}
    </BsContainer>
  )
}

export default Container
