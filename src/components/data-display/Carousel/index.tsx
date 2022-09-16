import { Swiper } from 'swiper/react'
import {
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
  SwiperOptions
} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FC, useState } from 'react'
import { Wrapper, Button } from './styled'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from '@components'

interface CarouselProps extends SwiperOptions {
  items: any[]
  render: any,
  className?: string,
}

const Carousel: FC<CarouselProps> = ({
  items,
  render,
  className,
  pagination,
  ...props
}) => {
  const [swiperRef, setSwiperRef] = useState<any>(null)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <Wrapper className={className} pagination={!!pagination}>
      <Swiper
        modules={[
          Pagination,
          Navigation,
          Autoplay,
          FreeMode
        ]}
        pagination={pagination}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        {...props}
      >
        {items.map(render)}
      </Swiper>
      <Button left onClick={() => swiperRef.slidePrev()}>
        <AiOutlineCaretLeft />
      </Button>
      <Button right onClick={() => swiperRef.slideNext()}>
        <AiOutlineCaretRight />
      </Button>
    </Wrapper>
  )
}

export default Carousel
