import {getConfig} from '@/utils/getConfig'

export const getMovieURL = (path: string) => {
  const url = new URL(path, getConfig('MOVIEDB_URL'))
  url.searchParams.set('api_key', getConfig('MOVIEDB_APIKEY'))

  return url
}

export const getApiURL = (path: string) => {
  const url = new URL(path, getConfig('API_URL'))
  return url
}
