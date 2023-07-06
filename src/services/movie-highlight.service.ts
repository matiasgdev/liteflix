import {Movie} from '@/models/movie'
import {getMovieURL} from './base'

export const getHighlightMovie = (): Promise<Movie> =>
  new Promise(async (resolve, reject) => {
    const url = getMovieURL('/3/movie/now_playing')

    const response = await fetch(url.toString())

    if (!response.ok) {
      reject(`Something wrong when trying to GET ${url.pathname}`)
    }

    const movies: {results: Movie[]} = await response.json()

    resolve(movies.results[0])
  })
