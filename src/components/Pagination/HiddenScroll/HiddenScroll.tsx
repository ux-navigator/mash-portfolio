/* External dependencies */
import React, { useCallback, useEffect, useRef } from 'react'

/* Internal dependencies */
import * as Styled from './HiddenScroll.styled'

function HiddenScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback((event: HTMLElementEventMap['wheel']) => {
    event.preventDefault()
  }, [])

  useEffect(() => {
    containerRef.current?.addEventListener('wheel', handleScroll)

      return function cleanup() {
        containerRef.current?.removeEventListener('wheel', handleScroll)
      }
  }, [handleScroll])

  return (
    <Styled.HiddenScrollWrapper ref={containerRef} />
  )
}

export default HiddenScroll
