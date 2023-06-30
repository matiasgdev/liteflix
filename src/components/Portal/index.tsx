import React from 'react'
import {createPortal} from 'react-dom'

export const Portal: React.FC<
  React.PropsWithChildren<{
    wrapperId?: string
    className?: string
  }>
> = ({children, className, wrapperId = 'portal'}) => {
  let portalRoot = document.getElementById(wrapperId) as HTMLElement

  if (!portalRoot) {
    portalRoot = document.createElement('div')
    portalRoot.setAttribute('id', wrapperId)
    document.body.appendChild(portalRoot)
  }

  return createPortal(
    <div className={`fixed inset-0 z-[100] ${className}`} role="presentation">
      {children}
    </div>,
    portalRoot,
  )
}
