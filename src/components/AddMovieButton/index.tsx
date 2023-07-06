import AddIcon from '@public/icons/plus.svg'
import {useModal} from '@/hooks/useModal'

export const AddMovieButton = () => {
  const {setModalState} = useModal()
  return (
    <button
      className="flex items-center gap-3"
      onClick={() => setModalState({isAddMovieModalOpen: true})}
    >
      <AddIcon />
      <span className="text-white leading-none mt-1 tracking-widest">
        Agregar película
      </span>
    </button>
  )
}
