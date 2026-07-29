import type { PropsWithChildren } from 'react'
import type { Accent } from '../../data/types'

interface TagProps extends PropsWithChildren {
  accent?: Accent | 'neutral'
}

const accentClasses: Record<NonNullable<TagProps['accent']>, string> = {
  lavender: 'bg-lavender-light text-primary-dark border-lavender',
  cream: 'bg-cream-light text-[#6E5512] border-cream',
  sky: 'bg-sky-light text-[#285E79] border-sky',
  neutral: 'bg-white text-muted border-black/10',
}

export function Tag({ children, accent = 'neutral' }: TagProps) {
  return (
    <span
      className={`inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-xs font-semibold ${accentClasses[accent]}`}
    >
      {children}
    </span>
  )
}
