import '../styles/globals.css'
import PageWithLayoutType from '../types/pageWithLayout'
import React from 'react'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (children => <>{children}</>)
  return <Layout>
            <Component {...pageProps} />
         </Layout> 
 
}

export default MyApp