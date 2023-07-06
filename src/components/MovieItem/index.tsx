import Image from 'next/image'
import Star from '@public/icons/star.svg'
import {motion} from 'framer-motion'
import {PlayButton} from '../PlayButton'

interface MovieItemProps {
  id: string | number
  src: string
  title: string
  releaseDate?: string
  voteAverage?: number
  index: number
}

export const MovieItem: React.FC<MovieItemProps> = ({
  src,
  title,
  releaseDate,
  voteAverage,
  index,
}) => {
  return (
    <motion.li
      variants={{
        hidden: {y: -20, opacity: 0},
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 0.3 * index,
            stiffness: 150,
          },
        },
      }}
      initial="hidden"
      animate="enter"
      exit="hidden"
      className={`relative min-h-[146px] rounded overflow-hidden group cursor-pointer`}
    >
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-[#000]/[0.8] group-hover:bg-[#000]/[0.6]" />
      <Image className="object-cover" alt={title} src={src} fill />
      <PlayButton />
      <h3 className="absolute max-w-max pt-1 bottom-2 z-30 translate-x-1/2 right-1/2 w-full px-4 text-center text-white font-medium tracking-widest truncate group-hover:bottom-1/2 group-hover:translate-y-[calc(50%+.5rem)] group-hover:translate-x-[0px] group-hover:max-w-[180px] group-hover:text-left group-hover:md:right-0 group-hover:left-[3rem]">
        {title}
      </h3>
      <div className="absolute bottom-2 inset-x-0 z-30 hidden group-hover:flex justify-between px-4">
        <div className="flex items-center gap-x-1 text-white">
          <Star />
          <span className="mt-1">{voteAverage}</span>
        </div>
        <div className="text-white">{releaseDate}</div>
      </div>
    </motion.li>
  )
}
