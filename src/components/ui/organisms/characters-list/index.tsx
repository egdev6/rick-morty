import { FC, useEffect } from 'react'
import Character from 'src/models/character'
import CharacterCard from 'components/ui/molecules/character-card'
import * as S from './styled'
import { useInView } from 'react-intersection-observer'
import { useCharacters } from 'hooks/use-characters'

const CharactersList: FC = () => {
  const { characters, goNextPage } = useCharacters()
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      goNextPage()
    }
  }, [inView, goNextPage])

  if (!characters) return null

  const renderCharacters = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return characters.map((page: any) => {
      return page.results.map((character: Character) => <CharacterCard key={character.id} character={character} />)
    })
  }

  return (
    <S.CharactersListContainer $isEmpty={!characters[0].results}>
      {characters[0].results ? (
        <>
          {renderCharacters()}
          <div ref={ref} />
        </>
      ) : (
        <h4>No characters found</h4>
      )}
    </S.CharactersListContainer>
  )
}

export default CharactersList
