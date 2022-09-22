import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { optionsNextAuth } from '@pages/api/auth/[...nextauth]'
import { unstable_getServerSession as getServerSession } from 'next-auth/next'
import { useSession } from 'next-auth/react'
import { Fragment } from 'react'
import { VideoSectionDiscover, VideoSectionMostViewed } from '@app/videos/view'
import { Button, Spinner, Typography } from '@components'
import Image from 'next/image'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, optionsNextAuth)

  if (!session) { // validar si no existe una sesión activa
    return {
      redirect: {
        destination: '/auth/iniciar-sesion',
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
      discover: [],
      mostViewed: []
    }
  }
}

const Home: NextPage = ({
  discover,
  mostViewed
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { status } = useSession()

  if (status === 'loading') {
    return (
      <div className='text-center pt-5'>
        <Spinner /><Typography>Cargando...</Typography>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className='text-center pt-5'>
        <Typography color='light' className='mb-5'>Su sesión expiró. Vuelva a iniciar sesión por favor.</Typography>
        <div>
          <Image src='/svg/door_close.svg' width={108} height={108} />
        </div>
        <Link href='/auth/iniciar-sesion' passHref>
          <Button
            variant='contained'
            className='mt-5'
            as='a'
          >
            Ir a iniciar sesión
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <Fragment>
      <VideoSectionDiscover latestVideos={discover} className='mb-4' />
      <VideoSectionMostViewed mostViewed={mostViewed} className='mb-4' />
    </Fragment>
  )
}

export default Home
