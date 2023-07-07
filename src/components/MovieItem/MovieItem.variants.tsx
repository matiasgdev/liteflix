import {Variants} from 'framer-motion'

export const movieVariants = (index: number): Variants => ({
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
})
