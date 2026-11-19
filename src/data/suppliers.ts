import type {
  DimensionGroup,
  HistoryMonthItem,
  LampLevel,
  SubDimensionAssessment,
  SupplierRecord,
} from "../types/supplier";

export type {
  DimensionGroup,
  HistoryMonthItem,
  LampLevel,
  SubDimensionAssessment,
  SupplierRecord,
};

const MONTHS_12 = [
  "2025-11",
  "2025-12",
  "2026-01",
  "2026-02",
  "2026-03",
  "2026-04",
  "2026-05",
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
  "2026-10",
];

function buildYellowHistory(): HistoryMonthItem[] {
  return MONTHS_12.map((month, idx) => ({
    month,
    status: idx >= 10 ? "黄灯" : "绿灯",
    isCurrent: month === "2026-10",
  }));
}

function buildYellowDimensions(): DimensionGroup[] {
  return [
    {
      name: "外部风险态势",
      summaryType: "normal",
      summaryText: "正常",
      items: [
        { name: "不可抗因素", status: "绿灯", titleColorVariant: "dark" },
        { name: "供应链连续性", status: "绿灯", titleColorVariant: "dark" },
        { name: "组织稳定性", status: "绿灯", titleColorVariant: "dark" },
      ],
    },
    {
      name: "系统合规基石",
      summaryType: "normal",
      summaryText: "正常",
      items: [
        { name: "QSA", status: "绿灯", titleColorVariant: "navy" },
        { name: "TSA", status: "绿灯", titleColorVariant: "navy" },
        { name: "合规履约", status: "绿灯", titleColorVariant: "navy" },
      ],
    },
    {
      name: "前期质量策划",
      summaryType: "normal",
      summaryText: "正常",
      items: [
        { name: "试产良率", status: "绿灯", titleColorVariant: "navy" },
        { name: "PSO", status: "绿灯", titleColorVariant: "navy" },
      ],
    },
    {
      name: "过程质量管理",
      summaryType: "normal",
      summaryText: "正常",
      items: [
        { name: "变更管理", status: "绿灯", titleColorVariant: "navy" },
        { name: "执行监控", status: "绿灯", titleColorVariant: "navy" },
        { name: "质量异常管理", status: "绿灯", titleColorVariant: "navy" },
        { name: "Quality Spill", status: "绿灯", titleColorVariant: "navy" },
      ],
    },
    {
      name: "交付质量实绩",
      summaryType: "yellow",
      summaryText: "黄灯 1",
      items: [
        { name: "LAR", status: "绿灯", titleColorVariant: "navy" },
        { name: "VLRR", status: "绿灯", titleColorVariant: "navy" },
        { name: "TCRR", status: "黄灯", titleColorVariant: "amber" },
      ],
    },
  ];
}

