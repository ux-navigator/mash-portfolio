/* External dependencies */
import styled, { css } from 'styled-components'

interface FilterProps {
  active: boolean;
}

export const ProjectContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 144px;
`

export const ProjectTitle = styled.div`
  margin-top: 50px;
  font-family: 'Gothic Bold';
  font-size: 38px;
  line-height: 54px;
`

export const ProjectSubTitle = styled.p`
  margin-top: 10px;
  color: #4F5A65;
  font-family: 'Gothic Regular';
  font-size: 20px;
`

export const Filter = styled.div<FilterProps>`
  padding: 2px 0;
  color: #3370E8;
  font-family: 'Mark Pro Bold';
  font-size: 40px;
  white-space: nowrap;
  border-bottom: 4px solid white;

  ${({ active }) => active && css`
    border-bottom-color: #3370E8;
  `}
`

export const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  overflow-x: scroll;

  ${Filter} + ${Filter} {
    margin-left: 60px;
  }
`

export const ProjectListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 68px;
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
  height: 378px;
  box-shadow: 0px 4px 16px rgba(25, 31, 41, 0.16);
  cursor: pointer;
`

export const ProjectMainImage = styled.div`
  width: 100%;
  height: 329px;
`

export const Tag = styled.div`
  padding: 7px 10px;
  box-sizing: border-box;
  font-family: 'Mark Pro Light';
  font-size: 12px;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
`

export const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 16px;
  box-sizing: border-box;

  ${Tag} + ${Tag} {
    margin-left: 10px;
  }
`
