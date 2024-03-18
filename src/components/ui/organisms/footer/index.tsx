import { FC } from 'react'
import * as S from './styled'

const Footer: FC = () => {
  return (
    <S.FooterContainer data-test-id='footer-container'>
      <p data-test-id='footer-text'>
        Web realizada por{' '}
        <a href='https://www.linkedin.com/in/egdev/' target='_blank' rel='noreferrer'>
          Enrique Gómez
        </a>
        2024
      </p>
    </S.FooterContainer>
  )
}

export default Footer
