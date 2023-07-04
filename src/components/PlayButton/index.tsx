'use client'
import PlayIcon from '@public/icons/play.svg'

export const PlayButton = () => {
  return (
    <button className="absolute bottom-1/2 right-1/2 z-30 translate-y-1/2 translate-x-1/2 flex items-center justify-center border-2 border-white border-solid rounded-full w-10 h-10 bg-black/[0.5] group-hover:left-0 group-hover:scale-[0.85] group-hover:translate-x-3 group-hover:translate-y-[calc(50%+.5rem)]">
      <PlayIcon />
    </button>
  )
}
