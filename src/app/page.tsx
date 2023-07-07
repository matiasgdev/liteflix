import {Header} from '@/components/Header'
import {ModalProvider} from '@/context/ModalContext'
import {Hero} from '@/components/Hero'
import {PosterBackground} from '@/components/PosterBackground'
import {getHighlightMovie} from '@/services/movie-highlight.service'

export default async function Home() {
  const highlightMovie = await getHighlightMovie()
  return (
    <main className="max-w-6xl max-h-[80vh] md:min-h-screen md:max-h-max mr-auto ml-auto px-4">
      <ModalProvider
        background={<PosterBackground highlightMovie={highlightMovie} />}
      >
        <Header />
        <Hero highlightMovie={highlightMovie} />
      </ModalProvider>
    </main>
  )
}
