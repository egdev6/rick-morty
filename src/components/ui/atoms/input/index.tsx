import { ChangeEvent, FC, useEffect, useRef } from 'react'
import { useCharacters } from 'hooks/use-characters'
import * as S from './styled'

interface InputProps {
  placeholder?: string
  handleChange: (val: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ placeholder, handleChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { characterName } = useCharacters()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = characterName || ''
    }
  }, [characterName])

  return (
    <S.InputContainer>
      <input placeholder={placeholder} onChange={val => handleChange(val)} ref={inputRef} />
    </S.InputContainer>
  )
}

export default Input
