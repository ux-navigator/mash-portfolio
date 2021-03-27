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
  position: relative;
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
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-top: 0;
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
    margin-bottom: 1.25rem;
    font-size: 3rem;
  }
`

export const SubTitle = styled.h2`
  margin-bottom: 3.875rem;
  font-size: 1.625rem;
  font-family: 'Mark Pro Book';
  color: #2C3E50;

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 1.875rem;
    font-size: 1.125rem;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 4rem;
  font-size: 1.25rem;
  font-family: 'Mark Pro Bold';
  color: #3370E8;

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 3.25rem;
    font-size: 0.875rem;
  }
`

export const ShipImageWrapper = styled.div`
  width: 44.5rem;
  position: relative;
  right: -2.375rem;

  @media ${({ theme }) => theme.media.tablet} {
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    width: 31.2rem;
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
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 5rem;
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

export const EllipseImage1Wrapper = styled.div`
  width: 488px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const EllipseImage2Wrapper = styled.div`
  display: none;
  width: 370px;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 210px;
    display: block;
  }
`

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 6rem 0;
  box-sizing: border-box;
  z-index: 1;

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: center;
    width: 680px;
    padding: 0;
  }
  @media ${({ theme }) => theme.media.mobile} {
    justify-content: center;
    width: 100%;
    max-width: 375px;
    padding: 0 1.25rem;
  }
`

export const IntroTitle = styled.p`
  width: 430px;
  font-family: 'Mark Pro Bold';
  font-size: 4rem;
  line-height: 5rem;
  color: #3370E8;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 10.5rem;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 240px;
    margin-bottom: 6rem;
    font-size: 2.625rem;
    line-height: 3.75rem;
  }
`

export const NotMobileIntroListItem = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Gothic Bold';
  font-size: 1.375rem;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const MobileIntroListItem = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    align-items: center;
    font-family: 'Gothic Bold';
    font-size: 1rem;
  }
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  width: 530px;
  height: 242px;
  color: #2C3E50;

  ${NotMobileIntroListItem} + ${NotMobileIntroListItem} {
    margin-top: 3.75rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;

    ${MobileIntroListItem} + ${MobileIntroListItem} {
      margin-top: 1.875rem;
    }
  }
`

export const NotMobileContentTitle = styled.p`
  margin-bottom: 1.75rem;
  font-family: 'Gothic Bold';
  font-size: 1.375rem;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const MobileContentTitle = styled.p`
  display: none;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    margin-bottom: 1.25rem;
    font-family: 'Gothic Bold';
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export const ContentItem = styled.p`
  font-family: 'Gothic Regular';
  font-size: 1.125rem;
  line-height: 1.5rem;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1rem;
  }
`

export const NotMobileContentList = styled.div`
  ${ContentItem} + ${ContentItem} {
    margin-top: 1.125rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const MobileContentList = styled.div`
  display: none;
  ${ContentItem} + ${ContentItem} {
    margin-top: 1.125rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
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