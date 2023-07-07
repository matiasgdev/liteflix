import {motion} from 'framer-motion'
import {movieVariants} from './MovieItem.variants'

interface MovieItemSkeletonProps {
  index: number
}

export const MovieItemSkeleton: React.FC<MovieItemSkeletonProps> = ({
  index,
}) => {
  return (
    <motion.div
      variants={movieVariants(index)}
      initial="hidden"
      animate="enter"
      exit="hidden"
      className="h-[146px] bg-black rounded max-w-sm w-full mx-auto"
    >
      <div className="animate-pulse h-[146px] flex flex-col gap-y-4 justify-end items-center px-4 pb-4">
        <div className="rounded-full bg-slate-700 h-10 w-10" />
        <div className=" bg-slate-700 rounded py-1 w-[90%] h-3" />
      </div>
    </motion.div>
  )
}

export const MovieItemSkeletons = () => (
  <>
    {[
      <MovieItemSkeleton index={1} />,
      <MovieItemSkeleton index={2} />,
      <MovieItemSkeleton index={3} />,
    ]}
  </>
)
