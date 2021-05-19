/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import * as Styled from './Page.styled'

interface PageProps {
  className?: string
  children: React.ReactNode
}

function Page({ className, children }: PageProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <Styled.Page ref={ref} className={className}>
      {children}
    </Styled.Page>
  )
}

export default forwardRef(Page)
