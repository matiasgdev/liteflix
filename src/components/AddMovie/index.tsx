import {Portal} from '@components/Portal'
import CloseIcon from '@public/icons/close.svg'
import ClipIcon from '@public/icons/clip.svg'
import {
  ChangeEventHandler,
  DragEventHandler,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react'
import {Button} from '../Button'

const dropAndDragEvents = ['dragenter', 'dragover', 'dragleave', 'drop']

const preventDefaults = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
}

interface FormValues {
  file: File | null
  title: string | null
}

export const AddMovie = () => {
  const [{file, title}, setFormValues] = useReducer(
    (oldFormValues: FormValues, newFormValues: Partial<FormValues>) => ({
      ...oldFormValues,
      ...newFormValues,
    }),
    {file: null, title: null},
  )
  const dropAreaRef = useRef<HTMLDivElement>(null)

  const catchFile = useCallback((file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFormValues({file})
    }
  }, [])

  const handleInputFileChange: ChangeEventHandler<HTMLInputElement> = event => {
    const file = event.target.files?.[0] as File
    catchFile(file)
  }

  const handleOnDrop: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    catchFile(file)
  }

  useEffect(() => {
    dropAndDragEvents.forEach(eventName => {
      dropAreaRef.current?.addEventListener(eventName, preventDefaults, false)
      document.body.addEventListener(eventName, preventDefaults, false)
    })
  }, [])

  return (
    <Portal className="flex items-center justify-center bg-black/60 transition">
      <div className="relative flex flex-col items-center gap-y-12 w-full h-full max-w-[740px] max-h-[440px] bg-black px-16">
        <CloseIcon className="absolute right-5 top-5 cursor-pointer" />
        <h4 className="text-xl text-aqua text-center tracking-widest mt-8">
          Agregar película
        </h4>
        <div
          role="button"
          aria-label="drag and drop area"
          onDrop={handleOnDrop}
          className="flex items-center justify-center flex-col w-full min-h-[100px] border border-white border-dashed"
        >
          {file ? (
            <span className="text-white text-[12px]">{file.name}</span>
          ) : null}
          <label
            htmlFor="file"
            className="flex items-center gap-x-2 cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <ClipIcon />
            </div>{' '}
            <p className="text-white text-base tracking-widest mt-1">
              Agregá un archivo o arrastralo y soltalo aquí
            </p>
          </label>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={handleInputFileChange}
            className="hidden"
          />
        </div>
        <input
          type="text"
          placeholder="Título"
          onChange={event => {
            setFormValues({title: event.target.value})
          }}
          autoFocus
          className="max-w-[248px] w-full p-y-4 font-bebas text-center text-base text-white bg-transparent outline-none border-b border-white tracking-widest"
        />
        <Button
          label="Subir película"
          disabled={!(title && file)}
          className="bg-white [&_span]:text-black [&_span]:mt-1 flex-row disabled:opacity-50"
        />
      </div>
    </Portal>
  )
}
