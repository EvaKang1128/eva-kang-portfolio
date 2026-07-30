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

const stageLabels = ['MASTER', 'BACHELOR', 'HIGH SCHOOL']

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-[#F8F8F5] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="教育经历"
          description="从金融与统计基础出发，进一步聚焦商业分析与数据驱动决策。"
        />

        <div className="relative space-y-3 before:absolute before:bottom-7 before:left-8 before:top-7 before:hidden before:w-px before:bg-primary/15 sm:before:block">
          {education.map((item, index) => (
            <Reveal
              key={item.school}
              delay={index * 0.08}
              className="relative rounded-lg border border-black/5 bg-white p-5 shadow-soft sm:ml-16 sm:p-6 lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-8"
            >
              <span
                className={`absolute -left-[73px] top-7 hidden h-[18px] w-[18px] rounded-full border-4 border-[#F8F8F5] shadow-sm sm:block ${accentBackground[item.accent]}`}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-start justify-between gap-4 lg:block">
                  <ImageWithFallback
                    src={item.logo}
                    alt={`${item.school}校徽`}
                    className={`h-14 w-14 shrink-0 rounded-lg border border-white shadow-sm ${accentBackground[item.accent]}`}
                    imageClassName="object-contain p-2"
                    fallbackLabel={item.abbreviation}
                    variant="logo"
                  />
                  <div className="lg:mt-3">
                    <Tag accent={item.accent}>{stageLabels[index]}</Tag>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-ink">{item.school}</h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-muted">{item.schoolEn}</p>
              </div>

              <div className="mt-4 border-t border-black/5 pt-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-base font-bold leading-7 text-primary-dark">{item.degree}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.degreeEn}</p>
                {item.major && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.major.map((major) => (
                      <Tag key={major}>{major}</Tag>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      {item.location}
                    </span>
                  )}
                </div>

                <ul className="mt-4 grid gap-2 xl:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                      <Award className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
