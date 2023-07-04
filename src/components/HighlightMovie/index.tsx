'use client'
import type {Movie} from '@/models/movie'
import {formatDate} from '@/utils/formatDate'

interface Props {
  highlightMovie: Movie
}

export const HighlightMovie: React.FC<Props> = ({highlightMovie}) => {
  return (
    <div className="self-end max-w-full">
      <h3 className="font-light text-white text-xl tracking-[.25rem]">
        Disponible desde el{' '}
        <span className="font-normal">
          {highlightMovie?.release_date
            ? formatDate(highlightMovie.release_date)
            : null}
        </span>
      </h3>
      <h2 className="text-aqua font-bold text-[120px] tracking-[.25rem] truncate max-w-[800px]">
        {highlightMovie?.original_title}
      </h2>
    </div>
  )
}
