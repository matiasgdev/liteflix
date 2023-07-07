'use client'
import {motion} from 'framer-motion'
import type {Movie} from '@/models/movie'
import {Button} from '../Button'
import {HighlightMovie} from '../HighlightMovie'
import {MovieList} from '../MovieList'
import {AddMovieWrapper} from '../AddMovieWrapper'

interface HeroProps {
  highlightMovie: Movie
}

export const Hero: React.FC<HeroProps> = ({highlightMovie}) => {
  return (
    <section className="flex flex-col justify-between gap-x-32 mt-8 pb-12 md:flex-row">
      <div className="md:self-end mb-12 md:mb-24 max-w-full">
        <HighlightMovie highlightMovie={highlightMovie} />
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {
              duration: 1.5,
              type: 'spring',
            },
          }}
          exit={{opacity: 1}}
          className="flex flex-col items-center gap-x-6 gap-y-4 md:flex-row md:gap-y-0"
        >
          <Button
            label="Reproducir"
            icon="play"
            className="bg-black animate-fade-up animate-delay-500"
          />
          <Button
            label="Mi lista"
            icon="plus"
            className="bg-black/50 border-[0.5px] border-white border-solid animate-fade-up animate-delay-1000"
          />
        </motion.div>
      </div>
      <MovieList />
      <AddMovieWrapper />
    </section>
  )
}
