/* External dependencies */
import React, { useEffect, useState } from 'react'

/* Internal dependencies */
import { SCROLLING_DURATION } from 'components/Pagination'
import * as Styled from './Underline.styled'

interface UnderlineProps {
  className?: string
  trigger?: boolean
  delay?: number
  repeat?: boolean
  children: React.ReactNode
}

function Underline({
  className,
  trigger = false,
  delay = 0,
  repeat: receivedRepeat = false,
  children,
}: UnderlineProps) {
  const [visible, setVisible] = useState(false)
  const [repeat, setRepeat] = useState(true)

  useEffect(() => {
    if (trigger && repeat) {
      setTimeout(() => {
        setVisible(true)

        if (!receivedRepeat) {
          setRepeat(false)
        } else {
          setRepeat(true)
        }
      }, delay)
    }
  }, [
    trigger,
    delay,
    receivedRepeat,
  ])

  useEffect(() => {
    if (!trigger && receivedRepeat) {
      setTimeout(() => {
        setVisible(false)
      }, SCROLLING_DURATION)
    }
  }, [
    trigger,
    receivedRepeat,
  ])

  if (!children) {
    return null
  }

  return (
    <Styled.UnderlineWrapper>
      <Styled.TextWrapper>
        {children}
      </Styled.TextWrapper>
      <Styled.Underline
        className={className}
        visible={visible}
      />
    </Styled.UnderlineWrapper>
  )
}

export default Underline
