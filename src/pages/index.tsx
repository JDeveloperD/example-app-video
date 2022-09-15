import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { AppLayout } from '@layouts'
import { getMostViewedService, VideoSectionDiscover, VideoSectionMostViewed } from '@app/videos'
import Video from '@app/videos/domain/Video'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resMostViewed = await getMostViewedService()
  const mostViewedVideos: Video[] = resMostViewed.data.videos

  return {
    props: {
      discover: [],
      mostViewed: mostViewedVideos
    }
  }
}

const Home: NextPage = ({
  discover,
  mostViewed
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AppLayout>
      <VideoSectionDiscover latestVideos={discover} className='mb-4' />
      <VideoSectionMostViewed mostViewed={mostViewed} className='mb-4' />
    </AppLayout>
  )
}

export default Home
