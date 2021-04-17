/* External dependencies */
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

/* Internal dependencies */
import Underline from 'components/Underline'
import { UnderlineWrapper } from 'components/Underline/Underline.styled'
import Image from 'components/Image'
import BackgroundSection from 'components/BackgroundSection'

interface IntroPageInnerWrapperProps {
  fixed: boolean
  hidden: boolean
}

interface IntroItemTitleProps {
  show: boolean
}

interface ContentToggleButtonProps {
  lotate: boolean
}

interface IntroItemContentProps {
  show: boolean
}

interface ChattingImageProps {
  show: boolean
}

export const FirstPageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-top: 8.75rem;
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
    padding-top: 4.375rem;
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

  @media ${({ theme }) => theme.media.mobile} {
    padding-top: 3.75rem;
  }
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

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
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

export const IntroUnderline = styled(Underline)`
  bottom: 4px;
  height: 6.2px;
  opacity: 0.6;
  background-color: #C2C2C2;
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

export const CommonPageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F7F8FA;
`

export const CommonPageInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-top: 80px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    justify-content: flex-start;
    width: 100%;
    max-width: 375px;
    padding-top: 9.75rem;
  }
`

export const IntroParagraph1 = styled.p`
  font-family: 'Gothic Regular';
  font-size: 1.375rem;
  color: #747474;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1rem;
  }
`

export const IntroParagraph2 = styled.p`
  margin-top: 0.5rem;
  font-family: 'Gothic Bold';
  font-size: 2rem;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1.25rem;
  }
`

export const IntroItemWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    width: 446px;
    padding: 1.25rem 2.5rem;
    box-sizing: border-box;
    background-color: #FFF;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, .16);
    border-radius: 10px;
  }
  
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: row;
    width: 335px;
    padding: 1.375rem 1.25rem;
    box-sizing: border-box;
    background-color: #FFF;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, .16);
    border-radius: 10px;
  }
`

export const IntroItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6rem;

  ${IntroItemWrapper} + ${IntroItemWrapper} {
    margin-left: 3.875rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    margin-top: 4.625rem;

    ${IntroItemWrapper} + ${IntroItemWrapper} {
      margin-left: 0;
      margin-top: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: 3.25rem;

    ${IntroItemWrapper} + ${IntroItemWrapper} {
      margin-left: 0;
      margin-top: 0.875rem;
    }
  }
`

export const IntroImageItemWrapper = styled.div`
  width: 300px;
  height: 200px;
  margin-bottom: 0.875rem;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const IntroItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    align-items: flex-start;
  }
`

export const IntroItemTabletIcon = styled(Image)`
  display: none;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    width: 50px;
    height: 50px;
    padding-left: 1rem;
    margin-right: 2rem;
  }
`

export const IntroItemMobileIcon = styled(Image)`
  display: none;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 0.625rem;
  }
`

export const ContentToggleButton = styled.img<ContentToggleButtonProps>`
  display: none;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    width: 24px;
    margin-left: auto;
    cursor: pointer;

    ${({ lotate }) => lotate && css`
      transform: rotate(180deg);
    `}
  }
`

export const IntroItemTitle = styled.div<IntroItemTitleProps>`
  margin-bottom: 0.875rem;
  font-family: 'Mark Pro Bold';
  font-size: 1.5rem;
  color: #3370E8;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 1.25rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    font-size: 1.125rem;

    ${({ show }) => show && css`
      padding-bottom: 0.625rem;
      border-bottom: 1px solid #E9E9E9;
    `}
  }
`

export const IntroItemContent = styled.p<IntroItemContentProps>`
  width: 272px;
  font-family: 'Gothic Regular';
  font-size: 1rem;
  color: #747474;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
    width: 100%;
    margin-top: 1.25rem;

    ${({ show }) => show && css`
      display: block;
    `}
  }
`

export const BubblePageInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-top: 80px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    max-width: 375px;
    padding-top: 60px;
  }
`

export const ChattingImageWrapper = styled.div`
  position: relative;
  width: 548px;
  height: 187px;
  margin-top: 4.875rem;
  margin-bottom: 16rem; 

  @media ${({ theme }) => theme.media.tablet} {
    width: 468px;
    height: 245px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 310px;
    height: 202px;
    margin-bottom: 10rem; 
  }
`

const ChattingImage = styled.div<ChattingImageProps>`
  opacity: 0;
  transition: opacity 0.3s;

  ${({ show }) => show && css`
    opacity: 1;
  `}
`

export const ChattingImage1 = styled(ChattingImage)`
  width: 216px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 178px;
  }
`

export const ChattingImage2 = styled(ChattingImage)`
  position: absolute;
  top: 66px;
  right: 0;
  width: 257px;

  @media ${({ theme }) => theme.media.tablet} {
    top: 91px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    top: 80px;
    width: 212px;
  }
`

export const ChattingImage3 = styled(ChattingImage)`
  position: absolute;
  bottom: 0;
  width: 300px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 247px;
  }
`

export const PeopleImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 580px;
  height: auto;

  @media ${({ theme }) => theme.media.mobile} {
    width: 325px;
  }
`

export const ProjectPageBackground = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top 0 left 0;
  background-size: cover;
`

export const ProjectPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  background-color: rgba(51, 108, 232, 0.9);

  @media ${({ theme }) => theme.media.mobile} {
    padding-top: 60px;
  }
`

export const ProjectPageInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    max-width: 375px;
    padding-left: 1.25rem;
  }
`

export const ProjectUnderline = styled(Underline)`
  bottom: -2px;
  height: 6.2px;
  opacity: 0.6;
  background-color: #FFF;
`

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.375rem;
  font-size: 4rem;
  font-family: 'Mark Pro Bold';
  color: white;

  ${UnderlineWrapper} + ${UnderlineWrapper} {
    margin-top: 0.5rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 2.625rem;
  }
`

export const ProjectButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.875rem;
  height: 3.25rem;
  margin-top: 2.75rem;
  background-color: #FFF;
  border-radius: 3.25rem;

  @media ${({ theme }) => theme.media.tablet} {
    width: 16rem;
    height: 3.75rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 13.25rem;
    height: 3.375rem;
    margin-top: 4rem;
  }
`

export const ProjectButtonText = styled.p`
  font-size: 1.125rem;
  font-family: 'Gothic Bold';
  color: #3370E8;
  transform: translateY(7%);

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1rem;
  }
`

export const ProjectButtonIcon = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    margin-left: 1.125rem;
  }
`
