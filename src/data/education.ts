import type { EducationItem } from './types'

export const education: EducationItem[] = [
  {
    school: '香港大学',
    schoolEn: 'The University of Hong Kong',
    degree: '理学硕士｜商业分析（人工智能）',
    degreeEn: 'Master of Science in Business Analytics',
    period: '2025.09 – 2026.11',
    location: '中国香港',
    highlights: [
      '获得入学奖学金 3.9W HKD',
      '关注商业分析、数据产品、数据治理与数据驱动决策',
    ],
    logo: '/images/logos/hku-logo.png',
    abbreviation: 'HKU',
    accent: 'lavender',
  },
  {
    school: '悉尼大学',
    schoolEn: 'The University of Sydney',
    degree: '商学学士｜金融数学和统计 & 金融双专业',
    degreeEn: 'Bachelor of Commerce',
    major: ['金融', '金融数学与统计学'],
    period: '2023.09 – 2025.06',
    location: '澳大利亚悉尼',
    highlights: [
      'Distinction 等级毕业',
      '通过学期超修和集中课程，在 2 年内完成原本 3 年的学位',
      '参加上海交通大学、北京理工大学学分制寒暑期项目',
    ],
    logo: '/images/logos/usyd-logo.png',
    abbreviation: 'USYD',
    accent: 'sky',
  },
  {
    school: '杭州高级中学',
    schoolEn: 'Hangzhou High School',
    degree: 'AP 课程',
    degreeEn: 'Advanced Placement Curriculum',
    period: '2020.09 – 2023.06',
    highlights: ['荣获校级奖学金 2000 元', '完成 9 门 AP 课程'],
    logo: '/images/logos/hangzhou-high-school-logo.png',
    abbreviation: 'HHS',
    accent: 'cream',
  },
]
