/* External dependencies */
import React, { useState, useCallback, useMemo, useEffect, useRef, useContext } from 'react'
import { navigate } from 'gatsby'
import { isEmpty, isNil } from 'lodash-es'

/* Internal dependencies */
import { setScrolled } from 'reducers/globalReducer'
import { GlobalContext } from 'contexts/globalContext'
import DeviceService from 'services/DeviceService'
import useLayout from 'hooks/useLayout'
import Device from 'constants/Device'
import SEO from 'components/SEO'
import SVGIcon from 'components/SVGIcon'
import * as Styled from 'styles/pageStyles/project.styled'
import Config from '../../config'
import ConfigProject from '../../configProject'

interface ProjectAttr {
  name: string
  mainImage: string
  tags: string[]
  title: string
  period: string
  images: string[]
  password?: string
}

const PROJECT_FILTER = ['APP', 'WEB', 'RESEARCH']

function ProjectPage() {
  const { dispatch, state: { isScrolled } } = useContext(GlobalContext)
  
  const [filter, setFilter] = useState('ALL')
  const [contactItemIndex, setContactItemIndex] = useState<number | null>(null)
  const [currentProject, setCurrentProject] = useState<ProjectAttr>()
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const filterSet = ConfigProject.projects.reduce((acc, cur) => {
    cur.tags.forEach(tag => {
      if (PROJECT_FILTER.includes(tag)) {
        acc.add(tag)
      }
    })
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

  const handleClickProject = useCallback((project) => {
    if (!isEmpty(project.password)) {
      setCurrentProject(project)
      setShowModal(true)
      document.body.classList.add('nonScrollable')
      return
    }

    navigate(project.name)
  }, [])

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setError(false)
  }, [])

  const handleClickCancel = useCallback(() => {
    setCurrentProject(undefined)
    setShowModal(false)
    setValue('')
    setError(false)
    document.body.classList.remove('nonScrollable')
  }, [])

  const handleClickContainer = useCallback((event: any) => {
    if (!event.target?.closest(Styled.Modal)) {
      handleClickCancel()
    }
  }, [handleClickCancel])

  const handleClickConfirm = useCallback(() => {
    if (!isNil(currentProject) && currentProject.password === value) {
      document.body.classList.remove('nonScrollable')
      navigate(`${currentProject.name}?key=${window.btoa(decodeURIComponent(currentProject.password))}`)
      return
    }

    setError(true)
  }, [
    currentProject,
    value,
  ])

  const handleScroll = useCallback(() => {
    if ((document.scrollingElement?.scrollTop ?? 0) > 50) {
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
    if (!isNil(inputRef.current) && showModal) {
      inputRef.current.focus()
    }
  }, [showModal])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return function cleanup() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => () => {
    document.body.classList.remove('nonScrollable')
  }, [])

  return (
    <>
      <SEO title="Lee JinYoung | project" />
      <Styled.ProjectContainer>
        <Styled.ModalContainer show={showModal} onClick={handleClickContainer}>
          <Styled.Modal>
            <Styled.ModalTitle>{ ConfigProject.modal.title }</Styled.ModalTitle>
            <Styled.ModalContent>
              <Styled.ModalDescription>{ ConfigProject.modal.description }</Styled.ModalDescription>
              <Styled.ModalInput
                ref={inputRef}
                hasError={error}
                value={value}
                onChange={handleChangeInput}
                placeholder={ConfigProject.modal.placehoder }
              />
              <Styled.ModalFooter>
                <Styled.ModalCancel onClick={handleClickCancel}>{ ConfigProject.modal.cancel }</Styled.ModalCancel>
                <Styled.ModalConfirm onClick={handleClickConfirm}>{ ConfigProject.modal.confirm }</Styled.ModalConfirm>
              </Styled.ModalFooter>
            </Styled.ModalContent>
          </Styled.Modal>
        </Styled.ModalContainer>
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
          { projects.map((project, index) => (
            <Styled.ProjectWrapper
              key={`${project.name}-${index}`}
              onClick={() => handleClickProject(project)}
            >
              <Styled.ProjectMainImage>
                { !isEmpty(project.title) && (
                  <Styled.ProjectImageBackground>
                    <Styled.ProjectItemTitle>
                      { project.title }
                    </Styled.ProjectItemTitle>
                    <Styled.ProjectItemPeriod>
                      { project.period }
                    </Styled.ProjectItemPeriod>
                  </Styled.ProjectImageBackground>
                ) }
                <Styled.ProjectImage name={`projects/${project.mainImage}`} />
              </Styled.ProjectMainImage>
              <Styled.ProjectContent>
                { project.tags.map(tag => (
                  <Styled.Tag key={tag}>
                    { `#${tag}` }
                  </Styled.Tag>
                )) }
                { !isEmpty(project.password) && (
                  <Styled.LockIcon name="lock" size={DeviceService.getDevice() === Device.Mobile ? 20: 28} />
                ) }
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
                  href={item.link}
                  target="_blank"
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
    </>
  )
}

export default useLayout(ProjectPage)
