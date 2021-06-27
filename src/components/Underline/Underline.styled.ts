/* External dependencies */
import styled, { css } from 'styled-components'

interface UnderlineProps {
  visible: boolean
}

export const UnderlineWrapper = styled.span`
  position: relative;
  width: fit-content;
`

export const TextWrapper = styled.span`
  z-index: 10000;
  transform: translate3d(0, 0, 1px);
`

export const Underline = styled.div<UnderlineProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  height: 5px;
  background-color: #FFF;
  transition: width 0.3s;
  transform: translate3d(0, 0, -10px);

  ${({ visible }) => visible && css`
    width: 100%;
  `}
`