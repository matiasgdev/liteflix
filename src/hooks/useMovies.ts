import {Movie} from '@/models/movie'
import {getPopularMovies} from '@/services/movies-popular.service'
import {useEffect} from 'react'
import {useAsync} from './useAsync'

export function useMovies() {
  const {run, status, data} = useAsync<Movie[]>([])

  useEffect(() => {
    run(getPopularMovies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {movies: data, status}
}
