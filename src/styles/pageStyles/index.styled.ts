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
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-top: 139px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    flex-direction: column;
  }
`

export const Skill = styled.p`
  font-size: 0.875rem;
  font-family: 'Mark Pro Book';
  color: #4F5A65;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const ContentWrapper = styled.div`
  width: 25rem;

  ${Skill} + ${Skill} {
    margin-top: 0.4rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }
`

export const MainTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 5.25rem;
  font-family: 'Mark Pro Heavy';
  color: #2C3E50;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 3rem;
  }
`

export const SubTitle = styled.h2`
  margin-bottom: 3.875rem;
  font-size: 1.625rem;
  font-family: 'Mark Pro Book';
  color: #2C3E50;

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 2.125rem;
    font-size: 1.125rem;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 4rem;
  font-size: 1.25rem;
  font-family: 'Mark Pro Bold';
  color: #3370E8;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 0.875rem;
  }
`

export const ShipImageWrapper = styled.div`
  width: 44.5rem;
  position: relative;
  right: -2.375rem;

  @media ${({ theme }) => theme.media.tablet} {
    align-self: flex-end;
    width: 31.2rem;
    top: -5.75rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 327px;
    right: 0;
  }
`

export const SafariImage = styled.img`
  width: 100%;
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