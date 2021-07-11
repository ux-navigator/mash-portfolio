/* External dependencies */
import styled from 'styled-components'

export const ProjectContainer = styled.div`
  width: 100%;
  padding-top: 144px;

  @media ${({ theme }) => theme.media.mobile} {
    padding-top: 60px;
  }
  & > img {
    margin-top: -4px;
  }

`