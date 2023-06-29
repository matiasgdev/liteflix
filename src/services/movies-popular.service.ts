import {Movie} from '@/models/movie'
import {getBaseURL} from './base'

export const getPopularMovies = (limit = 4): Promise<Movie[]> =>
  new Promise(async (resolve, reject) => {
    const url = getBaseURL()
    url.pathname = '/3/movie/popular'

    const response = await fetch(url.toString())

    if (!response.ok) {
      reject(`Something wrong when trying to GET ${url.pathname}`)
    }

    const movies: {results: Movie[]} = await response.json()

    resolve(movies.results.slice(1, limit + 1))
  })
