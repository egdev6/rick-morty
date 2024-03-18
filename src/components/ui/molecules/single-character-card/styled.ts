import styled from 'styled-components'
import theme from 'src/config/theme'

export const SingleCharacterCardContainer = styled.div`
  width: 100%;
  transition: 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.6s ease-in-out;

  &.active {
    .image-container {
      transform: translateY(0);
      opacity: 1;
    }
    .info-container {
      width: calc(100% - 400px);
      padding: 0px 15px 20px;

      > h5,
      .info-table {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;

    .info-container {
      width: 100% !important;
      max-width: 400px;
      padding: 0px 15px 20px;
      transform: translateY(300px);
      transition: 0.4s ease-in-out;
      opacity: 0;
    }

    &.active {
      .image-container {
        transform: translateY(0);
        opacity: 1;

        > img {
          border-radius: 20px 20px 0 0;
        }
      }
      .info-container {
        transform: translateY(0);
        opacity: 1;

        > h5,
        .info-table {
          opacity: 1;
        }
      }
    }
  }
`

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  transition: 0.4s ease-in-out;
  border-radius: 20px;
  transform: translateY(200px);
  opacity: 0;

  > img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
    height: 300px;
    border-radius: 20px 20px 0 0;
  }
`

export const InfoContainer = styled.div`
  width: 0;
  overflow: hidden;
  min-height: 360px;
  background-color: ${theme.colors.secondary};
  text-align: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 0.4s ease-in-out 0.6s;
  padding: 0px;

  > h5 {
    color: ${theme.colors.white};
    margin-bottom: 10px;
    border-bottom: 2px solid ${theme.colors.terciary};
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.4s ease-in-out 1s;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 600px;
    border-radius: 0 0 20px 20px;
    min-height: auto;
  }
`

export const InfoTable = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 20px;
  opacity: 0;
  transition: 0.4s ease-in-out 1s;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`
export const InfoColumn = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0;
  }
`
export const InfoRow = styled.div`
  width: 100%;
  min-height: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > p {
    font-size: 1.2em;
    font-weight: 700;
    color: ${theme.colors.white};
    &:last-child {
      font-weight: 300;
      margin-left: 10px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`
