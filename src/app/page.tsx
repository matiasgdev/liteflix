import {MovieList} from '@/components/MovieList'
import {HighlightMovie} from '@/components/HighlightMovie'
import {Button} from '@/components/Button'
import Image from 'next/image'
import {AddMovie} from '@/components/AddMovie'
import {getHighlightMovie} from '@/services/movie-highlight.service'
import {Header} from '@/components/Header'
import {ModalProvider} from '@/context/ModalContext'

export default async function Home() {
  const highlightMovie = await getHighlightMovie()
  return (
    <main className="max-w-6xl min-h-screen mr-auto ml-auto">
      {highlightMovie ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${highlightMovie?.poster_path}`}
          alt={highlightMovie?.original_title}
          className="absolute object-cover inset-0 z-[-10] brightness-50 backdrop-blur-sm saturate-50"
          fill
        />
      ) : null}
      <ModalProvider>
        <Header />
        <section className="flex justify-between gap-x-32 mt-8 pb-12">
          <div className="self-end mb-24">
            <HighlightMovie highlightMovie={highlightMovie} />
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
      </ModalProvider>
    </main>
  )
}
