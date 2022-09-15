import styled from 'styled-components'
import { FLEX_CENTER } from '@styles/mixins'

const SectionWrapper = styled.section`
  aspect-ratio: 16/5;
`

const LoaderSection = styled.div`
  ${FLEX_CENTER}
  width: 100%;
  height: 90%;
`

export {
  SectionWrapper,
  LoaderSection
}
