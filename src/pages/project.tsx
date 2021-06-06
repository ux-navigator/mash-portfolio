/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'

/* Internal dependencies */
import DeviceService from 'services/DeviceService'
import useLayout from 'hooks/useLayout'
import Device from 'constants/Device'
import Image from 'components/Image'
import SVGIcon from 'components/SVGIcon'
import * as Styled from 'styles/pageStyles/project.styled'
import Config from '../../config'
import ConfigProject from '../../configProject'

function ProjectPage() {
  const [filter, setFilter] = useState('ALL')
  const [contactItemIndex, setContactItemIndex] = useState<number | null>(null)

  const filterSet = ConfigProject.projects.reduce((acc, cur) => {
    cur.tags.forEach(tag => acc.add(tag))
    return acc
  }, new Set<string>(['ALL']))

  const projects = useMemo(() => (
    ConfigProject.projects.filter(project => {
      if (filter === 'ALL') {
        return true
      }
      return project.tags.includes(filter)
    })
  ), [filter])

  const handleClickFilter = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const tag = event.target.dataset.tag
    setFilter(tag)
  }, [])

  const handleEnterContactItem = useCallback((index: number) => {
    setContactItemIndex(index)
  }, [])

  const handleLeaveContactItem = useCallback(() => {
    setContactItemIndex(null)
  }, [])

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
          <Styled.ProjectWrapper key={project.name} to={project.name}>
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
      <Styled.ContactPageWrapper>
        <Styled.ContactPageInnerWrapper>
          <Styled.ContactTitle>
            {Config.main_eight.title}
          </Styled.ContactTitle>
          <Styled.ContactSubTitle>
            {Config.main_eight.subTitle}
          </Styled.ContactSubTitle>
          <Styled.ContactInfoWrapper>
            {Config.main_eight.items.map((item, index) => (
              <Styled.ContactInfoItem
                key={index}
                onMouseEnter={() => handleEnterContactItem(index)}
                onMouseLeave={handleLeaveContactItem}
              >
                <Styled.ContactIcon>
                  <SVGIcon
                    name={`${item.icon}${contactItemIndex === index ? '-blue' : ''}`}
                    size={DeviceService.getDevice() === Device.Mobile ? 20: 28}
                  />
                </Styled.ContactIcon>
                <Styled.ContactContent isKorean={item.language === 'ko'}>
                  {item.content}
                </Styled.ContactContent>
              </Styled.ContactInfoItem>
            ))}
          </Styled.ContactInfoWrapper>
          <Styled.ContactBackgroundImage>
            <Image name="background-contact.png" />
          </Styled.ContactBackgroundImage>
        </Styled.ContactPageInnerWrapper>
      </Styled.ContactPageWrapper>
      <Styled.FooterWrapper>
        <Styled.FooterLogoWrapper>
          <Styled.FooterLogo name="footer-logo" />
        </Styled.FooterLogoWrapper>
        <Styled.FooterContent>
          <Styled.FooterReserve>{ Config.main_footer.reserve }</Styled.FooterReserve>
          <Styled.FooterDescription>{ Config.main_footer.description }</Styled.FooterDescription>
        </Styled.FooterContent>
      </Styled.FooterWrapper>
    </Styled.ProjectContainer>
  )
}

export default useLayout(ProjectPage)
