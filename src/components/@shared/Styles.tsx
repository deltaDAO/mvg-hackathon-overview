import React, { ReactElement, ReactNode } from 'react'
import './styles.css'

export default function Styles({
  children
}: {
  children: ReactNode
}): ReactElement {
  return <>{children}</>
}
