import http from '.'
import Character from 'models/character'

const getCharacters = async (pageParam: number, name: string): Promise<Character[] | undefined> => {
  try {
    let path = ''
    if (name) path = `name=${name}`
    else path = `page=${pageParam}`
    const response = await http.get(`character/?${path}`)
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error) return error.response
  }
}

export default getCharacters
