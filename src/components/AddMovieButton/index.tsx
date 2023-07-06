import AddIcon from '@public/icons/plus.svg'
import {useModal} from '@/hooks/useModal'
import {useMediaQuery} from '@/hooks/useMediaQuery'

export const AddMovieButton = () => {
  const {setModalState} = useModal()
  const isDesktop = useMediaQuery('screen and (min-width: 768px)')

  return (
    <button
      className="flex items-center gap-3 my-16"
      onClick={() =>
        setModalState({
          isAddMovieModalOpen: true,
          ...(isDesktop ? {} : {isMenuOpen: false}),
        })
      }
    >
      <AddIcon />
      <span className="text-white leading-none mt-1 tracking-[0.25rem]">
        Agregar película
      </span>
    </button>
  )
}
