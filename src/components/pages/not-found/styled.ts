import styled from 'styled-components'
import theme from 'config/theme'

export const NotFoundPageContainer = styled.div`
  width: 100%;
  min-height: calc(100dvh - 230px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1,
  > h2 {
    color: ${theme.colors.white};
  }

  > button {
    appearance: none;
    width: auto;
    min-width: 250px;
    margin: 0 auto;
    padding: 10px 20px;
    border: 2px solid ${theme.colors.terciary};
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: ${theme.colors.white};
    font-size: 1em;
    transition: 0.4s ease-in-out;
    margin-top: 40px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.terciary};
      color: ${theme.colors.black};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: calc(100dvh - 180px);
  }
`
