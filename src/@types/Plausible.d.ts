export interface PlausibleOptions {
  callback?: () => void
  props?: { [key: string]: string }
}

export type PlausibleFn = (name: string, options?: PlausibleOptions) => void
