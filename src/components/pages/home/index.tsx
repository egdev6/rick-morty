import { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CharactersList from 'components/ui/organisms/characters-list'
import { useCharacters } from 'hooks/use-characters'
import { useAppContext } from 'src/hooks/use-app-context'
import * as S from './styled'

const HomePage: FC = () => {
  const { loading } = useAppContext()
  const { goNextPage } = useCharacters()
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && !loading) {
      goNextPage()
    }
  }, [inView, goNextPage, loading])

  return (
    <S.HomePageContainer data-test-id={'home-page-container'}>
      <CharactersList />
      <div ref={ref} />
    </S.HomePageContainer>
  )
}

export default HomePage
