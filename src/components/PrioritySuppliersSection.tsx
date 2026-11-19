import { useState } from "react";
import { img, img1, img2 } from "../assets";
import {
  CATEGORY_OPTIONS,
  type DimensionGroup,
  type HistoryMonthItem,
  type LampLevel,
  MONTH_OPTIONS,
  SUPPLIER_OPTIONS,
  type SubDimensionAssessment,
  type SupplierRecord,
} from "../data/suppliers";
import {
  type FilterValues,
  SearchControl,
  SelectControl,
} from "./FilterControls";

function LampBadge({ lamp }: { lamp: LampLevel }) {
  const bgClass =
    lamp === "黑灯"
      ? "bg-[#434343]"
      : lamp === "红灯"
        ? "bg-[#cf1322]"
        : lamp === "黄灯"
          ? "bg-[#d48806]"
          : "bg-[#389e0d]";

  return (
    <div
      className={`${bgClass} flex h-[22px] items-center justify-center overflow-hidden relative rounded-[4px] shrink-0 w-[44px]`}
    >
      <span className="font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        {lamp}
      </span>
    </div>
  );
}

function HistoryCell({ item }: { item: HistoryMonthItem }) {
  const boxStyle = item.isCurrent
    ? "bg-[#e6f4ff] border-[#1677ff]"
    : item.status === "绿灯"
      ? "bg-[#f6ffed] border-[#52c41a]"
      : item.status === "黑灯"
        ? "bg-[#ececec] border-[rgba(0,0,0,0.65)]"
        : item.status === "红灯"
          ? "bg-[#fff1f0] border-[#f5222d]"
          : "bg-[#fffbe6] border-[#faad14]";

  const statusTextColor =
    item.status === "绿灯"
      ? "text-[#389e0d]"
      : item.status === "黑灯"
        ? "text-[#20324d]"
        : item.status === "红灯"
          ? "text-[#f5222d]"
          : "text-[#d48806]";

  return (
    <div
      className={`${boxStyle} border border-solid flex flex-1 min-w-[72px] flex-col gap-[4px] items-center justify-center overflow-hidden px-[12px] py-[4px] relative rounded-[6px]`}
    >
      <div className="flex h-[22px] items-center justify-center overflow-hidden relative shrink-0 w-[60px]">
        <p
          className={`font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${statusTextColor}`}
        >
          {item.status}
        </p>
      </div>
      <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
        {item.month}
      </p>
    </div>
  );
}

function SubDimensionItem({ item }: { item: SubDimensionAssessment }) {
  const cardStyle =
    item.status === "黑灯"
      ? "bg-[rgba(0,0,0,0.15)] border-[rgba(0,0,0,0.65)]"
      : item.status === "红灯"
        ? "bg-[#fff1f0] border-[#f5222d]"
        : item.status === "黄灯"
          ? "bg-[#fffbe6] border-[#faad14]"
          : "bg-white border-[#d9d9d9]";

  const titleColor =
    item.titleColorVariant === "red"
      ? "text-[#f5222d]"
      : item.titleColorVariant === "amber"
        ? "text-[#d48806]"
        : item.titleColorVariant === "dark"
          ? "text-[rgba(0,0,0,0.88)]"
          : "text-[#20324d]";

  const dotSrc =
    item.status === "黑灯" ? img1 : item.status === "红灯" ? img2 : img;

  return (
    <div
      className={`${cardStyle} border border-solid flex gap-[4px] h-[50px] items-center overflow-hidden p-[12px] relative rounded-[4px] shrink-0 w-full`}
    >
      <div className="flex flex-1 gap-[8px] h-[24px] items-center min-w-px overflow-hidden relative">
        <div className="relative shrink-0 size-[7px]">
          {item.status === "黄灯" ? (
            <span className="block size-[7px] rounded-full bg-[#faad14]" />
          ) : (
            <img alt="" className="block max-w-none" src={dotSrc} />
          )}
        </div>
        <p
          className={`[word-break:break-word] flex-1 font-['PingFang_SC:Medium'] leading-[22px] min-w-px not-italic relative text-[14px] ${titleColor}`}
        >
          {item.name}
        </p>
      </div>
      <div className="flex h-[22px] items-center justify-end shrink-0 relative">
        <button
          type="button"
          className="cursor-pointer font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#1677ff] hover:text-[#4096ff] text-[14px] whitespace-nowrap"
        >
          判定与明细
        </button>
      </div>
    </div>
  );
}

