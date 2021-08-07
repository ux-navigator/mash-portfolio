/* External dependencies */
import styled, { css } from 'styled-components'

/* Internal dependencies */
import SVGIcon from 'components/SVGIcon'

interface HistoryItemTitleProps {
  isKorean: boolean
}

interface ContactContentProps {
  isKorean: boolean
}

export const AboutContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 144px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    padding-top: 60px;
  }
`

export const ProfileWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-top: 80px;
`

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 200px;
    height: 200px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.875rem;
`

export const NameWrapper = styled.div`
  display: flex;
  line-height: 1.5rem;
`

export const NameKor = styled.p`
  color: #2C3E50;
  font-size: 1.25rem;
  font-family: 'Gothic Bold';
`

export const NameEng = styled.p`
  margin-left: 8px;
  color: #747474;
  font-size: 1rem;
  font-family: 'Mark Pro Book';
`

export const BirthDay = styled.p`
  margin-top: 0.125rem;
  color: #747474;
  font-size: 0.875rem;
  font-family: 'Mark Pro Book';
`

export const HistoryContentItem = styled.p`
  font-size: 1rem;
  font-family: 'Gothic Regular';
  line-height: 1.375rem;
  word-break: break-all;
`

export const HistpryContentWrapper = styled.div`
  width: 100%;

  ${HistoryContentItem} + ${HistoryContentItem} {
    margin-top: 0.625rem;
  }
`

export const HistoryItemTitle = styled.p<HistoryItemTitleProps>`
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-family: 'Mark Pro Bold';
  line-height: 1.25rem;

  ${({ isKorean }) => isKorean && css`
    font-family: 'Gothic Bold';
  `}
`

export const HistoryWrapper = styled.div`
  width: 100%;
`

export const SectionTitle = styled.p`
  margin-bottom: 1.25rem;
  color: #3370E8;
  font-size: 1.5rem;
  font-family: 'Mark Pro Bold';
  line-height: 2rem;
`

export const ContentSection = styled.section`
  width: 100%;
  margin-top: 100px;

  ${HistoryWrapper} + ${HistoryWrapper} {
    margin-top: 2.375rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 335px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-top: 200px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    max-width: 375px;
    padding-left: 20px;
  }
`

export const ContactPageInnerWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const ContactTitle = styled.div`
  font-family: 'Mark Pro Bold';
  font-size: 4rem;
  color: #3370E8;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 2.625rem;
  }
`

export const ContactSubTitle = styled.p`
  margin-top: 1.125rem;
  font-family: 'Mark Pro Light';
  font-size: 1.375rem;
  color: #2C3E50;

  @media ${({ theme }) => theme.media.tablet} {
    width: 25.5rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 18.5rem;
    margin-top: 0.875rem;
    font-size: 1rem;
  }
`

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.125rem;
  height: 3.125rem;
  background-color: #FFF;
  border: 2px solid black;
  border-radius: 50%;

  @media ${({ theme }) => theme.media.mobile} {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const ContactContent = styled.div<ContactContentProps>`
  margin-left: 1rem;
  font-family: 'Mark Pro Bold';
  font-size: 1.125rem;

  ${({ isKorean }) => isKorean && css`
    font-family: 'Gothic Bold';
  `}

  @media ${({ theme }) => theme.media.mobile} {
    margin-left: 0.75rem;
    font-size: 1rem;
  }
`

export const ContactInfoItem = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  &:hover {
    ${ContactIcon} {
      box-shadow: 10px 10px 16px 1px rgba(0, 0, 0, .2);
      border-color: #3370E8;

      @media ${({ theme }) => theme.media.mobile} {
        box-shadow: 6px 6px 12px 1px rgba(0, 0, 0, .2);
      }
    }

    ${ContactContent} {
      color: #3370E8;
    }
  }
`

export const ContactInfoWrapper = styled.div`
  margin-top: 7.625rem;

  ${ContactInfoItem} + ${ContactInfoItem} {
    margin-top: 1.5rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 5.5rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 5.25rem;

    ${ContactInfoItem} + ${ContactInfoItem} {
      margin-top: 1.125rem;
    }
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0 50px;
`

export const FooterLogoWrapper = styled.div`
  width: 26px;
  height: 26px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 20px;
    height: 20px;
  }
`

export const FooterLogo = styled(SVGIcon)`
  width: 100%;
`

export const FooterContent = styled.div`
  margin-left: 0.5rem;
  font-family: 'Gothic Regular';
  color: #B9B9B9;
`

export const FooterReserve = styled.p`
  line-height: 1.125rem;
  font-size: 0.8125rem;

  @media ${({ theme }) => theme.media.mobile} {
    line-height: 1rem;
    font-size: 0.625rem;
    font-family: 'Gothic Regular';
  }
`

export const FooterDescription = styled.p`
  line-height: 1.125rem;
  font-size: 0.8125rem;

  @media ${({ theme }) => theme.media.mobile} {
    line-height: 0.75rem;
    font-size: 0.4375rem;
  }
`
