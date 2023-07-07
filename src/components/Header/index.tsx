'use client'
import {Profile} from '@/components/Profile'
import {motion} from 'framer-motion'
import {useModal} from '@/hooks/useModal'
import {useMediaQuery} from '@/hooks/useMediaQuery'
import {AddMovieButton} from '../AddMovieButton'
import {Menu} from '../Menu'
import {headerVariants} from './Header.variants'

export const Header = () => {
  const isDesktop = useMediaQuery('screen and (min-width: 768px)')
  const {isMenuOpen, isAddMovieModalOpen} = useModal()
  const anyModalIsOpen = isMenuOpen || isAddMovieModalOpen
  return (
    <motion.header
      variants={headerVariants}
      animate={anyModalIsOpen && !isDesktop ? 'open' : 'closed'}
      className={`flex py-4 md:p-0 md:pt-6 justify-between items-center max-h-[60px] md:bg-transparent ${
        anyModalIsOpen && !isDesktop
          ? 'fixed left-0 right-0 top-0 w-screen z-[100] px-4'
          : ''
      }`}
    >
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="flex items-center gap-16">
        <h1 className="font-bebas text-aqua tracking-widest mt-1  animate-fade-up">
          Lite<span className="font-light">flix</span>
        </h1>
        <div className="hidden md:block animate-fade-down animate-duration-1000">
          <AddMovieButton />
        </div>
      </div>
      <Profile />
    </motion.header>
  )
}
