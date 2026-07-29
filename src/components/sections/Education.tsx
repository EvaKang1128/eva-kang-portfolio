import { Award, Calendar, MapPin } from 'lucide-react'
import { education } from '../../data/education'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

const accentBackground = {
  lavender: 'bg-lavender-light',
  cream: 'bg-cream-light',
  sky: 'bg-sky-light',
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-[#F8F8F5] py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="教育经历"
          description="从金融与统计基础出发，进一步聚焦商业分析与数据驱动决策。"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal
              key={item.school}
              delay={index * 0.08}
              className="flex h-full flex-col rounded-lg border border-black/5 bg-white p-6 shadow-soft sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <ImageWithFallback
                  src={item.logo}
                  alt={`${item.school}校徽`}
                  className={`h-16 w-16 shrink-0 rounded-lg border border-white shadow-sm ${accentBackground[item.accent]}`}
                  imageClassName="object-contain p-2"
                  fallbackLabel={item.abbreviation}
                  variant="logo"
                />
                <Tag accent={item.accent}>{index === 0 ? 'CURRENT' : 'BACHELOR'}</Tag>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-ink">{item.school}</h3>
              <p className="mt-1 text-sm font-semibold text-muted">{item.schoolEn}</p>
              <div className="my-5 h-px bg-black/5" />

              <p className="text-lg font-bold text-primary-dark">{item.degree}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.degreeEn}</p>
              {item.major && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.major.map((major) => (
                    <Tag key={major}>{major}</Tag>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item.location}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                    <Award className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
