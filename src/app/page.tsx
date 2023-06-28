'use client'

import AddIcon from '@public/icons/plus.svg'
import {Profile} from '@/components/Profile'
import {MovieList} from '@/components/MovieList'
import {HighlightMovie} from '@/components/HighlightMovie'
import {Button} from '@/components/Button'

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
      <section className="flex  justify-between gap-x-32 mt-8 pb-12">
        <div className="self-end mb-24">
          <HighlightMovie />
          <div className="flex items-center gap-x-6">
            <Button label="Reproducir" />
            <Button label="Mi lista" icon="plus" />
          </div>
        </div>
        <MovieList />
      </section>
    </main>
  )
}
