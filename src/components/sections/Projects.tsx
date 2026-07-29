import { CheckCircle2, Maximize2, ShieldCheck, Sparkles, Target, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { ProjectImage } from '../../data/types'
import { projects } from '../../data/projects'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

export function Projects() {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null)
  const project = projects[0]

  useEffect(() => {
    if (!activeImage) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage])

  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Campus projects"
          title="校园项目经历"
          description="以真实业务问题为起点，展示从分析、方案设计到原型验证与成果交付的完整项目实践。"
        />

        <Reveal>
          <div className="flex flex-col gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-primary">{project.partner}</p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{project.summary}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-72 sm:justify-end">
              {project.tools.slice(0, 4).map((tool, index) => (
                <Tag key={tool} accent={index % 2 === 0 ? 'lavender' : 'sky'}>
                  {tool}
                </Tag>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {project.metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.05}
              className={`rounded-lg border border-black/5 px-4 py-5 ${
                index === 2
                  ? 'col-span-2 bg-cream-light md:col-span-1'
                  : index % 2 === 0
                    ? 'bg-lavender-light'
                    : 'bg-sky-light'
              }`}
            >
              <strong className="block break-words text-xl font-extrabold text-primary-dark sm:text-2xl">
                {metric.value}
              </strong>
              <span className="mt-2 block text-xs font-semibold leading-5 text-muted">{metric.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <ProjectDetail
                icon={<Target className="h-5 w-5" aria-hidden="true" />}
                title="项目背景"
                text={project.background}
              />
            </Reveal>
            <Reveal>
              <ProjectDetail
                icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
                title="我的角色"
                text={project.role}
              />
            </Reveal>
            <Reveal>
              <ProjectList
                icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                title="解决方案"
                items={project.solution}
              />
            </Reveal>
          </div>
          <Reveal>
            <ProjectList
              icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
              title="关键成果"
              items={project.results}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Project gallery</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink">项目截图</h3>
            </div>
            <p className="hidden text-xs text-muted sm:block">点击图片查看大图</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {project.images.map((image, index) => (
              <Reveal key={image.src} delay={index * 0.06}>
                <button
                  type="button"
                  className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-black/5 bg-[#F8F8F5] text-left shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  onClick={() => setActiveImage(image)}
                  aria-label={`查看大图：${image.alt}`}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full"
                    imageClassName="object-contain transition duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                    fallbackLabel="项目截图待替换"
                    fallbackHint={image.fileName}
                    variant="project"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary-dark shadow-sm backdrop-blur">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-5 backdrop-blur-sm sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null)
          }}
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8 sm:top-8"
            onClick={() => setActiveImage(null)}
            aria-label="关闭项目大图"
            autoFocus
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <ImageWithFallback
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[82vh] w-full max-w-5xl rounded-lg bg-white shadow-lift"
            imageClassName="max-h-[82vh] object-contain"
            fallbackLabel="项目截图待替换"
            fallbackHint={activeImage.fileName}
          />
        </div>
      )}
    </section>
  )
}

function ProjectDetail({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div>
      <h4 className="flex items-center gap-3 text-base font-extrabold text-ink">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-lavender-light text-primary">
          {icon}
        </span>
        {title}
      </h4>
      <p className="mt-4 pl-[52px] text-sm leading-7 text-muted">{text}</p>
    </div>
  )
}

function ProjectList({
  icon,
  title,
  items,
}: {
  icon: ReactNode
  title: string
  items: string[]
}) {
  return (
    <div>
      <h4 className="flex items-center gap-3 text-base font-extrabold text-ink">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-light text-primary-dark">
          {icon}
        </span>
        {title}
      </h4>
      <ul className="mt-4 space-y-3 pl-[52px]">
        {items.map((item) => (
          <li key={item} className="relative text-sm leading-7 text-muted before:absolute before:-left-4 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
