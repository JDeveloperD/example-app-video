import type {
  GetServerSideProps, InferGetServerSidePropsType, NextPage
} from 'next'
import { VideoSectionDiscover, VideoSectionMostViewed } from '@app/videos/view'
import { Fragment } from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      discover: [],
      mostViewed: []
    }
  }
}

const Home: NextPage = ({
  discover,
  mostViewed
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Fragment>
      <VideoSectionDiscover latestVideos={discover} className='mb-4' />
      <VideoSectionMostViewed mostViewed={mostViewed} className='mb-4' />
    </Fragment>
  )
}

export default Home
