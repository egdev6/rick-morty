import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import routes from 'config/routes'
import * as S from './styled'

const NotFoundPage: FC = () => {
  const navigate = useNavigate()

  return (
    <S.NotFoundPageContainer>
      <h1>404</h1>
      <h2>Not found Page</h2>
      <button onClick={() => navigate(routes.root)}>
        <h5>Return Home</h5>
      </button>
    </S.NotFoundPageContainer>
  )
}

export default NotFoundPage
