/* External dependencies */
import React, { useReducer, useMemo } from 'react'
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

  return (
    <ThemeProvider theme={media}>
      <GlobalContext.Provider value={contextValue}>
        <Navigation />
        { children }
        <GlobalStyle />
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
