export const getBaseURL = () => {
  const url = new URL('https://api.themoviedb.org')
  url.searchParams.set('api_key', '6f26fd536dd6192ec8a57e94141f8b20')

  return url
}
