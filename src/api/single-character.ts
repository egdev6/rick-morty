import http from '.'
import Character from 'models/character'

const getSingleCharacter = async (id: string): Promise<Character | undefined> => {
  try {
    const { data } = await http.get(`character/${id}`)
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error) return error.response
  }
}

export default getSingleCharacter
