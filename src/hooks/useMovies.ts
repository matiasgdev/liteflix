import {Movie} from '@/models/movie'
import {getPopularMovies} from '@/services/movies-popular.service'
import {getImageResource} from '@/utils/getImageResource'
import {useEffect} from 'react'
import {useAsync} from './useAsync'

export function useMovies() {
  const {run, status, data, setData} = useAsync<Movie[]>([], {
    onSuccess: data => {
      setData(
        data.map(movie => ({
          ...movie,
          poster_path: getImageResource(movie.poster_path),
        })),
      )
    },
  })

  useEffect(() => {
    run(getPopularMovies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {movies: data, status}
}
