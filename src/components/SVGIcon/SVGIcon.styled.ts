/* External dependencies */
import styled, { css } from 'styled-components'
import { isNil } from 'lodash-es'

interface SVGIconWrapperProps {
  size?: number
}

export const SVGIconWrapper = styled.div<SVGIconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => !isNil(size) && css`
    width: ${size}px;
    height: ${size}px;
  `}
`

export const SVGIcon = styled.img`
  width: 100%;
  height: 100%;
`
