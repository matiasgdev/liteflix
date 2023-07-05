'use client'

import {useState} from 'react'
import {useMovies} from '@/hooks/useMovies'
import {useMyMovies} from '@/hooks/useMyMovies'
import {MovieItem} from '@components/MovieItem'
import {
  MovieCategories,
  MovieCategoriesProps,
} from '@components/MovieCategories'
import {getReleaseYear} from '@/utils/getReleaseYear'

export const MovieList = () => {
  const [selected, setSelected] =
    useState<MovieCategoriesProps['selected']>('populares')
  const {movies} = useMovies()
  const {movies: myMovies} = useMyMovies()

  return (
    <section className="min-w-[220px]  min-h-[calc(100vh-60px-2rem)]">
      <MovieCategories {...{selected, setSelected}} />
      <ul className="flex flex-col gap-y-6">
        {selected === 'populares'
          ? movies.length &&
            movies.map(
              ({
                id,
                original_title,
                release_date,
                vote_average,
                poster_path,
              }) => (
                <MovieItem
                  key={id}
                  {...{
                    id,
                    voteAverage: vote_average,
                    releaseDate: getReleaseYear(release_date),
                    title: original_title,
                    src: poster_path,
                  }}
                />
              ),
            )
          : myMovies.length
          ? myMovies.map(({id, title, rate, createdAt, imageSrc}) => (
              <MovieItem
                key={id}
                id={id}
                title={title}
                releaseDate={getReleaseYear(createdAt)}
                voteAverage={rate}
                src={imageSrc as string}
              />
            ))
          : null}
      </ul>
    </section>
  )
}
