/* External dependencies */
import styled, { css } from 'styled-components'

interface DelayShowWrapperProps {
  visible: boolean
}

export const DelayShowWrapper = styled.div<DelayShowWrapperProps>`
  opacity: 0;
  transition: opacity 0s, transform 0s;
  transform: translateY(-20%);

  ${({ visible }) => visible && css`
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 1s, transform 1s;
  `}
`