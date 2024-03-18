import { FC, useEffect, useState } from 'react'
import Character from 'models/character'
import { useInView } from 'react-intersection-observer'
import * as S from './styled'
import { useAppContext } from 'src/hooks/use-app-context'

interface SingleCharacterCardProps {
  character: Character
}

const SingleCharacterCard: FC<SingleCharacterCardProps> = ({ character }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { loading } = useAppContext()
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && !loading) {
      setTimeout(() => {
        setIsVisible(true)
      }, 400)
    }
  }, [inView, loading])

  if (!character) return null

  return (
    <S.SingleCharacterCardContainer ref={ref} className={isVisible ? 'active' : ''}>
      <S.ImageContainer className='image-container'>
        <img src={character.image} alt={character.name} />
      </S.ImageContainer>
      <S.InfoContainer className='info-container'>
        <h5>{character.name}</h5>
        <S.InfoTable className='info-table'>
          <S.InfoColumn>
            <S.InfoRow>
              <p>Gender:</p>
              <p>{character.gender}</p>
            </S.InfoRow>
            <S.InfoRow>
              <p>Species:</p>
              <p>{character.species}</p>
            </S.InfoRow>
            <S.InfoRow>
              <p>Status:</p>
              <p>{character.status}</p>
            </S.InfoRow>
          </S.InfoColumn>
          <S.InfoColumn>
            <S.InfoRow>
              <p>Origin:</p>
              <p>{character.origin ? character.origin.name : ''}</p>
            </S.InfoRow>
            <S.InfoRow>
              <p>Location:</p>
              <p>{character.location ? character.location.name : ''}</p>
            </S.InfoRow>
          </S.InfoColumn>
        </S.InfoTable>
      </S.InfoContainer>
    </S.SingleCharacterCardContainer>
  )
}

export default SingleCharacterCard
