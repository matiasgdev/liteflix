import {Variants} from 'framer-motion'

export const headerVariants: Variants = {
  open: {
    backgroundColor: '#242424',
    transition: {
      ease: 'easeIn',
      duration: 0.1,
    },
  },
  closed: {backgroundColor: 'rgba(24,24,24,0)'},
}
