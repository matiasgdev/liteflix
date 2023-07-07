import {Header} from '@/components/Header'
import {ModalProvider} from '@/context/ModalContext'
import {Hero} from '@/components/Hero'
import {PosterBackground} from '@/components/PosterBackground'
import {getHighlightMovie} from '@/services/movie-highlight.service'

export default async function Home() {
  const highlightMovie = await getHighlightMovie()
  return (
    <main className="relative max-w-6xl max-h-[80vh] md:min-h-screen md:max-h-max mr-auto ml-auto px-4">
      <div className="absolute min-h-[60px]  bottom-0 left-0 right-0 z-[0] bg-gradient-to-b from-black/0 to-black md:hidden" />
      <ModalProvider
        background={<PosterBackground highlightMovie={highlightMovie} />}
      >
        <Header />
        <Hero highlightMovie={highlightMovie} />
      </ModalProvider>
    </main>
  )
}
