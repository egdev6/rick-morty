import styled from 'styled-components'
import theme from 'src/config/theme'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background-color: ${theme.colors.greenOpacity};

  @media (max-width: ${theme.breakpoints.md}) {
    height: 60px;
    padding: 0 24px;
  }
`

export const LogoContainer = styled.div`
  width: auto;
  height: 60px;

  > svg {
    height: 60px;
    width: auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: auto;
    height: 30px;

    > svg {
      height: 30px;
      width: auto;
    }
  }
`

export const Menu = styled.nav`
  display: flex;
  gap: 20px;

  > button {
    cursor: pointer;

    > svg {
      width: 30px;
      height: 30px;
      stroke: ${theme.colors.terciary};
    }

    &:hover {
      > svg {
        transform: scale(1.2);
        transition: 0.4s ease-in-out;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 200px;
    gap: 10px;

    > div {
      min-width: auto;
      margin-left: 10px;
      > input {
        padding: 5px 10px;
      }
    }
  }
`
