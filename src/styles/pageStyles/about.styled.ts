/* External dependencies */
import styled from 'styled-components'

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

export const ContentSection = styled.section`
  margin-top: 100px;
`