type Character = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}
export default Character
