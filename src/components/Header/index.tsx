'use client'
import {Profile} from '@/components/Profile'
import {AddMovieButton} from '../AddMovieButton'

export const Header = () => {
  return (
    <header className="flex p-2 justify-between items-center">
      <div className="flex items-center gap-16">
        <h1 className="font-bebas text-aqua tracking-widest mt-1">
          Lite<span className="font-light">flix</span>
        </h1>
        <AddMovieButton />
      </div>
      <Profile />
    </header>
  )
}
