import { HTMLAttributes, ReactNode } from 'react'
import { Container as BsContainer } from 'react-bootstrap'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode,
  fluid?: 'md' | 'lg' | 'xl' | 'xxl'
}

const Container = ({ children, fluid, ...props }: ContainerProps) => {
  return (
    <BsContainer fluid={fluid ?? true} {...props}>
      {children}
    </BsContainer>
  )
}

export default Container
