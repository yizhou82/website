import { useEffect, useRef } from 'react'

/**
 * Adds .visible when the element crosses the viewport (one-way).
 */
export function useSectionReveal(options = {}) {
  const ref = useRef(null)
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          io.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return ref
}
