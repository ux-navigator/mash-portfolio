/* External dependencies */
import React, { useRef, useMemo, useEffect, useState } from 'react'

/* Internal dependencies */
import useThrottle from 'hooks/useThrottle'
import HiddenScroll from './HiddenScroll'

interface PaginationProps {
  children: React.ReactElement | React.ReactElement[]
}

const SCROLLING_DURATION = 1000

function Pagination({ children }: PaginationProps) {
  const [isScrolling, setScrolling] = useState(false)

  const pageRefs = useRef<HTMLDivElement[]>([])
  const currentScrollTop = useRef(window.pageYOffset)
  const currentPageIndex = useRef(0)

  const handleScroll = useThrottle(() => {
    setScrolling(true)
    
    if (currentScrollTop.current < window.pageYOffset) {
      currentPageIndex.current = Math.min(currentPageIndex.current + 1, pageRefs.current.length - 1)
    } else {
      currentPageIndex.current = Math.max(currentPageIndex.current - 1, 0)
    }

    const nextPage = pageRefs.current[currentPageIndex.current]
    const nextScrollTop = nextPage.getBoundingClientRect().top + window.pageYOffset

    window.scroll({
      behavior: 'smooth',
      top: nextScrollTop,
    })

    setTimeout(() => {
      setScrolling(false)
      currentScrollTop.current = window.pageYOffset
    }, SCROLLING_DURATION)
  }, SCROLLING_DURATION, [])

  const PagesComponent = useMemo(() => (
    React.Children.map(children, (child: React.ReactElement, index) => (
      React.cloneElement(child, {
        ref: (page: HTMLDivElement) => {
          pageRefs.current.push(page)
        }
      })
    ))
  ), [children])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return function cleanup() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      { isScrolling && <HiddenScroll /> }
      {PagesComponent}
    </>
  )
}

export default Pagination
