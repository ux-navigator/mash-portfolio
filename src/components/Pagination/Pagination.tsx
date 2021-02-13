/* External dependencies */
import React, { useRef, useMemo, useEffect, useContext } from 'react'

/* Internal dependencies */
import { setScrolled } from 'reducers/globalReducer'
import { GlobalContext } from 'contexts/globalContext'
import useThrottle from 'hooks/useThrottle'

interface PaginationProps {
  children: React.ReactElement | React.ReactElement[]
}

const SCROLLING_DURATION = 1000

function Pagination({ children }: PaginationProps) {
  const { dispatch } = useContext(GlobalContext)

  const pageRefs = useRef<HTMLDivElement[]>([])
  const currentScrollTop = useRef(window.pageYOffset)
  const currentPageIndex = useRef(0)

  const handleScroll = useThrottle(() => {
    document.body.classList.add('nonScrollable')
    
    if (currentScrollTop.current < window.pageYOffset) {
      currentPageIndex.current = Math.min(currentPageIndex.current + 1, pageRefs.current.length - 1)
    } else {
      currentPageIndex.current = Math.max(currentPageIndex.current - 1, 0)
    }

    dispatch(setScrolled({ isScrolled: currentPageIndex.current !== 0 }))

    const nextPage = pageRefs.current[currentPageIndex.current]
    const nextScrollTop = nextPage.getBoundingClientRect().top + window.pageYOffset

    window.scroll({
      behavior: 'smooth',
      top: nextScrollTop,
    })

    setTimeout(() => {
      document.body.classList.remove('nonScrollable')
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
      {PagesComponent}
    </>
  )
}

export default Pagination
