import { useState, useEffect, RefObject } from 'react'

export default function useOnScreen<T extends Element>(
  ref: RefObject<T>,
  rootMargin = '0px'
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    )

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref, rootMargin])

  return isIntersecting
}
