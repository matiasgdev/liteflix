'use client'

import type {Movie} from '@/models/movie'
import React, {createContext, useReducer, useRef} from 'react'

export interface MovieActions {
  setState: React.Dispatch<Partial<MovieContextState>>
}

export interface MovieContextState {
  highlight?: Movie
  favourites?: Movie[]
}

const movieReducer = (
  prevState: MovieContextState,
  newState: Partial<MovieContextState>,
): MovieContextState => ({...prevState, ...newState})

export const MovieContext = createContext<
  (MovieContextState & MovieActions) | null
>(null)

const Provider = MovieContext.Provider

interface Props {
  initialState?: MovieContextState
}

const defaultState: MovieContextState = {}

export const MovieProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  initialState = {},
}) => {
  const initialStateRef = useRef({...initialState, ...defaultState})
  const [{favourites, highlight}, setState] = useReducer(
    movieReducer,
    initialStateRef.current,
  )

  return (
    <Provider value={{favourites, highlight, setState}}>{children}</Provider>
  )
}

MovieContext.displayName = 'MovieContext'