function DimensionColumn({ group }: { group: DimensionGroup }) {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-start min-w-px relative rounded-[8px] w-full">
      <div className="border-[#ececec] border-b border-solid flex items-center justify-between overflow-hidden px-[16px] py-[8px] relative shrink-0 w-full">
        <p className="font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
          {group.name}
        </p>
        <div className="flex h-[22px] items-center justify-end relative shrink-0">
          {group.summaryType === "normal" ? (
            <div className="bg-[#389e0d] flex h-[22px] items-center px-[8px] relative rounded-[18px] shrink-0">
              <span className="font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                {group.summaryText}
              </span>
            </div>
          ) : (
            <span
              className={`font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${
                group.summaryType === "red"
                  ? "text-[#f5222d]"
                  : group.summaryType === "yellow"
                    ? "text-[#d48806]"
                    : "text-[rgba(0,0,0,0.88)]"
              }`}
            >
              {group.summaryText}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start p-[16px] relative shrink-0 w-full">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {group.items.map((item) => (
            <SubDimensionItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PrioritySuppliersSectionProps {
  suppliers: SupplierRecord[];
  draft: FilterValues;
  onDraftChange: (next: FilterValues) => void;
  onQuery: () => void;
  onReset: () => void;
}

export function PrioritySuppliersSection({
  suppliers,
  draft,
  onDraftChange,
  onQuery,
  onReset,
}: PrioritySuppliersSectionProps) {
  const [activeTab, setActiveTab] = useState<"priority" | "all">("priority");
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(suppliers.map((s) => [s.id, s.defaultExpanded])),
  );

  const toggleExpand = (id: string) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-white flex items-start relative rounded-[12px] shrink-0 w-full pb-[16px]">
      <div
        className="flex flex-1 flex-col gap-[12px] items-start min-w-px relative rounded-[8px] w-full"
        data-name="重点关注供应商"
      >
        {/* Heading & Inline Filters */}
        <div
          className="bg-white flex flex-wrap xl:flex-nowrap min-h-[64px] py-[12px] xl:py-0 gap-[16px] items-center justify-between px-[16px] relative shrink-0 w-full rounded-t-[12px]"
          data-name="Priority suppliers heading"
        >
          <div className="flex font-['PingFang_SC:Semibold'] gap-[16px] items-center leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
            <button
              type="button"
              onClick={() => setActiveTab("priority")}
              className={`cursor-pointer transition-colors ${
                activeTab === "priority" ? "text-[#1677ff]" : "text-[#20324d]"
              }`}
            >
              重点关注供应商
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`cursor-pointer transition-colors ${
                activeTab === "all" ? "text-[#1677ff]" : "text-[#20324d]"
              }`}
            >
              全部供应商
            </button>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-[16px] items-center relative w-full xl:w-[1375px] xl:max-w-[76%]">
            <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 gap-[4px] items-center min-w-px relative">
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                一级类别
              </p>
              <div className="flex-1 min-w-0">
                <SelectControl
                  ariaLabel="列表一级类别"
                  value={draft.category}
                  options={CATEGORY_OPTIONS}
                  onChange={(category) => onDraftChange({ ...draft, category })}
                />
              </div>
            </div>

            <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 gap-[4px] items-center min-w-px relative">
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                供应商
              </p>
              <div className="flex-1 min-w-0">
                <SelectControl
                  ariaLabel="列表供应商"
                  value={draft.supplier}
                  options={SUPPLIER_OPTIONS}
                  onChange={(supplier) => onDraftChange({ ...draft, supplier })}
                />
              </div>
            </div>

            <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 gap-[4px] items-center min-w-px relative">
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                月份
              </p>
              <div className="flex-1 min-w-0">
                <SelectControl
                  ariaLabel="列表月份"
                  value={draft.month}
                  options={MONTH_OPTIONS}
                  onChange={(month) => onDraftChange({ ...draft, month })}
                />
              </div>
            </div>

            <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 gap-[4px] items-center min-w-px relative">
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                搜索供应商
              </p>
              <div className="flex-1 min-w-0">
                <SearchControl
                  value={draft.keyword}
                  onChange={(keyword) => onDraftChange({ ...draft, keyword })}
                  onSubmit={onQuery}
                />
              </div>
            </div>

            <div className="flex gap-[8px] h-[32px] items-start justify-end relative shrink-0 ml-auto">
              <button
                type="button"
                onClick={onQuery}
                className="bg-[#1677ff] hover:bg-[#4096ff] transition-colors cursor-pointer flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]"
              >
                <span className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  查询
                </span>
              </button>
              <button
                type="button"
                onClick={onReset}
                className="bg-white hover:border-[#4096ff] hover:text-[#1677ff] transition-colors cursor-pointer border border-[#ececec] border-solid flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]"
              >
                <span className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                  重置
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Supplier Cards */}
        <div className="flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-full">
          {suppliers.map((supplier) => {
            const isExpanded = Boolean(expandedMap[supplier.id]);
            return (
              <article
                key={supplier.id}
                className="bg-white flex flex-col gap-[16px] items-start p-[16px] relative rounded-[12px] shadow-[0px_9px_28px_8px_rgba(0,0,0,0.05),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_6px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full"
                data-name={`${supplier.name} · ${supplier.lamp}`}
              >
                <div className="flex flex-wrap sm:flex-nowrap gap-[16px] sm:gap-[24px] items-center relative shrink-0 w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-px relative">
                    <div className="flex flex-wrap gap-[24px] min-h-[24px] items-center relative shrink-0 w-full">
                      <div className="flex gap-[8px] items-center relative shrink-0">
                        <LampBadge lamp={supplier.lamp} />
                        <p className="font-['PingFang_SC:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
                          {supplier.name}
                        </p>
                      </div>
                      <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] whitespace-pre">
                        {supplier.metaText}
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full">
                      {supplier.issueSummary}
                    </p>
                  </div>

                  <div className="flex gap-[12px] items-center relative shrink-0 ml-auto">
                    <button
                      type="button"
                      className="cursor-pointer font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#1677ff] hover:text-[#4096ff] text-[14px] whitespace-nowrap"
                    >
                      导出当前画像
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleExpand(supplier.id)}
                      className="bg-[#1677ff] hover:bg-[#4096ff] transition-colors cursor-pointer flex h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0"
                    >
                      <span className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        {isExpanded ? "收起" : "展开"}
                      </span>
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <>
                    <div
                      className="flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full"
                      data-name="Monthly health history"
                    >
                      <p className="font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
                        历史状态
                      </p>
                      <div className="flex gap-[8px] items-center overflow-x-auto pb-[2px] relative shrink-0 w-full">
                        {supplier.history.map((h) => (
                          <HistoryCell key={h.month} item={h} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[16px] items-start relative shrink-0 w-full">
                      {supplier.dimensions.map((group) => (
                        <DimensionColumn key={group.name} group={group} />
                      ))}
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
