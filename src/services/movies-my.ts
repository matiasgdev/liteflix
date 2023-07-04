import {MyMovie} from '@/models/own-movie'
import {getApiURL} from './base'

export const getMyMoviesList = (): Promise<MyMovie[]> =>
  new Promise(async (resolve, reject) => {
    const url = getApiURL()
    url.pathname = '/v1/movies'

    const response = await fetch(url.toString())

    if (!response.ok) {
      reject(`Something wrong when trying to GET ${url.pathname}`)
    }

    const movies: MyMovie[] = await response.json()

    resolve(movies.slice(0, 4))
  })
