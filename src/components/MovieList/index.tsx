import Image from 'next/image'
import Star from '@public/icons/star.svg'
import {useMovies} from '@/hooks/useMovies'

import {PlayButton} from '@components/PlayButton'
import {MovieCategories} from '@components/MovieCategories'

export const MovieList = () => {
  const {movies} = useMovies()
  return (
    <section className="min-w-[220px]">
      <MovieCategories />
      {movies.length ? (
        <ul className="flex flex-col gap-y-6">
          {movies.map(movie => (
            <li
              key={movie.id}
              className={`relative min-h-[146px] rounded overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-[#000]/[0.8] group-hover:bg-[#000]/[0.6]" />
              <Image
                className="object-cover"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.original_title}
                fill
              />
              <PlayButton />
              <h3 className="absolute max-w-max pt-1 bottom-2 z-30 translate-x-1/2 right-1/2 w-full px-4 text-center text-white font-medium tracking-widest truncate group-hover:bottom-1/2 group-hover:translate-y-[calc(50%+.5rem)] group-hover:translate-x-[7rem] group-hover:max-w-[180px] group-hover:text-left">
                {movie.original_title}
              </h3>
              <div className="absolute bottom-2 inset-x-0 z-30 hidden group-hover:flex justify-between px-4">
                <div className="flex items-center gap-x-1 text-white">
                  <Star />
                  <span className="mt-1">{movie.vote_average}</span>
                </div>
                <div className="text-white">
                  {movie.release_date.split('-').shift()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
