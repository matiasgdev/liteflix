import axios, {AxiosProgressEvent} from 'axios'
import {getApiURL} from './base'

interface Options {
  onProgress: (event: AxiosProgressEvent) => void
}

export const addMovie = (data: FormData, opts: Options): Promise<null> =>
  new Promise(async (resolve, reject) => {
    const url = getApiURL()
    url.pathname = '/v1/movies'

    await axios
      .post(url.toString(), data, {
        onUploadProgress: event => {
          opts?.onProgress(event)
        },
      })
      .catch(() => {
        reject(`Something wrong when trying to POST ${url.pathname}`)
      })

    resolve(null)
  })
