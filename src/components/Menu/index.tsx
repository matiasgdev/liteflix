'use client'

import {useReducer} from 'react'
import MenuIcon from '@public/icons/menu.svg'

export const Menu = () => {
  const [isOpen, toggle] = useReducer(value => !value, false)

  return (
    <div className="relative">
      <button onClick={() => toggle()}>
        <MenuIcon />
      </button>
      {isOpen ? <div>menu list</div> : null}
    </div>
  )
}
