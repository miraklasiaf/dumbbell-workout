import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/design-system'
import { DefaultSeo } from 'next-seo'
import SEO from '@/next-seo.config'
import '@/styles/font.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
