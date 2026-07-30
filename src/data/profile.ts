import type { Highlight, NavigationItem } from './types'

export const profile = {
  name: '康雨霏',
  englishName: 'Eva Kang',
  email: 'evakang@connect.hku.hk',
  xiaohongshu: 'k191029186',
  directions: '商业分析｜数据与 AI 产品｜数据治理',
  directionsEn: 'Business Analysis · Data & AI Product · Data Governance',
  introduction:
    '香港大学商业分析硕士，拥有金融、数据分析与业务运营的复合背景。具备数据治理、主数据管理、商业分析和项目协作经验，关注如何通过数据与 AI 产品解决真实业务问题。',
  about: [
    '香港大学商业分析硕士，兼具金融数学功底与投行、数据治理、海外运营及创业实战经验，曾主导企业级主数据项目。',
    '不困于模型，不惑于工具，只专注让数据与 AI 真正驱动业务改善与流程进化。',
  ],
  capabilities: [
    '数据与业务分析',
    '数据治理与主数据管理',
    '产品思维与项目推进',
    '用户增长与商业实践',
  ],
  photo: '/images/profile/eva-kang.jpg',
  resume: '/resume/kang-yufei-resume.pdf',
}

export const navigation: NavigationItem[] = [
  { label: '首页', id: 'home' },
  { label: '关于我', id: 'about' },
  { label: '教育经历', id: 'education' },
  { label: '项目经历', id: 'projects' },
  { label: '实习经历', id: 'internships' },
  { label: '创业经历', id: 'entrepreneurship' },
  { label: '技能', id: 'skills' },
  { label: '联系我', id: 'contact' },
]

export const highlights: Highlight[] = [
  { value: '2 年', label: '完成 3 年本科学位', note: '跨学期超修与集中课程' },
  { value: '3.9W HKD', label: '香港大学新生奖学金', note: 'HKU Business Analytics' },
  { value: 'LLM Agent', label: 'AI 产品与开发实践', note: 'Vibe Coding · 个人网站 · 旅行 Agent' },
  { value: '35 万+', label: '累计创业收入', note: '独立运营悉尼工作室' },
]
