/* External dependencies */
import React, { useEffect, useCallback, useContext } from 'react'
import { PageProps } from 'gatsby'
import qs from 'qs'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { setScrolled } from 'reducers/globalReducer'
import { GlobalContext } from 'contexts/globalContext'
import useLayout from 'hooks/useLayout'
import Image from 'components/Image'
import * as Styled from './ProjectTemplate.styled'
import ConfigProject from '../../../configProject'

interface PageContext {
  slug: string
}

function ProjectTemplate({ location, pageContext: { slug } }: PageProps<object, PageContext>) {
  const { dispatch, state: { isScrolled } } = useContext(GlobalContext)

  const projectName = location.pathname.split('/')[2]
  const project = ConfigProject.projects.find(project => project.name === projectName)
  const projectImages = project?.images
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })

  const handleScroll = useCallback(() => {
    if ((document.scrollingElement?.scrollTop ?? 0) > 84) {
      if (!isScrolled) {
        dispatch(setScrolled({ isScrolled: true }))
      }
      return
    }
    if (isScrolled) {
      dispatch(setScrolled({ isScrolled: false }))
    }
  }, [
    isScrolled,
    dispatch,
  ])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return function cleanup() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  if (typeof window === 'undefined') {
    return null
  }

  if (!isEmpty(project?.password) && queryParams.key !== window.btoa(decodeURIComponent(project!.password!))) {
    return null
  }

  if (!projectImages) {
    return null
  }

  return (
    <Styled.ProjectContainer>
      { projectImages.map((image, index) => {
        const src = require(`images/${slug}/${image}`)
        return <img key={`${image}-${index}`} src={src} width="100%" />
      }) }
    </Styled.ProjectContainer>
  )
}

export default useLayout(ProjectTemplate)
