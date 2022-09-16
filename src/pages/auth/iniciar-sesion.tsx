import { AuthLayout } from '@layouts'
import { NextPageWithLayout } from '@pages/_app'
import { Fragment } from 'react'

const SignInPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      Auth Content
    </Fragment>
  )
}

SignInPage.layout = AuthLayout

export default SignInPage
