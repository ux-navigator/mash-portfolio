/* External dependencies */
import React from 'react'
import { PageProps } from 'gatsby'

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
  const projectImages = ConfigProject.projects.find(project => project.name === projectName)?.images

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
