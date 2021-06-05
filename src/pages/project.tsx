/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'

/* Internal dependencies */
import useLayout from 'hooks/useLayout'
import Image from 'components/Image'
import * as Styled from 'styles/pageStyles/project.styled'
import ConfigProject from '../../configProject'

function ProjectPage() {
  const [filter, setFilter] = useState('ALL')

  const filterSet = ConfigProject.projects.reduce((acc, cur) => {
    cur.tags.forEach(tag => acc.add(tag))
    return acc
  }, new Set<string>(['ALL']))

  const handleClickFilter = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const tag = event.target.dataset.tag
    setFilter(tag)
  }, [])

  const projects = useMemo(() => (
    ConfigProject.projects.filter(project => {
      if (filter === 'ALL') {
        return true
      }
      return project.tags.includes(filter)
    })
  ), [filter])

  return (
    <Styled.ProjectContainer>
      <Styled.ProjectTitle>
        { ConfigProject.title.map((titleItem, index) => (
          <p key={index}>{ titleItem }</p>
        )) }
      </Styled.ProjectTitle>
      <Styled.ProjectSubTitle>
        { ConfigProject.subTitle }
      </Styled.ProjectSubTitle>
      <Styled.FilterWrapper>
        { Array.from(filterSet).map(tag => (
          <Styled.Filter
            key={tag}
            data-tag={tag}
            active={filter === tag}
            onClick={handleClickFilter}
          >
            { tag }
          </Styled.Filter>
        )) }
      </Styled.FilterWrapper>
      <Styled.ProjectListWrapper>
        { projects.map(project => (
          <Styled.ProjectWrapper key={project.name}>
            <Styled.ProjectMainImage>
              <Image name={`projects/${project.mainImage}`} />
            </Styled.ProjectMainImage>
            <Styled.ProjectContent>
              { project.tags.map(tag => (
                <Styled.Tag key={tag}>
                  { `#${tag}` }
                </Styled.Tag>
              )) }
            </Styled.ProjectContent>
          </Styled.ProjectWrapper>
        )) }
      </Styled.ProjectListWrapper>
    </Styled.ProjectContainer>
  )
}

export default useLayout(ProjectPage)
