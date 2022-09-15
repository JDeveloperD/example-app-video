import { Carousel, Spinner, Typography } from '@components'
import { VideoCardDefault } from '@app/videos'
import { SwiperSlide } from 'swiper/react'
import carouselBreakpoints from './carouselBreakpoints'
import { HTMLAttributes, useEffect, useState } from 'react'
import { SectionWrapper, LoaderSection } from './styled'
import Video from '@app/videos/domain/Video'

type VideoSectionMostViewedProps = HTMLAttributes<HTMLElement> & {
  mostViewed: Video[]
}

const VideoSectionMostViewed = ({
  mostViewed = [],
  ...props
}: VideoSectionMostViewedProps) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <SectionWrapper {...props}>
      <Typography
        color='light'
        variant='headline'
        as='h3'
        fontWeight={300}
        size={3}
        className='mb-3'
      >
        Más Vistos
      </Typography>

      {isLoading && (
        <LoaderSection>
          <Spinner />
        </LoaderSection>
      )}

      {!isLoading && mostViewed.length > 0 && (
        <Carousel
          items={mostViewed}
          spaceBetween={10}
          slidesPerView={1.2}
          autoplay
          allowTouchMove={false}
          pagination={{
            clickable: true
          }}
          breakpoints={carouselBreakpoints}
          render={(video: any) => (
            <SwiperSlide key={video.id}>
              <VideoCardDefault {...video} />
            </SwiperSlide>
          )}
        />
      )}
    </SectionWrapper>
  )
}

export default VideoSectionMostViewed
