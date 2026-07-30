import type { Project } from './types'

export const projects: Project[] = [
  {
    title: 'Pico × 香港大学｜全球客户智能与数据治理',
    partner: 'HKU Business Analytics Capstone × Pico',
    summary:
      '面向 Pico 跨区域、多系统、多语言的客户数据，设计并落地从标准化、实体识别、属性增强、关系构建到人工复核的治理型客户智能平台。',
    role:
      '作为核心项目负责人兼 Team Lead，带领 7 人团队推进企业级客户数据治理项目，统筹需求定义、技术路线、任务分工、跨模块协作与风险管理，并主导原型演示及最终交付。',
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
    title: '香港大学 MSBA7035｜全栈 AI 旅行规划系统',
    partner: 'HKU MSBA7035 Group 7 · April 2026',
    summary:
      '将小红书攻略 RAG、确定性行程规划、地图路线、预算估算和旅中 Companion Agent 串成一条可执行的旅行智能链路。',
    role:
      '负责问题定义、系统目标与端到端架构梳理，参与团队方案整合与最终汇报；协作连接 RAG、规划 Agent、地图与预算输出，以及旅中 Companion Agent。',
    background:
      '旅行攻略只能提供地点建议，却无法同时处理城市、天数、节奏、预算、天气和同行人约束。项目希望把分散的本地攻略转化为可检索证据，再生成可执行、可调整的旅行计划。',
    solution: [
      '使用爬虫收集 12 座城市的 1200+ 条小红书旅行内容，切分为检索片段并提取城市、内容类型、标签、POI 与区域等元数据。',
      '采用 ChromaDB dense retrieval 与 BM25 sparse retrieval 的混合检索，再通过城市过滤、查询类型权重和元数据增强降低跨城市噪声。',
      '用确定性规划器完成偏好评分、区域聚类、路线排序和天气 / 预算审查，并将结果组装成地图、费用和酒店可消费的结构化 payload。',
      '补充旅中 Companion Agent，支持路线协调、候选搜索、异常重排和应急类请求，形成出发前规划到旅中调整的闭环。',
    ],
    results: [
      '最终 RAG 评测达到 93.5% Average Hit Rate@5 和 0.98 Mean Reciprocal Rank；迭代过程中混合检索将 Hit Rate 从 22% 提升至 84%，城市过滤后达到 90.5%。',
      'RAGAS 评测 Faithfulness 为 95.3%、Answer Relevancy 为 88.6%，Context Precision 为 74.2%，同时明确后续检索优化空间。',
      '系统可同时输出 itinerary JSON、Markdown 行程报告、高德地图 payload、酒店推荐和计划费用摘要，而不是只返回一段自然语言建议。',
      '建立包含延迟、工具调用、成本和 Agent 任务表现的评测框架；当前结果仍属于课程项目验证，不宣称已达到生产级稳定性。',
    ],
    metrics: [
      { value: '12 座', label: '支持城市' },
      { value: '1200+', label: '爬虫采集旅行内容' },
      { value: '93.5%', label: 'RAG Hit Rate@5' },
      { value: '0.98', label: 'RAG MRR' },
      { value: '95.3%', label: 'RAGAS Faithfulness' },
    ],
    tools: [
      'RAG',
      'ChromaDB',
      'BM25',
      'Python',
      'OpenAI Responses API',
      'FastAPI',
      '高德地图',
      'Agent Evaluation',
    ],
    images: [
      {
        src: '/images/projects/travel-agent-ui.webp',
        alt: 'Travel Agent 旅行规划入口、地图与费用输出界面',
        fileName: 'travel-agent-ui.webp',
      },
      {
        src: '/images/projects/travel-agent-architecture.webp',
        alt: 'Travel Agent 端到端系统架构与工作流',
        fileName: 'travel-agent-architecture.webp',
      },
      {
        src: '/images/projects/travel-agent-rag-evaluation.webp',
        alt: 'Travel Agent RAG 检索质量评测结果',
        fileName: 'travel-agent-rag-evaluation.webp',
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
