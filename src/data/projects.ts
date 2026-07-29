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
  {
    title: '悉尼大学 FINC3600｜养老基金资产配置 Capstone',
    partner: 'The University of Sydney · FINC3600 Finance Capstone',
    summary:
      '以投资委员会模拟为背景，为澳大利亚养老基金评估并优化战略与战术资产配置，在成员老龄化带来的流动性需求和宏观不确定性之间平衡长期回报与下行风险。',
    role:
      '作为 5 人团队成员，参与宏观与市场分析、资产配置方案设计、风险收益测算、压力测试，以及面向投资委员会的汇报与 CIO Brief 交付。',
    background:
      '基金需要在通胀、利率变化与人口结构老龄化的环境下审视现有组合。项目要求团队从宏观判断出发，提出可执行的 SAA / TAA 调整，并用历史情景和模拟结果验证组合韧性。',
    solution: [
      '结合宏观经济、市场估值与基金负债特征，形成资产类别观点和战术配置建议。',
      '重新评估增长型与防御型资产权重，在目标收益、波动率、流动性和回撤风险之间进行权衡。',
      '使用 10 年期 Monte Carlo 模拟与三组历史情景压力测试，对新旧配置的收益分布和极端环境表现进行比较。',
    ],
    results: [
      '完成 100,000 次 Monte Carlo 模拟，建议组合的 10 年中位累计回报为 87.5%，高于原配置的 82.7%。',
      '建议组合中位年化回报达到 6.49%，同时在下四分位情景下将年化回报由 4.37% 提升至 4.79%。',
      '在金融危机与 COVID-19 衰退情景中，组合回报分别由 -20.73% 改善至 -19.02%、由 -10.67% 改善至 -9.59%。',
      '形成完整的投资委员会演示与 CIO Brief，将宏观观点、配置逻辑和量化验证转化为清晰的投资建议。',
    ],
    metrics: [
      { value: '100K', label: 'Monte Carlo 模拟' },
      { value: '10 年', label: '投资测算周期' },
      { value: '3 组', label: '历史压力情景' },
      { value: '87.5%', label: '中位累计回报' },
      { value: '6.49%', label: '中位年化回报' },
    ],
    tools: [
      'Strategic Asset Allocation',
      'Tactical Asset Allocation',
      'Monte Carlo',
      'Stress Testing',
      'Scenario Analysis',
      'Risk-Return Analysis',
      'Refinitiv',
    ],
    images: [
      {
        src: '/images/projects/finc3600-saa.webp',
        alt: 'FINC3600 项目战略资产配置调整方案',
        fileName: 'finc3600-saa.webp',
      },
      {
        src: '/images/projects/finc3600-stress-testing.webp',
        alt: 'FINC3600 项目 Monte Carlo 与历史情景压力测试',
        fileName: 'finc3600-stress-testing.webp',
      },
      {
        src: '/images/projects/finc3600-monte-carlo.webp',
        alt: 'FINC3600 项目 Monte Carlo 模拟方法与收益分布',
        fileName: 'finc3600-monte-carlo.webp',
      },
    ],
  },
]
