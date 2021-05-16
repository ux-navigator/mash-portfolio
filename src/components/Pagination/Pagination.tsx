/* External dependencies */
import React, {
  useRef,
  useMemo,
  useEffect,
  useContext,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react'
import smoothscroll from 'smoothscroll-polyfill'

/* Internal dependencies */
import { setScrolled, setCurrentPage } from 'reducers/globalReducer'
import { GlobalContext } from 'contexts/globalContext'
import useThrottle from 'hooks/useThrottle'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

interface PaginationProps {
  children: React.ReactElement | React.ReactElement[]
}

export const SCROLLING_DURATION = 1000

function Pagination(
  { children }: PaginationProps,
  ref: React.Ref<{ handleMovePage: (pageIndex: number) => void }>,
) {
  const { dispatch } = useContext(GlobalContext)

  const pageRefs = useRef<HTMLDivElement[]>([])
  const currentScrollTop = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0)
  const currentPageIndex = useRef(0)
  const isMounted = useRef(false)

  const handleScroll = useThrottle(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!isMounted.current) {
      return
    }
    
    if (currentScrollTop.current < window.pageYOffset) {
      currentPageIndex.current = Math.min(currentPageIndex.current + 1, pageRefs.current.length - 1)
    } else {
      currentPageIndex.current = Math.max(currentPageIndex.current - 1, 0)
    }

    handleMovePage(currentPageIndex.current)
  }, SCROLLING_DURATION, [])

  const handleMovePage = useCallback((pageIndex: number) => {
    dispatch(setCurrentPage({ currentPage: pageIndex }))
    dispatch(setScrolled({ isScrolled: pageIndex !== 0 }))

    const nextPage = pageRefs.current[pageIndex]
    const nextScrollTop = nextPage.getBoundingClientRect().top + window.pageYOffset

    document.body.classList.add('nonScrollable')

    window.scroll({
      behavior: 'smooth',
      top: nextScrollTop,
    })

    setTimeout(() => {
      document.body.classList.remove('nonScrollable')
      currentScrollTop.current = window.pageYOffset
    }, SCROLLING_DURATION)
  }, [dispatch])

  const PagesComponent = useMemo(() => (
    React.Children.map(children, (child: React.ReactElement, index) => (
      React.cloneElement(child, {
        ref: (page: HTMLDivElement) => {
          pageRefs.current.push(page)
        }
      })
    ))
  ), [children])

  useImperativeHandle(ref, () => ({
    handleMovePage,
  }))

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return function cleanup() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    })
    setTimeout(() => {
      isMounted.current = true
    }, SCROLLING_DURATION)
  }, [])

  return (
    <>
      {PagesComponent}
    </>
  )
}

export default forwardRef(Pagination)
