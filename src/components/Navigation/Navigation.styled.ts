/* External dependencies */
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

interface NavigationWrapperProps {
  isScrolled: boolean
}

export const NavigationWrapper = styled.div<NavigationWrapperProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ isScrolled }) => isScrolled ? 20 : 50}px 0;
  background-color: #FFFFFF;
  transition: padding 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  z-index: 9999;

  ${({ isScrolled }) => isScrolled && css`
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, .2);
  `}
`

export const NavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  margin-left: 14px;
  font-size: 18px;
  font-family: 'Mark Pro Book';
  color: #2C3E50;
`

export const LinkItem = styled(Link)`
  padding: 2px 0;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Mark Pro Book';
  color: #2C3E50;
  border-bottom: 3px solid #FFF;

  &.active, &:hover {
    color: #3370E8;
    border-color: #3370E8;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;


  ${LinkItem} + ${LinkItem} {
    margin-left: 60px;
  }
`
