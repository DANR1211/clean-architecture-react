import axios from "axios"

export const testingService = (personaje: number) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${personaje}`)
}
