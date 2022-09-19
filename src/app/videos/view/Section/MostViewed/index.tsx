import { Video } from '@app/videos/core/domain'
import { providerVideoPloc } from '@app/videos/core/videoDependencies'
import { VideoCardDefault } from '@app/videos/view'
import { HTMLAttributes, useEffect } from 'react'
import { usePlocState } from '@hooks'
import { useTheme } from 'styled-components'
import { SectionWrapper, LoaderSection } from './styled'
import { Carousel, Spinner, Typography } from '@components'
import { SwiperSlide } from 'swiper/react'
import carouselBreakpoints from './carouselBreakpoints'

type VideoSectionMostViewedProps = HTMLAttributes<HTMLElement> & {
  mostViewed: Video[]
}

const VideoSectionMostViewed = ({
  mostViewed = [],
  ...props
}: VideoSectionMostViewedProps) => {
  const { mode } = useTheme()
  const ploc = providerVideoPloc()
  const state = usePlocState(ploc)

  useEffect(() => {
    const allVideos = async () => {
      ploc.getAll()
    }

    allVideos()
  }, [ploc])

  return (
    <SectionWrapper {...props}>
      <Typography
        variant='headline'
        fontWeight={300}
        as='h3'
        size={3}
        color={mode === 'dark' ? 'light' : undefined}
        className='mb-3'
      >
        Más Vistos
      </Typography>

      {state.kind === 'LoadingVideosState' && (
        <LoaderSection>
          <Spinner color='textBody' />
        </LoaderSection>
      )}

      {state.kind === 'LoadedVideosState' && state.videos.length > 0 && (
        <Carousel
          autoplay
          items={state.videos}
          spaceBetween={10}
          slidesPerView={1.2}
          allowTouchMove={false}
          pagination={{ clickable: true }}
          breakpoints={carouselBreakpoints}
          render={(video: Video) => (
            <SwiperSlide key={video.id}>
              <VideoCardDefault
                title={video.title}
                authorName={video.user.name}
                time={video.time.toString()}
                thumbnail={video.thumbnail}
              />
            </SwiperSlide>
          )}
        />
      )}
    </SectionWrapper>
  )
}

export default VideoSectionMostViewed
