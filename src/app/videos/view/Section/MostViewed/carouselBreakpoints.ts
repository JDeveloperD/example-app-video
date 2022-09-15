import { GRID_BREAKPOINTS } from '@styles/constants'
import { SwiperOptions } from 'swiper'

type CarouselBreakpoints = {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
} | undefined

const carouselBreakpoints: CarouselBreakpoints = {
  [GRID_BREAKPOINTS.md]: {
    slidesPerView: 2
  },
  [GRID_BREAKPOINTS.lg]: {
    slidesPerView: 3
  },
  [GRID_BREAKPOINTS.xl]: {
    slidesPerView: 4
  }
}

export default carouselBreakpoints
