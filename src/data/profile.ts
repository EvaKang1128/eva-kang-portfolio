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
    '我拥有金融、金融数学与统计学背景，目前就读于香港大学商业分析硕士项目。我的经历横跨证券投行、数据治理、海外业务运营和创业实践，也参与过企业级主数据管理项目。',
    '我擅长从业务问题出发，拆解需求、梳理数据、识别异常并推动项目落地。相比只关注模型或工具，我更关注分析结果能否转化为清晰、可执行的业务决策，以及数据和 AI 能否真正改善产品与流程。',
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
  { value: '1.2M+', label: '源记录处理', note: 'Pico 客户智能项目' },
  { value: '167K+', label: 'Golden Records', note: '保留数据血缘' },
  { value: '35 万+', label: '累计创业收入', note: '独立运营悉尼工作室' },
]
