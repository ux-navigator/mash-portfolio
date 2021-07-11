/* External dependencies */
import React, { useReducer, useMemo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

/* Internal dependencies */
import globalReducer, { initialState } from 'reducers/globalReducer'
import { GlobalContext } from 'contexts/globalContext'
import Navigation from 'components/Navigation'
import { media } from 'styles/theme'
import { GlobalStyle } from 'styles/globalStyle'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const contextValue = useMemo(() => ({
    state,
    dispatch,
  }), [state, dispatch])

  const theme = useMemo(() => ({
    media,
  }), [])

  useEffect(() => {
    const getsbyWrapper = document.getElementById('gatsby-focus-wrapper')
    if (getsbyWrapper) {
      getsbyWrapper.style.overflow = 'hidden'
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={contextValue}>
        <Navigation />
        { children }
        <GlobalStyle />
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
