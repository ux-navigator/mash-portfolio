/* External dependencies */
import React from 'react'
import { PageProps, navigate } from 'gatsby'
import qs from 'qs'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import useLayout from 'hooks/useLayout'
import Image from 'components/Image'
import * as Styled from './ProjectTemplate.styled'
import ConfigProject from '../../../configProject'

interface PageContext {
  slug: string
}

function ProjectTemplate({ location, pageContext: { slug } }: PageProps<object, PageContext>) {
  const projectName = location.pathname.split('/')[2]
  const project = ConfigProject.projects.find(project => project.name === projectName)
  const projectImages = project?.images
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })

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
      { projectImages.map(image => (
        <Image key={image} name={`${slug}/${image}`} />
      )) }
    </Styled.ProjectContainer>
  )
}

export default useLayout(ProjectTemplate)
