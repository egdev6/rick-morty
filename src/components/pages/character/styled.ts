import styled from 'styled-components'
import theme from 'src/config/theme'

export const CharacterPageContainer = styled.div`
  width: 100%;
  min-height: calc(100dvh - 230px);
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: calc(100dvh - 180px);
  }
`
