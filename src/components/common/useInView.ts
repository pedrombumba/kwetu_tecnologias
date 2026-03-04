import { useEffect, useRef, useState } from 'react'

export default function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  // animations disabled; always treat element as visible.
  const [inView] = useState(true)
  return { ref, inView }
}
