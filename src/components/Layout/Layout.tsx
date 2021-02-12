/* External dependencies */
import React from 'react'
import { ThemeProvider } from 'styled-components'

/* Internal dependencies */
import Navigation from 'components/Navigation'
import { media } from 'styles/theme'
import { GlobalStyle } from 'styles/globalStyle'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={media}>
      <Navigation />
      { children }
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Layout
