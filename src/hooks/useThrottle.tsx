/* External dependencies */
import { useCallback, useRef } from 'react'

function useThrottle(
  callback: (...args: any[]) => any,
  duration: number,
  dependencies: any[],
) {
  const isThrottling = useRef(false)

  const throttle = useCallback((...args) => {
    if (isThrottling.current) {
      return
    }

    isThrottling.current = true
    callback(...args)

    setTimeout(() => {
      isThrottling.current = false
    }, duration)
  }, dependencies)

  return throttle
}

export default useThrottle
