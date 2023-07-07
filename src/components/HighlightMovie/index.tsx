'use client'
import type {Movie} from '@/models/movie'
import {formatDate} from '@/utils/formatDate'

interface Props {
  highlightMovie: Movie
}

export const HighlightMovie: React.FC<Props> = ({highlightMovie}) => {
  return (
    <div className="self-end flex flex-col justify-end items-center mb-4 md:items-start max-w-full text-center min-h-[400px] md:text-left md:min-h-full md:mb-0 gap-y-4 md:gap-y-0 animate-fade animate-duration-1000">
      <h3 className="font-light text-white text-xl tracking-[.25rem]  max-w-[80%] md:max-w-full">
        Disponible desde el{' '}
        <span className="font-normal">
          {highlightMovie?.release_date
            ? formatDate(highlightMovie.release_date)
            : null}
        </span>
      </h3>
      <h2
        className="max-w-full text-aqua font-bold  tracking-[.25rem] md:truncate md:max-w-[800px] leading-none md:leading-normal"
        style={{
          fontSize: 'clamp(56px, 7vw, 120px)',
        }}
      >
        {highlightMovie?.original_title}
      </h2>
    </div>
  )
}
