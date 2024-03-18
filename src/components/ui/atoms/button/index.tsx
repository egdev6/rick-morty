import { FC, PropsWithChildren } from 'react'
import * as S from './styled'

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <S.MoreInfo className='btn'>{children}</S.MoreInfo>
}

export default Button
