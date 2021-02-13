/* External dependencies */
import React, { useContext } from 'react'

/* Internal dependencies */
import { GlobalContext } from 'contexts/globalContext'
import * as Styled from './Navigation.styled'
import logo from 'images/logo.png'

function Navigation() {
  const { state: { isScrolled } } = useContext(GlobalContext)
  
  return (
    <Styled.NavigationWrapper isScrolled={isScrolled}>
      <Styled.NavigationContent>
        <Styled.LogoWrapper>
          <img width={40} src={logo} />
          <Styled.Title>Lee Jinyoung</Styled.Title>
        </Styled.LogoWrapper>
        <Styled.LinkWrapper>
          <Styled.LinkItem to="/" activeClassName="active">HOME</Styled.LinkItem>
          <Styled.LinkItem to="/project" activeClassName="active">PROJECT</Styled.LinkItem>
          <Styled.LinkItem to="/about" activeClassName="active">ABOUT</Styled.LinkItem>
        </Styled.LinkWrapper>
      </Styled.NavigationContent>
    </Styled.NavigationWrapper>
  )
}

export default Navigation
