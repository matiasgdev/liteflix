import PlayIcon from '@public/icons/play.svg'

export const PlayButton = () => {
  return (
    <button className="absolute bottom-1/2 right-1/2 z-30 translate-y-1/2 translate-x-1/2 flex items-center justify-center border-2 border-white border-solid rounded-full w-10 h-10 bg-black/[0.5] ">
      <PlayIcon />
    </button>
  )
}
