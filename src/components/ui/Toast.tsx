import { Check } from 'lucide-react'

interface ToastProps {
  visible: boolean
  message: string
}

export function Toast({ visible, message }: ToastProps) {
  return (
    <div
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-lift transition-all duration-200 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <Check className="h-4 w-4 text-cream" aria-hidden="true" />
      {message}
    </div>
  )
}
