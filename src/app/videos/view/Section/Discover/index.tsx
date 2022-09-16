import { Typography } from '@components'
import { Col, Row } from 'react-bootstrap'
import { VideoCardHorizontail } from '@app/videos'
import { HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'

type VideoSectionDiscoverProps = HTMLAttributes<HTMLElement> & {
  latestVideos: []
}

const VideoSectionDiscover = ({
  latestVideos = [],
  ...props
}: VideoSectionDiscoverProps) => {
  const { mode } = useTheme()

  return (
    <section {...props}>
      <Typography
        variant='display'
        fontWeight={500}
        size={6}
        as='h3'
        color={mode === 'dark' ? 'light' : undefined}
        className='mb-3'
      >
        Descubrir
      </Typography>
      <Row className="g-3">
        <Col lg={8}>
          <VideoCardHorizontail
            title="Cómo hacer saltos básicos y cómo aterrizar con seguridad"
            authorName="Thomas Hope"
            thumbnail="/img/post/thumbnail5.png"
            className="h-100 py-lg-5"
          />
        </Col>
        <Col lg={4}>
          <VideoCardHorizontail
            title="Consejos de patineta que debes saber"
            authorName="Tony Andrew"
            className="h-100"
            thumbnail="/img/post/thumbnail6.png"
          />
        </Col>
      </Row>
    </section>
  )
}

export default VideoSectionDiscover
