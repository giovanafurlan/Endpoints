// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
      <title>Endpoints Rate It</title>
    </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp