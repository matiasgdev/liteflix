'use client'

import {Portal} from '@components/Portal'
import axios from 'axios'
import CloseIcon from '@public/icons/close.svg'
import ClipIcon from '@public/icons/clip.svg'
import {
  ChangeEventHandler,
  DragEventHandler,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import {useModal} from '@/hooks/useModal'
import {useAsync} from '@/hooks/useAsync'
import {addMovie} from '@/services/add-movie.service'
import {Button} from '../Button'

const dropAndDragEvents = ['dragenter', 'dragover', 'dragleave', 'drop']

const preventDefaults = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
}

interface FormValues {
  file: Blob | null
  title: string
}

const defaultState: FormValues = {
  file: null,
  title: '',
}

export const AddMovie = () => {
  const [{file, title}, setFormValues] = useReducer(
    (oldFormValues: FormValues, newFormValues: Partial<FormValues>) => ({
      ...oldFormValues,
      ...newFormValues,
    }),
    {file: null, title: ''},
  )
  const [progress, setProgress] = useState(0)
  const dropAreaRef = useRef<HTMLDivElement>(null)
  const cancelToken = useRef(axios.CancelToken.source())
  const {isAddMovieModalOpen, setModalState} = useModal()
  const {run, status, reset} = useAsync(null, {
    onSuccess: () => {
      setProgress(100)
      setFormValues(defaultState)
    },
  })

  const catchFile = useCallback((file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFormValues({file})
    }
  }, [])

  const handleInputFileChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const file = event.target.files?.[0] as File
        catchFile(file)
      },
      [catchFile],
    )

  const handleOnDrop: DragEventHandler<HTMLDivElement> = useCallback(
    event => {
      event.preventDefault()
      const file = event.dataTransfer.files[0]
      catchFile(file)
    },
    [catchFile],
  )

  const cancelRequest = useCallback(() => {
    cancelToken.current.cancel()
    setFormValues(defaultState)
    reset()
    cancelToken.current = axios.CancelToken.source()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnConfirm = useCallback(() => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('image', file as Blob, 'image')

    run(
      addMovie(formData, {
        onProgress: event => {
          setProgress(
            Math.round((event.loaded * 100) / (event.total as number)),
          )
        },
        cancelToken: cancelToken.current,
      }),
    )
  }, [title, file, run, cancelToken])

  useEffect(() => {
    dropAndDragEvents.forEach(eventName => {
      dropAreaRef.current?.addEventListener(eventName, preventDefaults, false)
      document.body.addEventListener(eventName, preventDefaults, false)
    })
  }, [])

  if (!isAddMovieModalOpen) return null

  return (
    <Portal className="flex items-center justify-center bg-black/60 transition">
      <div className="relative flex flex-col items-center gap-y-12 w-full h-full max-w-[740px] max-h-[440px] bg-black px-16">
        <CloseIcon
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setModalState({isAddMovieModalOpen: false})}
        />
        <h4 className="text-xl text-aqua text-center tracking-widest mt-8">
          Agregar película
        </h4>
        {status === 'pending' || status === 'resolved' ? (
          <div className="flex flex-col gap-y-2 w-full">
            <p className="text-white tracking-widest mt-2">
              {status === 'resolved' ? 'Cargado' : 'Cargando'} {progress}%
            </p>
            <div className="relative flex items-center w-full h-[10px] overflow-hidden">
              <div
                className={`absolute h-full bg-aqua z-10`}
                style={{width: `${progress}%`}}
              />
              <div className="bg-white/50 w-full h-1 z-0" />
            </div>
            <div
              className={`self-end ${
                status === 'resolved' ? 'text-aqua' : 'text-white'
              } tracking-widest cursor-pointer`}
              onClick={() => {
                if (status === 'pending') {
                  cancelRequest()
                }
              }}
            >
              {status === 'resolved'
                ? '¡Listo!'
                : status === 'pending'
                ? 'Cancelar'
                : 'Reintentar'}
            </div>
          </div>
        ) : (
          <div
            role="button"
            aria-label="drag and drop area"
            onDrop={handleOnDrop}
            className={`flex items-center justify-center flex-col w-full min-h-[100px] border ${
              file ? 'border-aqua' : 'border-white'
            } border-dashed`}
          >
            {file && <span className="text-aqua text-[12px]">{file.name}</span>}
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
        )}
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => {
            setFormValues({title: event.target.value})
          }}
          autoFocus
          className="max-w-[248px] w-full p-y-4 font-bebas text-center text-base text-white bg-transparent outline-none border-b border-white tracking-widest"
        />
        <Button
          label="Subir película"
          type="submit"
          onClick={handleOnConfirm}
          disabled={!(title && file) || status === 'pending'}
          className="bg-white [&_span]:text-black [&_span]:mt-1 flex-row disabled:opacity-50"
        />
      </div>
    </Portal>
  )
}
