import { ChangeEvent, FC, useCallback } from 'react'
import Logo from 'images/logo.svg?react'
import { Link, useLocation } from 'react-router-dom'
import Button from 'components/ui/atoms/button'
import Input from 'components/ui/atoms/input'
import { useCharacters } from 'hooks/use-characters'
import Clear from 'images/clear.svg?react'
import routes from 'config/routes'
import * as S from './styled'

const Header: FC = () => {
  const location = useLocation()
  const { changeName } = useCharacters()

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.value.length > 2) {
      changeName(e.target.value)
    } else {
      changeName(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleReset = () => {
    changeName(undefined)
  }

  return (
    <S.HeaderContainer data-test-id='header-container'>
      <S.LogoContainer>
        <Logo data-test-id='header-logo' />
      </S.LogoContainer>
      <S.Menu>
        {location.pathname === '/' ? (
          <>
            <Input handleChange={handleChange} placeholder={'Search by name'} data-test-id='input-name' />
            <button onClick={() => handleReset()} data-test-id='clear-button'>
              <Clear />
            </button>
          </>
        ) : (
          <Link to={routes.root} data-test-id='return-button'>
            <Button>
              <p>Volver</p>
            </Button>
          </Link>
        )}
      </S.Menu>
    </S.HeaderContainer>
  )
}

export default Header
