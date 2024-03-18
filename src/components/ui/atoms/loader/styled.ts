import styled from 'styled-components'
import theme from 'src/config/theme'

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.backgroundOpacity};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  pointer-events: none;

  > svg {
    > path {
      stroke-width: 8;
    }
  }
`
