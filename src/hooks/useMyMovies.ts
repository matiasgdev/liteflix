import {MyMovie} from '@/models/own-movie'
import {getMyMoviesList} from '@/services/movies-my.service'
import {normalizeImgToBase64} from '@/utils/normalizeImgToBase64'
import {useEffect} from 'react'
import {useAsync} from './useAsync'
import {useMovieContext} from './useMovieContext'

export function useMyMovies() {
  const {myMovies, setState} = useMovieContext()
  const {run, status} = useAsync<MyMovie[]>([], {
    onSuccess: movies => {
      movies = movies.map(movie => {
        movie.imageSrc = normalizeImgToBase64(movie)
        return movie
      })
      setState({myMovies: movies})
    },
  })

  useEffect(() => {
    run(getMyMoviesList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {movies: myMovies, status}
}
