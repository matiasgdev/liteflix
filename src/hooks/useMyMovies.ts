import {MyMovie} from '@/models/own-movie'
import {getMyMoviesList} from '@/services/movies-my'
import {useEffect} from 'react'
import {useAsync} from './useAsync'

export function useMyMovies() {
  const {run, status, data, setData} = useAsync<MyMovie[]>([], {
    onSuccess: movies => {
      setData(
        movies.map(movie => ({
          ...movie,
          imageSrc: `data:image/png;base64,${Buffer.from(
            movie.image.data,
          ).toString('base64')}`,
        })),
      )
    },
  })

  useEffect(() => {
    run(getMyMoviesList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {movies: data, status}
}
