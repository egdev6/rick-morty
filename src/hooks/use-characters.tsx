import { FC, PropsWithChildren, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import getCharacters from 'api/characters'
import Character from 'models/character'
import CharactersContext from 'components/system/context/characters'
import { useAppContext } from 'hooks/use-app-context'
import { queries } from 'constants/index'
import { getLastPage, getCurrentPage } from 'utils/pagination'
import type { AxiosRequestConfig } from 'axios'

export const CharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setLoading } = useAppContext()
  const [characters, setCharacters] = useState<Character[] | undefined>(undefined)
  const [characterName, setCharacterName] = useState<string | undefined>(undefined)

  const { data, isFetchingNextPage, isError, fetchNextPage, isSuccess } = useInfiniteQuery({
    queryKey: [queries.CHARACTERS, characterName],
    initialPageParam: 1,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getCharacters(pageParam.toString(), characterName as AxiosRequestConfig),
    getNextPageParam: lastPage => {
      const last = getLastPage(lastPage)
      const currentPage = getCurrentPage(lastPage)
      if (currentPage < last && !characterName) return currentPage + 1
      return undefined
    },
    retry: 1,
  })

  useEffect(() => {
    if (isFetchingNextPage) {
      setLoading(true)
    }
    if (isError) {
      setLoading(false)
    }
    if (isSuccess) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingNextPage, isError, isSuccess])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const charactersList = useMemo((): any => (data ? data.pages : undefined), [data])

  useEffect(() => {
    if (charactersList !== characters) {
      setCharacters(charactersList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charactersList])

  const goNextPage = useCallback(() => {
    fetchNextPage()
  }, [fetchNextPage])

  const changeName = useCallback(
    (name: string | undefined) => {
      setCharacterName(name)
    },
    [setCharacterName]
  )

  const value = useMemo(
    () => ({
      characters,
      setCharacters,
      goNextPage,
      changeName,
      characterName,
    }),
    [characters, setCharacters, goNextPage, changeName, characterName]
  )

  return <CharactersContext.Provider value={value}>{children}</CharactersContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacters = () => {
  return useContext(CharactersContext)
}
