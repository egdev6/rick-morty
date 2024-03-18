import { useMemo, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getSingleCharacter from 'api/single-character'
import Character from 'models/character'
import { useAppContext } from 'hooks/use-app-context'
import { queries } from 'constants/index'

const useSingleCharacter = (id: string): Character => {
  const { setLoading } = useAppContext()
  const { data, isFetching, isError, isSuccess } = useQuery({
    queryKey: [queries.SINGLE_CHARACTER, id],
    queryFn: () => getSingleCharacter(id),
  })

  useEffect(() => {
    if (isFetching) {
      setLoading(true)
    } else if (isError) {
      setLoading(false)
    } else if (isSuccess) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isError, isSuccess])

  const singleCharacter = useMemo(() => (data ? data : {}), [data])

  return singleCharacter as Character
}

// eslint-disable-next-line react-refresh/only-export-components
export default useSingleCharacter
