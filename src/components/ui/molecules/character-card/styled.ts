import styled from 'styled-components'
import theme from 'src/config/theme'

export const CharacterCardContainer = styled.button`
  appearance: none;
  width: 100%;
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: 0.4s ease-in-out;
  background-color: ${theme.colors.secondary};
  opacity: 0;
  transform: translateY(50px);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.1);
    border: 2px solid ${theme.colors.terciary};
    z-index: 2;

    > .image-container > img {
      transform: scale(1.3);
    }

    > .info-container {
      > .btn {
        background-color: ${theme.colors.terciary};
        > p {
          color: ${theme.colors.black};
        }
      }
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: 0.4s ease-in-out;

  > img {
    width: 100%;
    transition: 0.4s ease-in-out;
    object-fit: cover;
    z-index: 1;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 0.4s ease-in-out;
  padding: 0px 15px 20px;

  > h5 {
    color: ${theme.colors.white};
    margin-bottom: 10px;
    border-bottom: 2px solid ${theme.colors.terciary};
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > p {
    color: ${theme.colors.white};
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`
