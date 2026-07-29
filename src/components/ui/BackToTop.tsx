import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 640)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white/95 text-primary-dark shadow-lift backdrop-blur transition hover:-translate-y-1 hover:bg-lavender-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transform-none sm:bottom-7 sm:right-7"
          aria-label="返回页面顶部"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
          }
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
