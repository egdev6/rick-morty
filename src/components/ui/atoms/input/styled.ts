import styled from 'styled-components'
import theme from 'src/config/theme'

export const InputContainer = styled.div`
  width: auto;
  min-width: 200px;
  > input {
    width: 100%;
    padding: 10px 15px;
    border-radius: 20px;
    border: 2px solid ${theme.colors.terciary};
    background-color: transparent;
    color: ${theme.colors.white};
    font-weight: 800;
    font-size: 1.1em;

    &::placeholder {
      opacity: 0.9;
      color: ${theme.colors.white};
      font-weight: 300;
    }
  }
`
