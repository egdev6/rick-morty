import Character from './character'

export type AppContextValue = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export type CharactersContextValue = {
  characters: Character[] | undefined
  setCharacters: (characters: Character[] | undefined) => void
  goNextPage: () => void
  changeName: (name: string | undefined) => void
  characterName: string | undefined
}
