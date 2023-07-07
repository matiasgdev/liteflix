import type {MyMovie} from '@/models/own-movie'

export const normalizeImgToBase64 = (movie: MyMovie): string => {
  return `data:image/png;base64,${Buffer.from(movie.image.data).toString(
    'base64',
  )}`
}
