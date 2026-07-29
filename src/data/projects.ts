import type { Project } from './types'

export const projects: Project[] = [
  {
    title: 'Pico × 香港大学｜全球客户智能与数据治理',
    partner: 'HKU Business Analytics Capstone × Pico',
    summary:
      '面向 Pico 跨区域、多系统、多语言的客户数据，设计并落地从标准化、实体识别、属性增强、关系构建到人工复核的治理型客户智能平台。',
    role:
      '担任组长，统筹 7 人团队的需求拆解、任务分工、周会组织、风险跟踪、跨组协调、现场演示与最终交付。',
    background:
      'Pico 的客户数据分散在不同国家、系统与语言环境中，同一客户可能以地区名称、品牌名或法律实体名重复出现；关键属性和集团关系缺失，影响全球客户洞察、报告分析与商业决策。',
    solution: [
      '搭建端到端治理工作流，依次完成客户数据接入与标准化、可信实体识别、行业属性增强和企业关系构建。',
      '采用置信度评分与证据保留机制，为实体匹配、字段增强和有向关系提供可解释、可追溯的判断依据。',
      '建立人工复核队列、数据血缘、审计轨迹和类型化存储，让低置信度结果可审批、可纠正并可持续维护。',
    ],
    results: [
      '处理 1.2M+ 条源记录，构建 167K+ 条保留数据血缘的 Golden Records。',
      '实体识别在 240 组人工标注样本中达到 98.58% Precision、94.56% Recall 和 96.53% F1。',
      '行业增强 L1 / L2 准确率分别为 68% / 67%，其中 L2 超过项目设定的 65% 目标。',
      '企业关系识别达到 76.34% Precision 和 90.91% Recall，并通过平台原型完成端到端现场演示。',
    ],
    metrics: [
      { value: '1.2M+', label: '源记录处理' },
      { value: '167K+', label: 'Golden Records' },
      { value: '98.58%', label: '实体识别 Precision' },
      { value: '96.53%', label: '实体识别 F1' },
      { value: '90.91%', label: '关系识别 Recall' },
    ],
    tools: [
      'PySpark',
      'Python',
      'Data Cleaning',
      'Entity Matching',
      'MDM',
      'Golden Record',
      'Data Governance',
    ],
    images: [
      {
        src: '/images/projects/pico-mdm-overview.webp',
        alt: 'Pico 客户智能平台现场演示与企业关系图谱',
        fileName: 'pico-mdm-overview.webp',
      },
      {
        src: '/images/projects/pico-pipeline.webp',
        alt: 'Pico 客户智能端到端治理工作流',
        fileName: 'pico-pipeline.webp',
      },
      {
        src: '/images/projects/pico-results.webp',
        alt: 'Pico 项目交付成果与核心数据指标',
        fileName: 'pico-results.webp',
      },
    ],
  },
]
