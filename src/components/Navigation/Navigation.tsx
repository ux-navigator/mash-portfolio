/* External dependencies */
import React, { useContext, useState, useCallback } from 'react'

/* Internal dependencies */
import { GlobalContext } from 'contexts/globalContext'
import SVGIcon from 'components/SVGIcon'
import * as Styled from './Navigation.styled'
import close from 'images/close.png'
import Config from '../../../config'

function Navigation() {
  const { state: { isScrolled } } = useContext(GlobalContext)

  const [showNavigation, setShowNavigation] = useState(false)

  const handleShowNavigation = useCallback(() => {
    setShowNavigation(true)
    document.body.classList.add('nonScrollable')
  }, [])

  const handleHideNavigation = useCallback(() => {
    setShowNavigation(false)
    document.body.classList.remove('nonScrollable')
  }, [])
  
  return (
    <Styled.NavigationWrapper isScrolled={isScrolled}>
      <Styled.NavigationContent>
        <Styled.LogoWrapper>
          <Styled.Logo>
            <SVGIcon name="logo" size={32} />
          </Styled.Logo>
          <Styled.Title>Lee Jinyoung</Styled.Title>
        </Styled.LogoWrapper>
        <Styled.Menu onClick={handleShowNavigation}>
          <SVGIcon name="menu" size={40} />
        </Styled.Menu>
        <Styled.NavItemWrapper show={showNavigation}>
          <Styled.LinkWrapper>
            <Styled.LinkItem to="/" activeClassName="active">HOME</Styled.LinkItem>
            <Styled.LinkItem to="/project" activeClassName="active">PROJECT</Styled.LinkItem>
            <Styled.LinkItem to="/about" activeClassName="active">ABOUT</Styled.LinkItem>
          </Styled.LinkWrapper>
          <Styled.SkillWrapper>
            <Styled.Divider />
            { Config.main_first.skills.map(skill => (
              <Styled.Skill key={skill}>{skill}</Styled.Skill>
            )) }
          </Styled.SkillWrapper>
          <Styled.Close onClick={handleHideNavigation}>
            <img src={close} alt="" />
          </Styled.Close>
        </Styled.NavItemWrapper>
      </Styled.NavigationContent>
    </Styled.NavigationWrapper>
  )
}

export default Navigation
