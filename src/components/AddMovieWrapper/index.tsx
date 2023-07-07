import {useModal} from '@/hooks/useModal'
import {AddMovie} from './AddMovie.modal'

export const AddMovieWrapper = () => {
  const {isAddMovieModalOpen} = useModal()
  return isAddMovieModalOpen ? <AddMovie /> : null
}
