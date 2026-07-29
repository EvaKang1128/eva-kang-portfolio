import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: '数据分析',
    titleEn: 'DATA ANALYSIS',
    items: ['Python', 'R', 'SQL', 'Excel', 'VLOOKUP', 'Pivot Table', 'REGEXP'],
    accent: 'lavender',
  },
  {
    title: '数据与工程',
    titleEn: 'DATA & ENGINEERING',
    items: [
      'PySpark',
      'Data Cleaning',
      'Entity Matching',
      'Master Data Management',
      'Golden Record',
      'Data Quality',
    ],
    accent: 'sky',
  },
  {
    title: '商业与产品',
    titleEn: 'BUSINESS & PRODUCT',
    items: [
      'Business Analysis',
      'Requirement Analysis',
      'Data Governance',
      'Product Thinking',
      'Project Coordination',
      'User Growth',
    ],
    accent: 'cream',
  },
  {
    title: '协作与表达',
    titleEn: 'COLLABORATION',
    items: [
      'JavaScript',
      'PowerPoint',
      'Structured Documentation',
      'Cross-functional Communication',
    ],
    accent: 'lavender',
  },
]
