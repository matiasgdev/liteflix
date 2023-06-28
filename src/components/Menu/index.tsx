import {useReducer} from 'react'
import Image from 'next/image'
import MenuIcon from '@/public/icons/menu.svg'

export const Menu = () => {
  const [isOpen, toggle] = useReducer(value => !value, false)

  return (
    <div className="relative">
      <button onClick={() => toggle()}>
        <Image src={MenuIcon} alt="Menú hamburguesa" />
      </button>
      {isOpen ? <div>menu list</div> : null}
    </div>
  )
}
