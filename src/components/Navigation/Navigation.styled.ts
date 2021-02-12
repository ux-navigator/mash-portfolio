/* External dependencies */
import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavigationWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
`

export const NavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
  margin: 0 auto;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  margin-left: 14px;
  color: #2C3E50;
  font-size: 24px;
`

export const LinkItem = styled(Link)`
  font-size: 24px;
  font-weight: bold;

  &.active {
    color: #3370E8;
    border-bottom: 3px solid #3370E8;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;


  ${LinkItem} + ${LinkItem} {
    margin-left: 60px;
  }
`
