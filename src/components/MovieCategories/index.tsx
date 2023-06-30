import {useRef, useState} from 'react'
import Arrow from '@public/icons/arrow.svg'
import Check from '@public/icons/check.svg'
import {useOnClickOutside} from '@/hooks/useClickOutside'

const categories = [
  {id: 1, title: 'populares'},
  {id: 2, title: 'mis peliculas'},
]

export const MovieCategories = () => {
  const [isOpen, setIsOpenOrClose] = useState(false)
  const [selected, setSelected] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(containerRef, () => setIsOpenOrClose(false))

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-x-2 justify-center text-white font-light tracking-[.25rem] mb-6"
    >
      Ver:{' '}
      <span
        onClick={() => setIsOpenOrClose(!isOpen)}
        className="flex items-center gap-x-2 font-normal cursor-pointer"
      >
        {selected} <Arrow />
      </span>
      {isOpen && (
        <div className="absolute top-full right-4  z-50 p-6 mt-4 min-w-[240px] bg-black">
          <span className="border-[8px] absolute top-[-16px] right-8 w-0 h-0 border-solid  border-t-transparent border-r-transparent border-l-transparent border-b-black" />
          {categories.map(({id, title}) => {
            const isSelected = selected === title
            return (
              <div
                key={id}
                className="flex items-center justify-between [&:first-child]:mb-2"
              >
                <span
                  onClick={() => {
                    setSelected(title)
                    setIsOpenOrClose(!isOpen)
                  }}
                  className={`${
                    isSelected ? 'font-normal' : 'font-light'
                  }  cursor-pointer`}
                >
                  {title}
                </span>
                {isSelected ? <Check /> : null}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
