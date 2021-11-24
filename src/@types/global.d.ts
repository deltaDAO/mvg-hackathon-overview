declare module '*.module.css'

declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
}

// Plausible Object
type PlausibleFn = import('./Plausible').PlausibleFn
declare interface Window {
  plausible: PlausibleFn
}
