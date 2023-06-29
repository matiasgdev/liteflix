import {
  MovieActions,
  MovieContext,
  MovieContextState,
} from '@/context/MoviesContext'
import {useContext} from 'react'

export const useMovieContext = () => {
  const context = useContext(MovieContext)

  if (typeof context === 'undefined') {
    throw new Error(
      `Error when trying to access ${MovieContext.displayName}. Wrapp your component inside the provider.`,
    )
  }

  return context as MovieContextState & MovieActions
}
