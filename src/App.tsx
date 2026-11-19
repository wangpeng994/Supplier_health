import { useMemo, useState } from "react";
import { AssessmentFilters } from "./components/AssessmentFilters";
import { ChartsSection } from "./components/ChartsSection";
import type { FilterValues } from "./components/FilterControls";
import { PrioritySuppliersSection } from "./components/PrioritySuppliersSection";
import { ProductHeader } from "./components/ProductHeader";
import { RiskWarningBanner } from "./components/RiskWarningBanner";
import { StatusMetricCards } from "./components/StatusMetricCards";
import { PRIORITY_SUPPLIERS } from "./data/suppliers";

const DEFAULT_FILTERS: FilterValues = {
  category: "全部类别",
  supplier: "全部供应商",
  month: "2026-10",
  keyword: "",
};

export default function App() {
  const [topDraft, setTopDraft] = useState<FilterValues>(DEFAULT_FILTERS);
  const [listDraft, setListDraft] = useState<FilterValues>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] =
    useState<FilterValues>(DEFAULT_FILTERS);

  const filteredSuppliers = useMemo(() => {
    return PRIORITY_SUPPLIERS.filter((item) => {
      if (
        appliedFilters.category !== "全部类别" &&
        item.category !== appliedFilters.category
      ) {
        return false;
      }
      if (
        appliedFilters.supplier !== "全部供应商" &&
        item.name !== appliedFilters.supplier
      ) {
        return false;
      }
      if (
        appliedFilters.keyword.trim() &&
        !item.name
          .toLowerCase()
          .includes(appliedFilters.keyword.trim().toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [appliedFilters]);

  const handleTopQuery = () => {
    setAppliedFilters(topDraft);
    setListDraft(topDraft);
  };

  const handleTopReset = () => {
    setTopDraft(DEFAULT_FILTERS);
    setListDraft(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
  };

  const handleListQuery = () => {
    setAppliedFilters(listDraft);
    setTopDraft(listDraft);
  };

  const handleListReset = () => {
    setListDraft(DEFAULT_FILTERS);
    setTopDraft(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
  };

  return (
    <div
      className="bg-[#f4f7fc] flex flex-col items-start min-h-screen relative w-full"
      data-name="供应商健康智能体 · 3D 浅蓝总览 V1"
    >
      <ProductHeader />

      <main
        className="flex flex-col gap-[20px] items-start p-[24px] relative shrink-0 w-full"
        data-name="Supplier health overview"
      >
        <RiskWarningBanner />

        <AssessmentFilters
          draft={topDraft}
          onDraftChange={setTopDraft}
          onQuery={handleTopQuery}
          onReset={handleTopReset}
        />

        <div
          className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
          data-name="Assessment status metrics"
        >
          <StatusMetricCards />
          <ChartsSection />
        </div>

        <PrioritySuppliersSection
          suppliers={filteredSuppliers}
          draft={listDraft}
          onDraftChange={setListDraft}
          onQuery={handleListQuery}
          onReset={handleListReset}
        />
      </main>
    </div>
  );
}
