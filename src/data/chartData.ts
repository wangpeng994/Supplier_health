import type {
  FiveDimItem,
  SubDimensionGroupData,
  TrendMonthPoint,
} from "../types/supplier";

export const MONTHS_6 = [
  "2026-05",
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
  "2026-10",
];

// Gridline Y in the 624x302 plot: top (210 / 12) = 24px, bottom (190 / 0) = 276px
export const TREND_SERIES: TrendMonthPoint[] = [
  {
    month: "2026-05",
    cx: 73,
    black: { value: 0, left: 69, top: 271 },
    red: { value: 3, left: 69, top: 199 },
    yellow: { value: 5, left: 69, top: 166 },
    green: { value: 204, diff: 2, rate: "96.2%", cy: 99.6 },
  },
  {
    month: "2026-06",
    cx: 175,
    black: { value: 0, left: 171, top: 271 },
    red: { value: 4, left: 171, top: 183 },
    yellow: { value: 8, left: 171, top: 98 },
    green: { value: 200, diff: -4, rate: "94.3%", cy: 150 },
  },
  {
    month: "2026-07",
    cx: 271,
    black: { value: 0, left: 267, top: 271 },
    red: { value: 3, left: 267, top: 198 },
    yellow: { value: 11, left: 267, top: 36 },
    green: { value: 196, diff: -4, rate: "93.3%", cy: 200.4 },
  },
  {
    month: "2026-08",
    cx: 371,
    black: { value: 1, left: 367, top: 248 },
    red: { value: 4, left: 367, top: 183 },
    yellow: { value: 9, left: 367, top: 68 },
    green: { value: 198, diff: 2, rate: "93.4%", cy: 175.2 },
  },
  {
    month: "2026-09",
    cx: 471,
    black: { value: 1, left: 471, top: 248 },
    red: { value: 3, left: 471, top: 199 },
    yellow: { value: 10, left: 467, top: 52 },
    green: { value: 199, diff: 1, rate: "93.4%", cy: 162.6 },
  },
  {
    month: "2026-10",
    cx: 574,
    black: { value: 1, left: 570, top: 248 },
    red: { value: 4, left: 571, top: 183 },
    yellow: { value: 7, left: 570, top: 117 },
    green: { value: 200, diff: 1, rate: "94.3%", cy: 150 },
  },
];

export const FIVE_DIMENSIONS_DATA: FiveDimItem[] = [
  {
    label: "外部风险态势",
    subSummary: "不可抗因素、供应链连续性、组织稳定性",
    monthValues: [1, 0, 0],
    halfValues: [2, 1, 1],
  },
  {
    label: "交付质量实绩",
    subSummary: "LAR、TCRR、VLRR",
    monthValues: [0, 6, 0],
    halfValues: [0, 7, 3],
  },
  {
    label: "过程质量管理",
    subSummary: "变更管理、执行监控、质量异常管理、Quality Spill",
    monthValues: [0, 2, 0],
    halfValues: [0, 4, 2],
  },
  {
    label: "前期质量策划",
    subSummary: "试产良率、PSO",
    monthValues: [0, 0, 0],
    halfValues: [0, 0, 1],
  },
  {
    label: "系统合规基石",
    subSummary: "QSA、TSA、合规履约",
    monthValues: [0, 0, 0],
    halfValues: [0, 0, 0],
  },
];

export const FIFTEEN_SUB_DIMENSIONS_GROUPS: SubDimensionGroupData[] = [
  {
    groupName: "外部风险态势",
    items: [
      {
        id: "force-majeure",
        name: "不可抗因素",
        lines: ["不可抗", "因素"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
      {
        id: "supply-continuity",
        name: "供应链连续性",
        lines: ["供应链", "连续性"],
        monthValues: [1, 0, 0],
        halfValues: [2, 1, 0],
      },
      {
        id: "org-stability",
        name: "组织稳定性",
        lines: ["组织稳", "定性"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 1],
      },
    ],
  },
  {
    groupName: "系统合规基石",
    items: [
      {
        id: "qsa",
        name: "QSA",
        lines: ["QSA"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
      {
        id: "tsa",
        name: "TSA",
        lines: ["TSA"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
      {
        id: "compliance",
        name: "合规履约",
        lines: ["合规履", "约"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
    ],
  },
  {
    groupName: "前期质量策划",
    items: [
      {
        id: "pilot-yield",
        name: "试产良率",
        lines: ["试产良", "率"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 1],
      },
      {
        id: "pso",
        name: "PSO",
        lines: ["PSO"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
    ],
  },
  {
    groupName: "过程质量管理",
    items: [
      {
        id: "change-mgmt",
        name: "变更管理",
        lines: ["变更管", "理"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 1],
      },
      {
        id: "exec-monitor",
        name: "执行监控",
        lines: ["执行监", "控"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
      {
        id: "quality-issue",
        name: "质量异常管理",
        lines: ["质量异", "常管理"],
        monthValues: [0, 2, 0],
        halfValues: [0, 4, 1],
      },
      {
        id: "quality-spill",
        name: "Quality Spill",
        lines: ["Quality", "Spill"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
    ],
  },
  {
    groupName: "交付质量实绩",
    items: [
      {
        id: "lar",
        name: "LAR",
        lines: ["LAR"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 1],
      },
      {
        id: "tcrr",
        name: "TCRR",
        lines: ["TCRR"],
        monthValues: [0, 6, 0],
        halfValues: [0, 7, 2],
      },
      {
        id: "vlrr",
        name: "VLRR",
        lines: ["VLRR"],
        monthValues: [0, 0, 0],
        halfValues: [0, 0, 0],
      },
    ],
  },
];
