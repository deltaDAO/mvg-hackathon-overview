import { PlausibleFn } from '../@types/Plausible'

export interface UsePlausible {
  trackGoal: PlausibleFn
}

export function usePlausible(): UsePlausible {
  const trackGoal: PlausibleFn = (name, options) => {
    window.plausible(name, options)
  }

  return {
    trackGoal
  }
}
