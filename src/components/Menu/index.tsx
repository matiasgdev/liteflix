'use client'

import MenuIcon from '@public/icons/menu.svg'
import CloseIcon from '@public/icons/close.svg'
import NotificationIcon from '@public/notification.svg'
import {AnimatePresence, motion} from 'framer-motion'
import {useModal} from '@/hooks/useModal'
import {AddMovieButton} from '../AddMovieButton'
import {Portal} from '../Portal'
import {menuItems} from './const'

export const Menu = () => {
  const {isMenuOpen, setModalState} = useModal()
  const toggle = () => setModalState({isMenuOpen: !isMenuOpen})

  return (
    <div className="animate-fade-down">
      <button className="min-w-[36px]" onClick={toggle}>
        {!isMenuOpen ? <MenuIcon /> : <CloseIcon />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <Portal className="fixed h-full z-[100] top-[3.5rem] w-screen md:w-[50vw] right-0 md:top-0 bot-0 z-1000 md:pl-16 md:pr-24">
            <motion.div
              layout
              initial={{translateX: '50%'}}
              animate={{translateX: 0}}
              exit={{translateX: '100%'}}
              className="absolute h-full z-[100] w-full right-0 top-0 bot-0 bg-black z-1000 pl-6 pt-8 md:pl-16 pr-24"
            >
              <header className="hidden md:flex justify-between md:mt-1 mb-12">
                <div
                  className="flex items-center align-center cursor-pointer"
                  onClick={toggle}
                >
                  <CloseIcon />
                </div>
                <div className="flex gap-x-6 items-center">
                  <NotificationIcon />
                </div>
              </header>
              <ul className="flex flex-col gap-y-[40px] md:gap-y-6 mb-8">
                {menuItems.map(({id, title}) => (
                  <li key={id}>
                    <button className="text-white tracking-[.25rem] text-left antialiased">
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
              <AddMovieButton />
              <button className="text-white tracking-[.25rem] antialiased">
                Cerrar sesion
              </button>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  )
}
