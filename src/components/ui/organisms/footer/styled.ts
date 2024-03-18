import styled from 'styled-components'
import theme from 'src/config/theme'

export const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 48px;
  background-color: ${theme.colors.greenOpacity};
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: ${theme.colors.white};
    text-align: center;
    font-size: 1.2em;
    > a {
      font-weight: bold;
      text-decoration: none;
      color: ${theme.colors.white};
      margin-right: 5px;
      &:hover {
        color: ${theme.colors.terciary};
      }
    }
  }
`
