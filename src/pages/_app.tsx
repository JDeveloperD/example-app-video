import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@styles'
import { FC, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppLayout } from '@layouts'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: FC<{ children: ReactNode }>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.layout || AppLayout

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
