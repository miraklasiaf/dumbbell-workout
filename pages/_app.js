import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/core'
import theme from '@/design-system'
import { Global, css } from '@emotion/core'
import Nprogress from '@/components/nprogress'
import { DefaultSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        ::selection {
          background-color: #ff9cf9;
          color: #fefefe;
        }
        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
    {children}
  </>
)

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <GlobalStyle>
          <DefaultSeo {...siteConfig.seo} />
          <Nprogress />
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </>
  )
}

export default App
