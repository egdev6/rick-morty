import { FC } from 'react'
import SingleCharacterCard from 'components/ui/molecules/single-character-card'
import { useParams } from 'react-router-dom'
import useSingleCharacter from 'hooks/use-single-character'
import * as S from './styled'

const CharacterPage: FC = () => {
  const { id } = useParams()
  const activeCharacter = useSingleCharacter(id || '')

  return (
    <S.CharacterPageContainer>
      <SingleCharacterCard character={activeCharacter} />
    </S.CharacterPageContainer>
  )
}

export default CharacterPage
