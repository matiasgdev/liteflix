'use client'

import AddIcon from '@public/icons/plus.svg'
import {Profile} from '@/components/Profile'
import {MovieList} from '@/components/MovieList'

export default function Home() {
  return (
    <main className="mt-6 max-w-6xl mr-auto ml-auto">
      <header className="flex p-2 justify-between items-center">
        <div className="flex items-center gap-16">
          <h1 className="font-bebas text-aqua tracking-widest mt-1">
            Lite<span className="font-light">flix</span>
          </h1>
          <button className="flex items-center gap-3">
            <AddIcon />
            <span className="text-white leading-none mt-1 tracking-widest">
              Agregar película
            </span>
          </button>
        </div>
        <Profile />
      </header>
      <MovieList />
    </main>
  )
}
