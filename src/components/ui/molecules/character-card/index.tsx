import { FC, useEffect, useState } from 'react'
import Character from 'models/character'
import Button from 'components/ui/atoms/button'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

interface CharacterCardProps {
  character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <S.CharacterCardContainer
      ref={ref}
      className={isVisible ? 'active' : ''}
      onClick={() => navigate('/character/' + character.id)}
    >
      <S.ImageContainer className='image-container'>
        <img src={character.image} alt={character.name} />
      </S.ImageContainer>
      <S.InfoContainer className='info-container'>
        <h5>{character.name}</h5>
        <p>{character.species}</p>
        <Button>
          <p>More info</p>
        </Button>
      </S.InfoContainer>
    </S.CharacterCardContainer>
  )
}

export default CharacterCard
