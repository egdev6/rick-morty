import styled from 'styled-components'
import theme from 'src/config/theme'

interface Props {
  $isEmpty: boolean
}
export const CharactersListContainer = styled.div<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $isEmpty }) => ($isEmpty ? '1fr' : 'repeat(4, 1fr)')};
  grid-gap: 40px;

  > h4 {
    color: ${theme.colors.white};
    font-size: 2em;
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: ${({ $isEmpty }) => ($isEmpty ? '1fr' : 'repeat(2, 1fr)')};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`
