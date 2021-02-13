/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import * as Styled from './Page.styled'

interface PageProps {
  children: React.ReactNode
}

function Page({ children }: PageProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <Styled.Page ref={ref}>
      {children}
    </Styled.Page>
  )
}

export default forwardRef(Page)