export const PRIORITY_SUPPLIERS: SupplierRecord[] = [
  {
    id: "jierong",
    name: "捷荣技术",
    lamp: "黑灯",
    category: "ME",
    metaText: "ME · huangjj7  |  youjg1",
    issueSummary:
      "供应链连续性：财务：资金周转紧张、账款逾期，履约稳定性不足（2026-09触发，当前处于持续期）",
    defaultExpanded: true,
    history: MONTHS_12.map((month, idx) => ({
      month,
      status: idx < 5 ? "绿灯" : "黑灯",
      isCurrent: month === "2026-10",
    })),
    dimensions: [
      {
        name: "外部风险态势",
        summaryType: "black",
        summaryText: "黑灯 1",
        items: [
          { name: "不可抗因素", status: "绿灯", titleColorVariant: "dark" },
          { name: "供应链连续性", status: "黑灯", titleColorVariant: "dark" },
          { name: "组织稳定性", status: "绿灯", titleColorVariant: "dark" },
        ],
      },
      {
        name: "系统合规基石",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "QSA", status: "绿灯", titleColorVariant: "navy" },
          { name: "TSA", status: "绿灯", titleColorVariant: "navy" },
          { name: "合规履约", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "前期质量策划",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "试产良率", status: "绿灯", titleColorVariant: "navy" },
          { name: "PSO", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "过程质量管理",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "变更管理", status: "绿灯", titleColorVariant: "navy" },
          { name: "执行监控", status: "绿灯", titleColorVariant: "navy" },
          { name: "质量异常管理", status: "绿灯", titleColorVariant: "navy" },
          { name: "Quality Spill", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "交付质量实绩",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "LAR", status: "绿灯", titleColorVariant: "navy" },
          { name: "VLRR", status: "绿灯", titleColorVariant: "navy" },
          { name: "TCRR", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
    ],
  },
  {
    id: "qtech",
    name: "丘钛",
    lamp: "红灯",
    category: "Imager",
    metaText: "Imager · reneh1",
    issueSummary: "质量异常管理：发生1件S1问题",
    defaultExpanded: true,
    history: MONTHS_12.map((month, idx) => ({
      month,
      status: idx === 11 ? "红灯" : "绿灯",
      isCurrent: month === "2026-10",
    })),
    dimensions: [
      {
        name: "外部风险态势",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "不可抗因素", status: "绿灯", titleColorVariant: "dark" },
          { name: "供应链连续性", status: "绿灯", titleColorVariant: "dark" },
          { name: "组织稳定性", status: "绿灯", titleColorVariant: "dark" },
        ],
      },
      {
        name: "系统合规基石",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "QSA", status: "绿灯", titleColorVariant: "navy" },
          { name: "TSA", status: "绿灯", titleColorVariant: "navy" },
          { name: "合规履约", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "前期质量策划",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "试产良率", status: "绿灯", titleColorVariant: "navy" },
          { name: "PSO", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "过程质量管理",
        summaryType: "red",
        summaryText: "红灯 1",
        items: [
          { name: "变更管理", status: "绿灯", titleColorVariant: "dark" },
          { name: "执行监控", status: "绿灯", titleColorVariant: "dark" },
          { name: "质量异常管理", status: "红灯", titleColorVariant: "red" },
          { name: "Quality Spill", status: "绿灯", titleColorVariant: "dark" },
        ],
      },
      {
        name: "交付质量实绩",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "LAR", status: "绿灯", titleColorVariant: "navy" },
          { name: "VLRR", status: "绿灯", titleColorVariant: "navy" },
          { name: "TCRR", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
    ],
  },
  {
    id: "sunwoda",
    name: "欣旺达",
    lamp: "红灯",
    category: "Safety",
    metaText: "Safety · guangkuw",
    issueSummary: "质量异常管理：发生1件S1问题（2026-08触发，当前处于持续期）",
    defaultExpanded: true,
    history: MONTHS_12.map((month, idx) => ({
      month,
      status: idx >= 9 ? "红灯" : "绿灯",
      isCurrent: month === "2026-10",
    })),
    dimensions: [
      {
        name: "外部风险态势",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "不可抗因素", status: "绿灯", titleColorVariant: "dark" },
          { name: "供应链连续性", status: "绿灯", titleColorVariant: "dark" },
          { name: "组织稳定性", status: "绿灯", titleColorVariant: "dark" },
        ],
      },
      {
        name: "系统合规基石",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "QSA", status: "绿灯", titleColorVariant: "navy" },
          { name: "TSA", status: "绿灯", titleColorVariant: "navy" },
          { name: "合规履约", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "前期质量策划",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "试产良率", status: "绿灯", titleColorVariant: "navy" },
          { name: "PSO", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
      {
        name: "过程质量管理",
        summaryType: "red",
        summaryText: "红灯 1",
        items: [
          { name: "变更管理", status: "绿灯", titleColorVariant: "dark" },
          { name: "执行监控", status: "绿灯", titleColorVariant: "dark" },
          { name: "质量异常管理", status: "红灯", titleColorVariant: "red" },
          { name: "Quality Spill", status: "绿灯", titleColorVariant: "dark" },
        ],
      },
      {
        name: "交付质量实绩",
        summaryType: "normal",
        summaryText: "正常",
        items: [
          { name: "LAR", status: "绿灯", titleColorVariant: "navy" },
          { name: "VLRR", status: "绿灯", titleColorVariant: "navy" },
          { name: "TCRR", status: "绿灯", titleColorVariant: "navy" },
        ],
      },
    ],
  },
  {
    id: "chenyang",
    name: "辰阳电子",
    lamp: "黄灯",
    category: "Safety",
    metaText: "Safety · zhaogp3",
    issueSummary: "TCRR：1条记录超过目标值10%（2026-09触发，当前处于持续期）",
    defaultExpanded: false,
    history: buildYellowHistory(),
    dimensions: buildYellowDimensions(),
  },
  {
    id: "scud",
    name: "飞毛腿",
    lamp: "黄灯",
    category: "Safety",
    metaText: "Safety · danl",
    issueSummary: "TCRR：1条记录超过目标值10%（2026-09触发，当前处于持续期）",
    defaultExpanded: false,
    history: buildYellowHistory(),
    dimensions: buildYellowDimensions(),
  },
  {
    id: "everdisplay",
    name: "和辉光电",
    lamp: "黄灯",
    category: "Display",
    metaText: "Display · kelongy",
    issueSummary: "TCRR：1条记录超过目标值10%（2026-09触发，当前处于持续期）",
    defaultExpanded: false,
    history: buildYellowHistory(),
    dimensions: buildYellowDimensions(),
  },
  {
    id: "qisheng",
    name: "旗声科技",
    lamp: "黄灯",
    category: "Acoustic",
    metaText: "Acoustic · humx3",
    issueSummary: "TCRR：1条记录超过目标值10%（2026-09触发，当前处于持续期）",
    defaultExpanded: false,
    history: buildYellowHistory(),
    dimensions: buildYellowDimensions(),
  },
  {
    id: "samsung",
    name: "三星集团",
    lamp: "黄灯",
    category: "Imager",
    metaText: "Imager · caiym2",
    issueSummary: "TCRR：1条记录超过目标值10%（2026-09触发，当前处于持续期）",
    defaultExpanded: false,
    history: buildYellowHistory(),
    dimensions: buildYellowDimensions(),
  },
  {
    id: "veken",
    name: "维科",
    lamp: "黄灯",
    category: "Safety",
    metaText: "Safety · liuhao7",
    issueSummary: "TCRR：1条记录超过目标值10%（2026-09触发，当前处于持续期）",
    defaultExpanded: false,
    history: buildYellowHistory(),
    dimensions: buildYellowDimensions(),
  },
];

export const CATEGORY_OPTIONS = ["全部类别", "ME", "Imager", "Safety", "Display", "Acoustic"];
export const SUPPLIER_OPTIONS = [
  "全部供应商",
  ...PRIORITY_SUPPLIERS.map((s) => s.name),
];
export const MONTH_OPTIONS = [
  "2026-10",
  "2026-09",
  "2026-08",
  "2026-07",
  "2026-06",
  "2026-05",
];
