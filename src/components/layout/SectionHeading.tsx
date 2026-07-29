interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start'

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 md:mb-14 ${alignment}`}>
      <div className="flex items-center gap-3 text-xs font-bold uppercase text-primary">
        <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>}
    </div>
  )
}
