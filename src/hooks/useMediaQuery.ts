import {useLayoutEffect, useState} from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatch] = useState(() => {
    const supportMatchMedia =
      typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'
    if (supportMatchMedia) {
      return window.matchMedia(query).matches
    }
    return false
  })

  useLayoutEffect(() => {
    const queryList = matchMedia(query)
    const handler = (e: MediaQueryListEvent) => {
      setMatch(e.matches)
    }
    queryList.addEventListener('change', handler)
    return () => {
      queryList.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}
