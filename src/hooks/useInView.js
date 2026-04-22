import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that triggers once when an element enters the viewport.
 * Used to animate sections on scroll.
 */
export function useInView(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return { ref, inView }
}
