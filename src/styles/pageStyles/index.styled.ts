/* External dependencies */
import styled, { css } from 'styled-components'

interface IntroPageInnerWrapperProps {
  fixed: boolean
  hidden: boolean
}

interface IntroImageItemWrapperProps {
  width: number
}

export const FirstPageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1320px;
  height: 100%;
  margin: 0 auto;
  padding-top: 139px;
  box-sizing: border-box;
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

export const ShipImageWrapper = styled.div`
  width: 823px;
  height: auto;
`

export const SafariImage = styled.img`
  width: 823px;
  height: auto;
`

export const IntroPageInnerWrapper = styled.div<IntroPageInnerWrapperProps>`
  display: flex;
  width: 1320px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding-top: 79px;
  box-sizing: border-box;
  transition: opacity 1s;

  ${({ fixed }) => fixed && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}

  ${({ hidden }) => hidden && css`
    opacity: 0;
  `}
`

export const EllipseImageWrapper = styled.div`
  width: 700px;
  height: auto;
  position: absolute;
  top: calc(50% + 39.5px);
  left: 50%;
  transform: translate(-50%, -50%);
`

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 160px;
  z-index: 1;
`

export const IntroTitle = styled.p`
  width: 430px;
  margin: 120px 140px 0 0;
  font-size: 76px;
  font-weight: bold;
  color: #3370E8;
`

export const IntroListItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`

export const IntroContent = styled.div`
  width: 650px;
  margin-top: 400px;
  color: #2C3E50;

  ${IntroListItem} + ${IntroListItem} {
    margin-top: 70px;
  }
`

export const ContentTitle = styled.p`
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: bold;
`

export const ContentItem = styled.p`
  span {
    font-weight: bold;
    color: #3370E8;
  }
`

export const ContentList = styled.div`
  font-size: 24px;

  ${ContentItem} + ${ContentItem} {
    margin-top: 18px;
  }
`

export const Icon = styled.div`
  margin-right: 6px;
`

export const CommonPageInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1320px;
  height: 100%;
  margin: 0 auto;
  padding-top: 79px;
  box-sizing: border-box;
`

export const IntroParagraph1 = styled.p`
  margin-top: 110px;
  font-size: 28px;
  color: #919FAD;
`

export const IntroParagraph2 = styled.p`
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
`

export const IntroItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IntroItemsWrapper = styled.div`
  display: flex;
  margin-top: 90px;

  ${IntroItemWrapper} + ${IntroItemWrapper} {
    margin-left: 80px;
  }
`

export const IntroImageItemWrapper = styled.div<IntroImageItemWrapperProps>`
  width: ${({ width }) => width}px;
  height: 240px;
  margin-bottom: 40px;
`

export const IntroItemTitle = styled.p`
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: bolder;
  color: #3370E8;
`

export const IntroItemContent = styled.p`
  width: 375px;
  font-size: 24px;
  color: #4F5A65;
`

export const ChattingImageWrapper = styled.div`
  width: 600px;
  height: auto;
  margin-top: 60px;
`

export const PeopleImageWrapper = styled.div`
  width: 580px;
  height: auto;
  margin-top: auto;
`