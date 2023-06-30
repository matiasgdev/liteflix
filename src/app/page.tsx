'use client'

import AddIcon from '@public/icons/plus.svg'
import {Profile} from '@/components/Profile'
import {MovieList} from '@/components/MovieList'
import {HighlightMovie} from '@/components/HighlightMovie'
import {Button} from '@/components/Button'
import Image from 'next/image'
import {useHighlightMovie} from '@/hooks/useHighlightMovie'
import {AddMovie} from '@/components/AddMovie'

export default function Home() {
  const {data: highlightMovie} = useHighlightMovie()
  return (
    <main className="max-w-6xl mr-auto ml-auto">
      {highlightMovie ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${highlightMovie?.poster_path}`}
          alt={highlightMovie?.original_title}
          className="absolute object-cover inset-0 z-[-10] brightness-50 backdrop-blur-sm saturate-50"
          fill
        />
      ) : null}
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
      <section className="flex justify-between gap-x-32 mt-8 pb-12">
        <div className="self-end mb-24">
          <HighlightMovie />
          <div className="flex items-center gap-x-6">
            <Button label="Reproducir" icon="play" className="bg-black" />
            <Button
              label="Mi lista"
              icon="plus"
              className="bg-black/50 border-[0.5px] border-white border-solid"
            />
          </div>
        </div>
        <MovieList />
        <AddMovie />
      </section>
    </main>
  )
}
