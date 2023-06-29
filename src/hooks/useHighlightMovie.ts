import {Movie} from '@/models/movie'
import {getHighlightMovie} from '@/services/movie-highlight.service'
import {useEffect} from 'react'
import {useAsync} from './useAsync'
import {useMovieContext} from './useMovieContext'

export function useHighlightMovie() {
  const {setState} = useMovieContext()
  const {run, status, data} = useAsync<Movie | null>(null)

  useEffect(() => {
    if (!data) {
      run(getHighlightMovie())
    } else {
      setState({highlight: data})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return {data, status}
}
