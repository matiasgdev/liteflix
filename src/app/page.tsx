import Image from 'next/image'
import {getHighlightMovie} from '@/services/movie-highlight.service'
import {Header} from '@/components/Header'
import {ModalProvider} from '@/context/ModalContext'
import {Hero} from '@/components/Hero'

export default async function Home() {
  const highlightMovie = await getHighlightMovie()
  return (
    <main className="max-w-6xl max-h-[80vh] md:min-h-screen md:max-h-max mr-auto ml-auto">
      {highlightMovie ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${highlightMovie?.poster_path}`}
          alt={highlightMovie?.original_title}
          className="absolute object-cover inset-0 z-[-10] brightness-50 backdrop-blur-sm saturate-50 animate-ping animate-once animate-reverse animate-duration-[2s] animate-ease-in"
          fill
        />
      ) : null}
      <ModalProvider>
        <Header />
        <Hero highlightMovie={highlightMovie} />
      </ModalProvider>
    </main>
  )
}
