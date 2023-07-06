export const getMovieURL = (path: string) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_MOVIEDB_URL)
  url.searchParams.set(
    'api_key',
    process.env.NEXT_PUBLIC_MOVIEDB_APIKEY as string,
  )

  return url
}

export const getApiURL = (path: string) => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_URL)
  return url
}
