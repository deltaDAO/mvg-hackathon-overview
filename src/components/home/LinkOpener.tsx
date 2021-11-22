import { Link } from 'gatsby'
import React, { ReactElement, ReactNode, MouseEventHandler } from 'react'

export default function LinkOpener({
  uri,
  className,
  openNewTab,
  children,
  onClick
}: {
  uri: string
  className?: string
  openNewTab?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}): ReactElement {
  return openNewTab ? (
    <a
      href={uri}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link to={uri} className={className}>
      {children}
    </Link>
  )
}
