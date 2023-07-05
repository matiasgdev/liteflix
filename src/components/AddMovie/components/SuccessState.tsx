import {Button} from '@/components/Button'
import {useModal} from '@/hooks/useModal'

interface Props {
  title: string
}

export const SuccessState = ({title}: Props) => {
  const {setModalState} = useModal()
  return (
    <div className="flex flex-1 flex-col justify-start items-center mt-16 mb-12 animate-jump-in animate-duration-200">
      <h2 className="font-bebas text-[34px] text-aqua tracking-widest mt-1 mb-[52px]">
        Lite<span className="font-light">flix</span>
      </h2>
      <div className="flex flex-col gap-y-4 items-center mb-[72px]">
        <p className="text-white text-[24px] font-bold text-xl tracking-[.25rem]">
          ¡Felicitaciones!
        </p>
        <p className="text-white text-[20px] text-xl tracking-[.25rem]">
          {title} fue correctamente subida.
        </p>
      </div>
      <Button
        label="Ir al home"
        type="submit"
        onClick={() => setModalState({isAddMovieModalOpen: false})}
        className="justify-center bg-white [&_span]:text-black [&_span]:mt-1"
      />
    </div>
  )
}
