import {
  CATEGORY_OPTIONS,
  MONTH_OPTIONS,
  SUPPLIER_OPTIONS,
} from "../data/suppliers";
import {
  type FilterValues,
  SearchControl,
  SelectControl,
} from "./FilterControls";

interface AssessmentFiltersProps {
  draft: FilterValues;
  onDraftChange: (next: FilterValues) => void;
  onQuery: () => void;
  onReset: () => void;
}

export function AssessmentFilters({
  draft,
  onDraftChange,
  onQuery,
  onReset,
}: AssessmentFiltersProps) {
  return (
    <section
      className="bg-white flex flex-wrap lg:flex-nowrap gap-[16px] items-end p-[16px] relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] shrink-0 w-full"
      data-name="Assessment filters"
    >
      <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 flex-col gap-[4px] h-[58px] items-start min-w-px relative">
        <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
          一级类别
        </p>
        <SelectControl
          ariaLabel="一级类别"
          value={draft.category}
          options={CATEGORY_OPTIONS}
          onChange={(category) => onDraftChange({ ...draft, category })}
        />
      </div>

      <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 flex-col gap-[4px] h-[58px] items-start min-w-px relative">
        <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
          供应商
        </p>
        <SelectControl
          ariaLabel="供应商"
          value={draft.supplier}
          options={SUPPLIER_OPTIONS}
          onChange={(supplier) => onDraftChange({ ...draft, supplier })}
        />
      </div>

      <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 flex-col gap-[4px] h-[58px] items-start min-w-px relative">
        <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
          月份
        </p>
        <SelectControl
          ariaLabel="月份"
          value={draft.month}
          options={MONTH_OPTIONS}
          onChange={(month) => onDraftChange({ ...draft, month })}
        />
      </div>

      <div className="flex w-full sm:w-[calc(50%-8px)] lg:flex-1 flex-col gap-[4px] h-[58px] items-start min-w-px relative">
        <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
          搜索供应商
        </p>
        <SearchControl
          value={draft.keyword}
          onChange={(keyword) => onDraftChange({ ...draft, keyword })}
          onSubmit={onQuery}
        />
      </div>

      <div className="flex w-full lg:flex-1 gap-[8px] h-[32px] items-start justify-end min-w-px relative">
        <button
          type="button"
          onClick={onQuery}
          className="bg-[#1677ff] hover:bg-[#4096ff] transition-colors cursor-pointer flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]"
        >
          <span className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            查询
          </span>
        </button>
        <button
          type="button"
          onClick={onReset}
          className="bg-white hover:border-[#4096ff] hover:text-[#1677ff] transition-colors cursor-pointer border border-[#ececec] border-solid flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]"
        >
          <span className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
            重置
          </span>
        </button>
      </div>
    </section>
  );
}
