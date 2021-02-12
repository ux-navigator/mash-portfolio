/* External dependencies */
import React from 'react'

/* Internal dependencies */
import * as Styled from './Navigation.styled'

function Navigation() {
  return (
    <Styled.NavigationWrapper>
      <Styled.NavigationContent>
        <Styled.LogoWrapper>
          <Styled.LogoImage />
          <Styled.Title>Lee Jinyoung</Styled.Title>
        </Styled.LogoWrapper>
      </Styled.NavigationContent>
    </Styled.NavigationWrapper>
  )
}

export default Navigation
