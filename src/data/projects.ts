import type { Project } from './types'

export const projects: Project[] = [
  {
    title: '笔克集团 Pico × 香港大学毕业项目',
    partner: 'Pico × The University of Hong Kong',
    summary:
      '围绕多系统客户主数据重复、命名不一致和字段缺失问题，构建从清洗、匹配到 Golden Record 的完整 MDM 数据管道。',
    role:
      '担任组长，统筹需求拆解、任务分工、周会组织、风险跟踪、跨组协调与交付验收。',
    background:
      '客户与品牌信息分散于不同业务系统，重复记录、别名与字段缺失使客户识别和后续业务触达缺少一致的数据基础。',
    solution: [
      '主导搭建 PySpark MDM 数据管道，覆盖数据清洗、标准化、候选匹配、匹配分组和 Golden Record 构建。',
      '设计分层候选筛选与实体匹配逻辑，控制大规模笛卡尔积带来的计算成本。',
      '建立人工复核闭环，使匹配结果可解释、可审计并便于持续修正。',
    ],
    results: [
      '将 536K 客户与 14K 品牌形成的 7.57B 候选空间压缩至 6.2M 候选对。',
      '完成 52,638 条匹配，覆盖 8,870 个品牌。',
      '将 167,421 条清洗后的客户数据筛选为 151,293 条可评分外部客户。',
      '输出 1,152 条优先级账户池。',
    ],
    metrics: [
      { value: '536K', label: '客户记录' },
      { value: '14K', label: '品牌' },
      { value: '7.57B → 6.2M', label: '候选空间' },
      { value: '52,638', label: '成功匹配' },
      { value: '1,152', label: '优先账户' },
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
        src: '/images/projects/pico-mdm-overview.png',
        alt: 'Pico 主数据管理项目总览',
        fileName: 'pico-mdm-overview.png',
      },
      {
        src: '/images/projects/pico-pipeline.png',
        alt: 'Pico MDM 数据管道流程',
        fileName: 'pico-pipeline.png',
      },
      {
        src: '/images/projects/pico-results.png',
        alt: 'Pico MDM 项目结果展示',
        fileName: 'pico-results.png',
      },
    ],
  },
]
