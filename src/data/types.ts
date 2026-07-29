export type Accent = 'lavender' | 'cream' | 'sky'

export interface NavigationItem {
  label: string
  id: string
}

export interface Highlight {
  value: string
  label: string
  note: string
}

export interface EducationItem {
  school: string
  schoolEn: string
  degree: string
  degreeEn: string
  major?: string[]
  period: string
  location?: string
  highlights: string[]
  logo: string
  abbreviation: string
  accent: Accent
}

export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectImage {
  src: string
  alt: string
  fileName: string
}

export interface Project {
  title: string
  partner: string
  summary: string
  role: string
  background: string
  solution: string[]
  results: string[]
  metrics: ProjectMetric[]
  tools: string[]
  images: ProjectImage[]
}

export interface Internship {
  company: string
  department: string
  role: string
  period: string
  location: string
  responsibilities: string[]
  skills: string[]
  logo: string
  abbreviation: string
  accent: Accent
}

export interface SkillGroup {
  title: string
  titleEn: string
  items: string[]
  accent: Accent
}
