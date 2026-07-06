'use client'

import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  /** Stagger the reveal by N milliseconds. */
  delay?: number
}

/**
 * Scroll-reveal wrapper. Fades + slides its children in the first time they
 * enter the viewport. The actual animation lives in `.reveal` / `.is-visible`
 * (css/tailwind.css) and is disabled under prefers-reduced-motion.
 */
export default function Reveal({ children, className = '', delay }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  })

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
