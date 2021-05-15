/* External dependencies */
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

interface NavigationWrapperProps {
  isScrolled: boolean
}

interface NavItemWrapperProps {
  show: boolean
}

export const NavigationWrapper = styled.div<NavigationWrapperProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ isScrolled }) => isScrolled ? 16 : 56}px 0;
  background-color: #FFFFFF;
  transition: padding 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  z-index: 9999;

  ${({ isScrolled }) => isScrolled && css`
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, .2);
  `}

  @media ${({ theme }) => theme.media.mobile} {
    padding: 10px 0;
  }
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
    max-width: 375px;
    padding: 0 20px;
    box-sizing: border-box;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  width: 32px;
  height: 32px;

  img {
    width: 100%;
  }
`

export const Menu = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`

export const Title = styled.p`
  margin-left: 0.875rem;
  font-size: 1.125rem;
  font-family: 'Mark Pro Book';
  color: #2C3E50;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const LinkItem = styled(Link)`
  padding: 2px 0;
  font-size: 1.125rem;
  font-weight: bold;
  font-family: 'Mark Pro Book';
  color: #2C3E50;
  border-bottom: 3px solid #FFF;

  &.active, &:hover {
    color: #3370E8;
    border-color: #3370E8;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: inline;
    font-size: 1.625rem;
    font-family: 'Mark Pro Bold';
    color: #F7F8FA;
    border-color: transparent;

    &.active, &:hover {
      color: #F7F8FA;
      border-color: #F7F8FA;
    }
  }
`

export const NavItemWrapper = styled.div<NavItemWrapperProps>`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: #141B23;
    opacity: 0.96;
    transition: 0.3s transform;

    ${({ show }) => show && css`
      transform: translateX(-100%);
    `}
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;


  ${LinkItem} + ${LinkItem} {
    margin-left: 3.75rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    margin: 5.25rem 0 0 1.875rem;

    ${LinkItem} + ${LinkItem} {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`

export const Skill = styled.div`
  font-size: 0.875rem;
  font-family: 'Mark Pro Regular';
  color: #F7F8FA;
`

export const SkillWrapper = styled.div`
  display: none;
  margin: auto 0 3.375rem 1.875rem;

  ${Skill} + ${Skill} {
    margin-top: 0.5rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`

export const Divider = styled.div`
  width: 26px;
  height: 2px;
  margin-bottom: 1.5rem;
  background-color: #F7F8FA;
`

export const Close = styled.div`
  position: absolute;
  top: 0.875rem;
  right: 1.125rem;
  width: 40px;
  height: 40px;
  display: none;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`
