import styled from 'styled-components'
import theme from 'src/config/theme'

interface Props {
  $isLogged?: boolean
}
export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  background-image: url('/src/assets/images/background.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
`

export const BackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.backgroundOpacity};
  z-index: 0;
`

export const ContentContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  min-height: calc(100dvh - 50px);
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    padding-top: 80px;
  }
`

export const ContenWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100% - 50px);
  max-width: 1200px;
  padding: 48px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 24px;
  }
`
