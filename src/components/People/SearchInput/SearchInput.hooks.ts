import { useEffect } from 'react'

export const useDebounceCallback = (
  callback: () => void,
  dependencies: any[],
  delay: number = 300,
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (handler) {
        callback()
      }
    }, delay)

    return () => {
      clearTimeout(handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, delay, ...dependencies])
}
