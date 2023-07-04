import {
  ModalActions,
  ModalContext,
  ModalContextState,
} from '@/context/ModalContext'
import {useContext} from 'react'

export const useModal = () => {
  const context = useContext(ModalContext)

  if (typeof context === 'undefined') {
    throw new Error(
      `Error when trying to access ${ModalContext.displayName}. Wrapp your component inside the provider.`,
    )
  }

  return context as ModalContextState & ModalActions
}
