/* External dependencies */
import styled, { css } from 'styled-components'

interface HistoryItemTitleProps {
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
`
