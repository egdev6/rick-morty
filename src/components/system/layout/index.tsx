import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from 'components/ui/atoms/loader'
import Header from 'components/ui/organisms/header'
import Footer from 'components/ui/organisms/footer'
import { useAppContext } from 'src/hooks/use-app-context'
import * as S from './styled'

const Layout: FC = (): JSX.Element | null => {
  const { loading } = useAppContext()

  return (
    <S.LayoutContainer>
      <Loader loading={loading} />
      <S.BackgroundFilter />
      <Header />
      <S.ContentContainer>
        <S.ContenWrapper>
          <Outlet />
        </S.ContenWrapper>
        <Footer />
      </S.ContentContainer>
    </S.LayoutContainer>
  )
}

export default Layout
