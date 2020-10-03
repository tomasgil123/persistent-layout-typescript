import React from 'react'

import Header from '../components/header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header isMain={true} />
      {children}
    </>
  )
}

export default Layout