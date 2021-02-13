/* External dependencies */
import styled from 'styled-components'

export const HiddenScrollWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  touch-action: none;
  background-color: transparent;
`