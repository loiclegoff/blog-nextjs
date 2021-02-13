import '../assets/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import splitbee from '@splitbee/web'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js',
    })
  }, [])

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
