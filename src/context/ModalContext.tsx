'use client'

import React, {createContext, useReducer, useRef} from 'react'

export interface ModalActions {
  setModalState: React.Dispatch<Partial<ModalContextState>>
}

export interface ModalContextState {
  isAddMovieModalOpen: boolean
  isMenuOpen: boolean
  isBackgroundLoading: boolean
}

const movieReducer = (
  prevState: ModalContextState,
  newState: Partial<ModalContextState>,
): ModalContextState => ({...prevState, ...newState})

export const ModalContext = createContext<
  (ModalContextState & ModalActions) | null
>(null)

const Provider = ModalContext.Provider

interface Props {
  initialState?: ModalContextState
  background: React.ReactElement
}

const defaultState: ModalContextState = {
  isAddMovieModalOpen: false,
  isMenuOpen: false,
  isBackgroundLoading: true,
}

export const ModalProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  background,
  initialState = {},
}) => {
  const initialStateRef = useRef({...initialState, ...defaultState})
  const [state, setModalState] = useReducer(
    movieReducer,
    initialStateRef.current,
  )

  return (
    <Provider value={{...state, setModalState}}>
      <>
        <div
          className={`${state.isBackgroundLoading ? 'invisible' : 'visible'}`}
        >
          {background}
        </div>
        {state.isBackgroundLoading ? null : children}
      </>
    </Provider>
  )
}

ModalContext.displayName = 'ModalContext'
