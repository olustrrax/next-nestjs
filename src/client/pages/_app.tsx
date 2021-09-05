import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
     <Head>
      <title>Engineer Trip!</title>
      <meta name="description" content="Engineer Trip" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="icon" href="/globish-logo.png" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}
