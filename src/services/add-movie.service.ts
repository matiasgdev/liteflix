import {getApiURL} from './base'

export const addMovie = (data: FormData): Promise<null> =>
  new Promise(async (resolve, reject) => {
    const url = getApiURL()
    url.pathname = '/v1/movies'

    const response = await fetch(url.toString(), {
      method: 'POST',
      body: data,
    })

    if (!response.ok) {
      reject(`Something wrong when trying to POST ${url.pathname}`)
    }

    resolve(null)
  })
