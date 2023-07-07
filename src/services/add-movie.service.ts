import {MyMovie} from '@/models/own-movie'
import axios, {
  AxiosProgressEvent,
  AxiosResponse,
  CancelTokenSource,
} from 'axios'
import {getApiURL} from './base'

interface Options {
  onProgress: (event: AxiosProgressEvent) => void
  cancelToken: CancelTokenSource
}

export const addMovie = (data: FormData, opts: Options): Promise<MyMovie> =>
  new Promise(async (resolve, reject) => {
    const url = getApiURL('/v1/movies')

    const res = (await axios
      .post(url.toString(), data, {
        onUploadProgress: event => {
          opts?.onProgress(event)
        },
        cancelToken: opts.cancelToken.token,
      })
      .catch(reject)) as AxiosResponse<MyMovie>

    resolve(res.data)
  })
