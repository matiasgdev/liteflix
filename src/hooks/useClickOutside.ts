import {RefObject, useEffect, useRef} from 'react'

export type ClickOutsideHandler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: ClickOutsideHandler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  const savedHandler = useRef(handler)
  savedHandler.current = handler

  useEffect(() => {
    const el: T | Window = ref?.current ?? window

    if (!(el && el.addEventListener)) {
      return
    }

    const handler = (event: MouseEvent): void => {
      if (!el || (el as T).contains(event.target as Node)) {
        return
      }
      savedHandler.current(event)
    }

    window.addEventListener(mouseEvent, handler)

    return () => {
      window.removeEventListener(mouseEvent, handler)
    }
  }, [mouseEvent, ref])
}
