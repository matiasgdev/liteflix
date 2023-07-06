'use client'

import {useReducer} from 'react'
import MenuIcon from '@public/icons/menu.svg'
import CloseIcon from '@public/icons/close.svg'
import NotificationIcon from '@public/notification.svg'
import ProfileIcon from '@public/profile.svg'
import {AnimatePresence, motion} from 'framer-motion'
import {AddMovieButton} from '../AddMovieButton'
import {Portal} from '../Portal'
import {menuItems} from './const'

export const Menu = () => {
  const [isOpen, toggle] = useReducer(value => !value, false)

  return (
    <div>
      <button onClick={() => toggle()}>
        <MenuIcon />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Portal className="absolute h-full z-[100] w-[50vw] right-0 top-0 bot-0z-1000 pl-16 pr-24">
            <motion.div
              layout
              initial={{translateX: '50%'}}
              animate={{translateX: 0}}
              exit={{translateX: '100%'}}
              className="absolute h-full z-[100] w-full right-0 top-0 bot-0 bg-black z-1000 pl-16 pr-24"
            >
              <header className="flex justify-between mt-12 mb-12">
                <div
                  className="flex items-center align-center cursor-pointer"
                  onClick={toggle}
                >
                  <CloseIcon />
                </div>
                <div className="flex gap-x-6 items-center">
                  <NotificationIcon />
                  <ProfileIcon />
                </div>
              </header>
              <ul className="flex flex-col gap-y-4 mb-8">
                {menuItems.map(({id, title}) => (
                  <li key={id}>
                    <button className="text-white tracking-[.25rem]">
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
              <AddMovieButton />
              <button className="mt-8 text-white tracking-[.25rem]">
                Cerrar sesion
              </button>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  )
}
