export type LampLevel = "黑灯" | "红灯" | "黄灯" | "绿灯";

export interface HistoryMonthItem {
  month: string;
  status: LampLevel;
  isCurrent?: boolean;
}

export interface SubDimensionAssessment {
  name: string;
  status: LampLevel;
  titleColorVariant?: "navy" | "dark" | "red" | "amber";
}

export interface DimensionGroup {
  name: string;
  summaryType: "normal" | "black" | "red" | "yellow";
  summaryText: string;
  items: SubDimensionAssessment[];
}

export interface SupplierRecord {
  id: string;
  name: string;
  lamp: LampLevel;
  category: string;
  metaText: string;
  issueSummary: string;
  defaultExpanded: boolean;
  history: HistoryMonthItem[];
  dimensions: DimensionGroup[];
}

export interface TrendMonthPoint {
  month: string;
  cx: number;
  black: { value: number; left: number; top: number };
  red: { value: number; left: number; top: number };
  yellow: { value: number; left: number; top: number };
  green: { value: number; diff: number; rate: string; cy: number };
}

export interface FiveDimItem {
  label: string;
  subSummary: string;
  monthValues: [number, number, number];
  halfValues: [number, number, number];
}

export interface SubDimensionBarItem {
  id: string;
  name: string;
  lines: string[];
  monthValues: [number, number, number];
  halfValues: [number, number, number];
}

export interface SubDimensionGroupData {
  groupName: string;
  items: SubDimensionBarItem[];
}
