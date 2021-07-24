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
