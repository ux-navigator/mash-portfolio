/* External dependencies */
import styled from 'styled-components'

export const PageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1320px;
  height: 100%;
  margin: 0 auto;
  padding-top: 60px;
`

export const Skill = styled.p`
  font-size: 18px;
  color: #747474;
`

export const ContentWrapper = styled.div`
  ${Skill} + ${Skill} {
    margin-top: 4px;
  }
`

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 96px;
  font-weight: bolder;
`

export const SubTitle = styled.h2`
  margin-bottom: 70px;
  font-size: 36px;
  color: #2C3E50;
`

export const Paragraph = styled.p`
  margin-bottom: 90px;
  font-size: 24px;
  font-weight: bold;
  color: #3370E8;
`

export const ImageWrapper = styled.div`
  width: 823px;
  height: auto;
`

export const SafariImage = styled.img`
  width: 823px;
  height: auto;
`
