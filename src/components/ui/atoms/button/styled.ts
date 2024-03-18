import styled from 'styled-components'
import theme from 'config/theme'

export const MoreInfo = styled.button`
  appearance: none;
  width: auto;
  min-width: 150px;
  margin: 0 auto;
  padding: 10px 20px;
  border: 2px solid ${theme.colors.terciary};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: 0.4s ease-in-out;
  cursor: pointer;

  > p {
    color: ${theme.colors.white};
    font-size: 1em;
    font-weight: 400;
  }

  &:hover {
    background-color: ${theme.colors.terciary};
    > p {
      color: ${theme.colors.black};
    }
  }
`
