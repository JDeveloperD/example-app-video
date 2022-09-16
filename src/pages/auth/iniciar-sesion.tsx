import { Typography } from '@components'
import { AuthLayout } from '@layouts'
import { NextPageWithLayout } from '@pages/_app'
import { Fragment } from 'react'

const SignInPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Typography
        variant='headline'
        size={1}
        fontWeight={600}
        className='mb-3'
      >
        Masuk ke akun kamu
      </Typography>
      <Typography>
      Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu cita-citata sejak dalam embrio!
      </Typography>

    </Fragment>
  )
}

SignInPage.layout = AuthLayout

export default SignInPage
