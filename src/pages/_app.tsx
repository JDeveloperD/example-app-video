import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
