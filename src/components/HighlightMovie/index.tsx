import {useHighlightMovie} from '@/hooks/useHighlightMovie'
import {formatDate} from '@/utils/formatDate'

export const HighlightMovie = () => {
  const {data: highlightMovie} = useHighlightMovie()

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
