import axios, {AxiosProgressEvent, CancelTokenSource} from 'axios'
import {getApiURL} from './base'

interface Options {
  onProgress: (event: AxiosProgressEvent) => void
  cancelToken: CancelTokenSource
}

export const addMovie = (data: FormData, opts: Options): Promise<null> =>
  new Promise(async (resolve, reject) => {
    const url = getApiURL('/v1/movies')

    await axios
      .post(url.toString(), data, {
        onUploadProgress: event => {
          opts?.onProgress(event)
        },
        cancelToken: opts.cancelToken.token,
      })
      .catch(reject)

    resolve(null)
  })
