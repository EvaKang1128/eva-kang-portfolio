import { ArrowUpRight, Calendar, MapPin, Store } from 'lucide-react'
import { entrepreneurship } from '../../data/entrepreneurship'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

export function Entrepreneurship() {
  return (
    <section
      id="entrepreneurship"
      className="scroll-mt-24 overflow-hidden bg-cream-light py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Entrepreneurship"
          title="把用户洞察转化为经营结果"
          description="一段从 0 到 1 的独立经营实践，也是一场关于获客、转化、交付和复购的完整商业实验。"
        />

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-lg bg-primary text-cream shadow-lift">
                <Store className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-ink">{entrepreneurship.business}</h3>
                <p className="mt-1 text-sm font-bold text-primary-dark">{entrepreneurship.role}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                {entrepreneurship.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {entrepreneurship.location}
              </span>
            </div>

            <p className="mt-7 text-base leading-8 text-muted">{entrepreneurship.introduction}</p>
            <ul className="mt-6 space-y-3">
              {entrepreneurship.operations.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {entrepreneurship.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {entrepreneurship.results.map((result, index) => (
              <Reveal
                key={result.label}
                delay={index * 0.06}
                className={`flex min-h-40 flex-col justify-between rounded-lg border border-black/5 p-5 sm:min-h-48 sm:p-7 ${
                  index === 0
                    ? 'bg-white'
                    : index === 1
                      ? 'bg-sky-light'
                      : index === 2
                        ? 'bg-lavender-light'
                        : 'bg-primary text-white'
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase ${index === 3 ? 'text-white/75' : 'text-primary'}`}
                >
                  0{index + 1}
                </span>
                <div>
                  <strong
                    className={`block break-words text-2xl font-extrabold sm:text-3xl ${
                      index === 3 ? 'text-white' : 'text-primary-dark'
                    }`}
                  >
                    {result.value}
                  </strong>
                  <span
                    className={`mt-2 block text-sm font-semibold leading-6 ${
                      index === 3 ? 'text-white/85' : 'text-muted'
                    }`}
                  >
                    {result.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
