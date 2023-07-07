'use client'
import Image from 'next/image'
import type {Movie} from '@/models/movie'
import {getImageResource} from '@/utils/getImageResource'
import {useModal} from '@/hooks/useModal'

interface PosterBackgroundProps {
  highlightMovie: Movie
}

export const PosterBackground: React.FC<PosterBackgroundProps> = ({
  highlightMovie,
}) => {
  const {isBackgroundLoading, setModalState} = useModal()
  return highlightMovie ? (
    <Image
      src={getImageResource(highlightMovie.poster_path)}
      alt={highlightMovie?.original_title}
      className={`absolute object-cover inset-0 z-[-10] brightness-50 backdrop-blur-sm saturate-50 ${
        isBackgroundLoading
          ? ''
          : 'animate-ping animate-once animate-reverse animate-duration-[2s] animate-ease-in'
      }`}
      fill
      onLoadingComplete={() => {
        setModalState({isBackgroundLoading: false})
      }}
      priority={false}
    />
  ) : null
}
