import { useMemo, useState } from "react";
import {
  imgEllipse2016,
  imgEllipse2022,
  imgEllipse2028,
  imgTrend,
  imgTrend1,
  imgTrend2,
} from "../assets";
import {
  FIFTEEN_SUB_DIMENSIONS_GROUPS,
  FIVE_DIMENSIONS_DATA,
  MONTHS_6,
  TREND_SERIES,
} from "../data/chartData";

const BAR_COLORS = ["bg-[#434343]", "bg-[#f5222d]", "bg-[#d48806]"] as const;

interface BarHoverState {
  title: string;
  parentGroup?: string;
  subtitle?: string;
  values: [number, number, number];
  indexRatio: number; // 0..1 across horizontal axis for smart tooltip placement
  anchorXPercent: number;
}

export function ChartsSection() {
  const [trendMode, setTrendMode] = useState<"risk" | "green">("risk");
  const [hoveredMonthIdx, setHoveredMonthIdx] = useState<number | null>(null);

  const [dimensionTab, setDimensionTab] = useState<"five" | "fifteen">("five");
  const [periodMode, setPeriodMode] = useState<"month" | "half">("month");
  const [populatedOnly, setPopulatedOnly] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<BarHoverState | null>(null);

  const visibleFiveDims = useMemo(() => {
    const mapped = FIVE_DIMENSIONS_DATA.map((d) => {
      const values = periodMode === "month" ? d.monthValues : d.halfValues;
      return { ...d, values };
    });
    if (!populatedOnly) return mapped;
    return mapped.filter((d) => d.values.some((v) => v > 0));
  }, [periodMode, populatedOnly]);

  const visibleSubDimGroups = useMemo(() => {
    const mapped = FIFTEEN_SUB_DIMENSIONS_GROUPS.map((g) => {
      const items = g.items
        .map((item) => ({
          ...item,
          values: periodMode === "month" ? item.monthValues : item.halfValues,
        }))
        .filter((item) =>
          populatedOnly ? item.values.some((v) => v > 0) : true,
        );
      return { groupName: g.groupName, items };
    });
    return mapped.filter((g) => g.items.length > 0);
  }, [periodMode, populatedOnly]);

  const totalVisibleSubItems = useMemo(
    () => visibleSubDimGroups.reduce((sum, g) => sum + g.items.length, 0),
    [visibleSubDimGroups],
  );

  const greenPathD = useMemo(() => {
    return TREND_SERIES.map(
      (pt, i) => `${i === 0 ? "M" : "L"}${pt.cx - 72} ${pt.green.cy - 24}`,
    ).join(" ");
  }, []);

  const greenAreaD = useMemo(() => {
    const first = TREND_SERIES[0];
    const last = TREND_SERIES[TREND_SERIES.length - 1];
    return `${greenPathD} L${last.cx - 72} 252 L${first.cx - 72} 252 Z`;
  }, [greenPathD]);

  const hoveredTrend =
    hoveredMonthIdx !== null ? TREND_SERIES[hoveredMonthIdx] : null;

  return (
    <div
      className="flex flex-col xl:flex-row gap-[16px] items-stretch relative shrink-0 w-full"
      data-name="Assessment scope"
    >
      {/* Left Chart: 健康状态趋势 */}
      <div
        className="bg-white flex flex-col h-[372px] items-start relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] shrink-0 w-full xl:w-[624px]"
        data-name="健康状态趋势"
      >
        <div
          className="flex h-[48px] items-center px-[16px] relative shrink-0 w-full"
          data-name="健康状态趋势 heading"
        >
          <p className="[word-break:break-word] flex-1 font-['PingFang_SC:Semibold'] leading-[24px] min-w-px not-italic relative text-[#20324d] text-[16px]">
            健康状态趋势
          </p>

          <div
            className="flex gap-[16px] items-center justify-end pr-[16px] relative shrink-0"
            data-name="Health status legend"
          >
            {trendMode === "risk" ? (
              <>
                <div className="flex gap-[6px] h-[22px] items-center relative shrink-0">
                  <div className="bg-[#434343] h-[2px] relative shrink-0 w-[14px]" />
                  <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                    黑灯
                  </p>
                </div>
                <div className="flex gap-[6px] h-[22px] items-center relative shrink-0">
                  <div className="bg-[#f5222d] h-[2px] relative shrink-0 w-[14px]" />
                  <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                    红灯
                  </p>
                </div>
                <div className="flex gap-[6px] h-[22px] items-center relative shrink-0">
                  <div className="bg-[#d48806] h-[2px] relative shrink-0 w-[14px]" />
                  <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                    黄灯
                  </p>
                </div>
              </>
            ) : (
              <div className="flex gap-[6px] h-[22px] items-center relative shrink-0">
                <div className="bg-[#52c41a] h-[2px] relative shrink-0 w-[14px]" />
                <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#65738c] text-[14px] whitespace-nowrap">
                  绿灯
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center relative shrink-0">
            <button
              type="button"
              onClick={() => setTrendMode("risk")}
              className={`cursor-pointer flex h-[24px] items-center justify-center px-[8px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 border border-solid transition-colors ${
                trendMode === "risk"
                  ? "bg-[#1677ff] border-[#1677ff] text-white font-['PingFang_SC:Medium']"
                  : "bg-white border-[#d9d9d9] text-[rgba(0,0,0,0.88)] font-['PingFang_SC:Regular']"
              }`}
            >
              <span className="leading-[22px] not-italic text-[14px] whitespace-nowrap">
                黑红黄灯
              </span>
            </button>
            <button
              type="button"
              onClick={() => setTrendMode("green")}
              className={`cursor-pointer flex h-[24px] items-center justify-center px-[8px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 border-t border-r border-b border-solid transition-colors ${
                trendMode === "green"
                  ? "bg-[#1677ff] border-[#1677ff] text-white font-['PingFang_SC:Medium']"
                  : "bg-white border-[#d9d9d9] text-[rgba(0,0,0,0.88)] font-['PingFang_SC:Regular']"
              }`}
            >
              <span className="leading-[22px] not-italic text-[14px] whitespace-nowrap">
                绿灯
              </span>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div
            className="h-[302px] relative shrink-0 w-[624px] mx-auto select-none"
            data-name="Six month health trend"
            onMouseLeave={() => setHoveredMonthIdx(null)}
          >
            <div className="absolute flex flex-col items-start left-[4px] top-[13px] w-[620px]">
              <div className="flex flex-col h-[274px] items-start justify-between relative shrink-0 w-[594px]">
                {(trendMode === "risk"
                  ? ["12", "9", "6", "3", "0"]
                  : ["210", "205", "200", "195", "190"]
                ).map((tick) => (
                  <div
                    key={tick}
                    className="flex gap-[10px] items-center relative shrink-0 w-full"
                  >
                    <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#7d8ca6] text-[14px] text-right w-[30px]">
                      {tick}
                    </p>
                    <div className="bg-[#edf1f7] h-px relative shrink-0 w-[554px]" />
                  </div>
                ))}
              </div>

              <div className="flex font-['PingFang_SC:Regular'] items-center justify-between leading-[18px] not-italic pl-[32px] pr-[18px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.65)] text-center w-full">
                {MONTHS_6.map((m, idx) => (
                  <p
                    key={m}
                    className={`relative shrink-0 w-[70px] transition-colors ${
                      hoveredMonthIdx === idx
                        ? "text-[#1677ff] font-['PingFang_SC:Medium']"
                        : ""
                    }`}
                  >
                    {m}
                  </p>
                ))}
              </div>
            </div>

            {/* Hover vertical dashed guide line */}
            {hoveredTrend && (
              <div
                className="pointer-events-none absolute top-[24px] h-[252px] w-px border-l border-dashed border-[#1677ff]/60 z-10 transition-all duration-100"
                style={{ left: `${hoveredTrend.cx}px` }}
              />
            )}

            {trendMode === "risk" ? (
              <>
                <div
                  className="absolute h-[23.5px] left-[71.5px] top-[252px] w-[502px] pointer-events-none"
                  data-name="黑灯 trend"
                >
                  <div className="absolute inset-[-3.19%_0]">
                    <img alt="" className="block max-w-none" src={imgTrend} />
                  </div>
                </div>
                <div
                  className="absolute h-[16px] left-[72px] top-[187px] w-[502px] pointer-events-none"
                  data-name="红灯 trend"
                >
                  <div className="absolute inset-[-4.75%_0]">
                    <img alt="" className="block max-w-none" src={imgTrend1} />
                  </div>
                </div>
                <div
                  className="absolute h-[130px] left-[72px] top-[40px] w-[502px] pointer-events-none"
                  data-name="黄灯 trend"
                >
                  <div className="absolute inset-[-0.63%_0_-0.48%_0]">
                    <img alt="" className="block max-w-none" src={imgTrend2} />
                  </div>
                </div>

                {TREND_SERIES.map((pt, idx) => {
                  const isHovered = hoveredMonthIdx === idx;
                  return (
                    <div
                      key={`pts-${pt.month}`}
                      className="pointer-events-none"
                    >
                      <div
                        className={`absolute size-[8px] rounded-full transition-transform duration-150 ${
                          isHovered
                            ? "scale-125 ring-4 ring-[#faad14]/25 z-20"
                            : ""
                        }`}
                        style={{
                          left: `${pt.yellow.left}px`,
                          top: `${pt.yellow.top}px`,
                        }}
                      >
                        <img
                          alt=""
                          className="block max-w-none"
                          src={imgEllipse2016}
                        />
                      </div>
                      <div
                        className={`absolute size-[8px] rounded-full transition-transform duration-150 ${
                          isHovered
                            ? "scale-125 ring-4 ring-[#f5222d]/25 z-20"
                            : ""
                        }`}
                        style={{
                          left: `${pt.red.left}px`,
                          top: `${pt.red.top}px`,
                        }}
                      >
                        <img
                          alt=""
                          className="block max-w-none"
                          src={imgEllipse2022}
                        />
                      </div>
                      <div
                        className={`absolute size-[8px] rounded-full transition-transform duration-150 ${
                          isHovered
                            ? "scale-125 ring-4 ring-[#434343]/20 z-20"
                            : ""
                        }`}
                        style={{
                          left: `${pt.black.left}px`,
                          top: `${pt.black.top}px`,
                        }}
                      >
                        <img
                          alt=""
                          className="block max-w-none"
                          src={imgEllipse2028}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <svg
                  className="absolute left-[72px] top-[24px] overflow-visible pointer-events-none"
                  width="502"
                  height="252"
                  viewBox="0 0 502 252"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="greenTrendArea"
                      x1="0"
                      y1="60"
                      x2="0"
                      y2="252"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#52C41A" stopOpacity="0.16" />
                      <stop
                        offset="100%"
                        stopColor="#52C41A"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>
                  <path d={greenAreaD} fill="url(#greenTrendArea)" />
                  <path
                    d={greenPathD}
                    stroke="#52C41A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {TREND_SERIES.map((pt, idx) => {
                  const isHovered = hoveredMonthIdx === idx;
                  return (
                    <div
                      key={`g-${pt.month}`}
                      className={`pointer-events-none absolute size-[8px] rounded-full bg-[#52c41a] border border-white transition-transform duration-150 ${
                        isHovered
                          ? "scale-125 ring-4 ring-[#52c41a]/25 z-20"
                          : ""
                      }`}
                      style={{
                        left: `${pt.cx - 4}px`,
                        top: `${pt.green.cy - 4}px`,
                      }}
                    />
                  );
                })}
              </>
            )}

            {/* Month Hover Hit Zones */}
            {TREND_SERIES.map((pt, idx) => (
              <div
                key={`hit-${pt.month}`}
                onMouseEnter={() => setHoveredMonthIdx(idx)}
                className="absolute top-[16px] h-[278px] cursor-crosshair z-20"
                style={{
                  left: `${pt.cx - 46}px`,
                  width: "92px",
                }}
              />
            ))}

            {/* Line Chart Floating Tooltip */}
            {hoveredTrend && hoveredMonthIdx !== null && (
              <div
                className="pointer-events-none absolute top-[26px] z-30 min-w-[164px] rounded-[8px] border border-[#dce7f7] bg-white/96 backdrop-blur-[4px] px-[12px] py-[10px] shadow-[0px_8px_20px_rgba(32,50,77,0.12)] transition-all duration-100"
                style={
                  hoveredMonthIdx <= 2
                    ? { left: `${hoveredTrend.cx + 14}px` }
                    : { left: `${hoveredTrend.cx - 178}px` }
                }
              >
                <div className="flex items-center justify-between gap-[8px] border-b border-[#edf1f7] pb-[6px] mb-[6px]">
                  <span className="font-['PingFang_SC:Semibold'] text-[13px] leading-[18px] text-[#20324d]">
                    {hoveredTrend.month}
                  </span>
                  {trendMode === "risk" ? (
                    <span className="rounded-[4px] bg-[#fff1f0] px-[6px] py-[1px] font-['PingFang_SC:Medium'] text-[11px] leading-[16px] text-[#cf1322]">
                      异常{" "}
                      {hoveredTrend.black.value +
                        hoveredTrend.red.value +
                        hoveredTrend.yellow.value}{" "}
                      家
                    </span>
                  ) : (
                    <span className="rounded-[4px] bg-[#f6ffed] px-[6px] py-[1px] font-['PingFang_SC:Medium'] text-[11px] leading-[16px] text-[#389e0d]">
                      健康率 {hoveredTrend.green.rate}
                    </span>
                  )}
                </div>

                {trendMode === "risk" ? (
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex items-center justify-between text-[12px] leading-[18px]">
                      <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
                        <span className="size-[7px] rounded-full bg-[#434343]" />
                        黑灯供应商
                      </span>
                      <span className="font-['PingFang_SC:Medium'] text-[#20324d]">
                        {hoveredTrend.black.value} 家
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] leading-[18px]">
                      <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
                        <span className="size-[7px] rounded-full bg-[#f5222d]" />
                        红灯供应商
                      </span>
                      <span className="font-['PingFang_SC:Medium'] text-[#f5222d]">
                        {hoveredTrend.red.value} 家
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] leading-[18px]">
                      <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
                        <span className="size-[7px] rounded-full bg-[#faad14]" />
                        黄灯供应商
                      </span>
                      <span className="font-['PingFang_SC:Medium'] text-[#d48806]">
                        {hoveredTrend.yellow.value} 家
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex items-center justify-between text-[12px] leading-[18px]">
                      <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
                        <span className="size-[7px] rounded-full bg-[#52c41a]" />
                        绿灯供应商
                      </span>
                      <span className="font-['PingFang_SC:Medium'] text-[#389e0d]">
                        {hoveredTrend.green.value} 家
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] leading-[18px]">
                      <span className="text-[#65738c] font-['PingFang_SC:Regular']">
                        较上月变化
                      </span>
                      <span
                        className={`font-['PingFang_SC:Medium'] ${
                          hoveredTrend.green.diff >= 0
                            ? "text-[#389e0d]"
                            : "text-[#f5222d]"
                        }`}
                      >
                        {hoveredTrend.green.diff >= 0
                          ? `+${hoveredTrend.green.diff} 家`
                          : `${hoveredTrend.green.diff} 家`}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Chart: 五大维度健康分布 / 十五子维度健康分布 */}
      <div className="bg-white flex flex-col justify-between min-h-[372px] items-stretch p-[12px] relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-[8px] 2xl:gap-[12px] relative shrink-0 w-full">
          <div className="flex font-['PingFang_SC:Semibold'] gap-[12px] 2xl:gap-[16px] items-center leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
            <button
              type="button"
              onClick={() => {
                setDimensionTab("five");
                setHoveredBar(null);
              }}
              className={`cursor-pointer transition-colors ${
                dimensionTab === "five" ? "text-[#1677ff]" : "text-[#20324d]"
              }`}
            >
              五大维度健康分布
            </button>
            <button
              type="button"
              onClick={() => {
                setDimensionTab("fifteen");
                setHoveredBar(null);
              }}
              className={`cursor-pointer transition-colors ${
                dimensionTab === "fifteen" ? "text-[#1677ff]" : "text-[#20324d]"
              }`}
            >
              十五子维度健康分布
            </button>
          </div>

          <div className="flex gap-[8px] items-center relative shrink-0">
            <div className="flex gap-[4px] items-center relative shrink-0">
              <div className="bg-[#434343] relative shrink-0 size-[6px]" />
              <p className="font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[#65738c] text-[12px] text-center whitespace-nowrap">
                黑灯
              </p>
            </div>
            <div className="flex gap-[4px] items-center relative shrink-0">
              <div className="bg-[#f5222d] relative shrink-0 size-[6px]" />
              <p className="font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[#65738c] text-[12px] text-center whitespace-nowrap">
                红灯
              </p>
            </div>
            <div className="flex gap-[4px] items-center relative shrink-0">
              <div className="bg-[#d48806] relative shrink-0 size-[6px]" />
              <p className="font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[#65738c] text-[12px] text-center whitespace-nowrap">
                黄灯
              </p>
            </div>
          </div>

          <div className="flex gap-[8px] 2xl:gap-[16px] items-center relative shrink-0">
            <button
              type="button"
              onClick={() => {
                setPopulatedOnly((prev) => !prev);
                setHoveredBar(null);
              }}
              className={`transition-colors cursor-pointer flex h-[24px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0 ${
                populatedOnly
                  ? "bg-[#0958d9] hover:bg-[#1677ff]"
                  : "bg-[#1677ff] hover:bg-[#4096ff]"
              }`}
            >
              <span className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                {populatedOnly ? "All Data" : "Populated Data"}
              </span>
            </button>
            <button
              type="button"
              className="bg-[#1677ff] hover:bg-[#4096ff] transition-colors cursor-pointer flex h-[24px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0"
            >
              <span className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                Trend
              </span>
            </button>

            <div className="flex items-center relative shrink-0">
              <button
                type="button"
                onClick={() => {
                  setPeriodMode("month");
                  setHoveredBar(null);
                }}
                className={`cursor-pointer flex h-[24px] items-center justify-center px-[8px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 border border-solid transition-colors ${
                  periodMode === "month"
                    ? "bg-[#1677ff] border-[#1677ff] text-white font-['PingFang_SC:Medium']"
                    : "bg-white border-[#d9d9d9] text-[rgba(0,0,0,0.88)] font-['PingFang_SC:Regular']"
                }`}
              >
                <span className="leading-[22px] not-italic text-[14px] whitespace-nowrap">
                  月度
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setPeriodMode("half");
                  setHoveredBar(null);
                }}
                className={`cursor-pointer flex h-[24px] items-center justify-center px-[8px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 border-t border-r border-b border-solid transition-colors ${
                  periodMode === "half"
                    ? "bg-[#1677ff] border-[#1677ff] text-white font-['PingFang_SC:Medium']"
                    : "bg-white border-[#d9d9d9] text-[rgba(0,0,0,0.88)] font-['PingFang_SC:Regular']"
                }`}
              >
                <span className="leading-[22px] not-italic text-[14px] whitespace-nowrap">
                  半年
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bar Chart Plot Container */}
        {dimensionTab === "five" ? (
          <div
            className="relative h-[304px] w-full pl-[7px] pr-[10px] pt-[12px] select-none"
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="flex flex-col justify-between h-[268px] w-full">
              {["8", "6", "4", "2", "0"].map((tick) => (
                <div
                  key={tick}
                  className="flex items-center gap-[11.5px] w-full h-[18px]"
                >
                  <p className="font-['PingFang_SC:Regular'] leading-[18px] not-italic text-[#7d8ca6] text-[12px] text-right w-[10px] shrink-0">
                    {tick}
                  </p>
                  <div className="bg-[#edf1f7] h-[1.25px] flex-1" />
                </div>
              ))}
            </div>

            <div
              className={`absolute left-[49px] right-[11px] top-[35px] flex items-end ${
                populatedOnly ? "justify-around" : "justify-between"
              }`}
            >
              {visibleFiveDims.map((group, gIdx) => {
                const isHovered = hoveredBar?.title === group.label;
                const count = visibleFiveDims.length;
                const ratio = count <= 1 ? 0.5 : gIdx / (count - 1);
                const anchorPct = ((gIdx + 0.5) / Math.max(count, 1)) * 100;

                return (
                  <div
                    key={group.label}
                    onMouseEnter={() =>
                      setHoveredBar({
                        title: group.label,
                        subtitle: group.subSummary,
                        values: group.values,
                        indexRatio: ratio,
                        anchorXPercent: anchorPct,
                      })
                    }
                    className={`flex flex-col gap-[9px] items-center relative shrink-0 px-[10px] pt-[8px] pb-[4px] rounded-[8px] cursor-pointer transition-colors ${
                      isHovered ? "bg-[#1677ff]/[0.05]" : ""
                    }`}
                  >
                    <div className="flex gap-[4px] items-end h-[228px] relative shrink-0">
                      {group.values.map((val, bIdx) => {
                        // Exact 0..8 gridline height = 250px -> 31.25px per unit; preserve Figma 28/57/174 feel
                        const barH =
                          val === 0 ? 2 : Math.round((val / 8) * 246);
                        return (
                          <div
                            key={bIdx}
                            className="flex flex-col gap-[4px] items-center justify-end relative shrink-0"
                          >
                            <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-center whitespace-nowrap">
                              {val}
                            </p>
                            <div
                              className={`${BAR_COLORS[bIdx]} relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[26px] 2xl:w-[48px] transition-all duration-150 ${
                                isHovered ? "brightness-105" : ""
                              }`}
                              style={{ height: `${barH}px` }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <p
                      className={`font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap transition-colors ${
                        isHovered
                          ? "text-[#1677ff] font-['PingFang_SC:Medium']"
                          : "text-[rgba(0,0,0,0.65)]"
                      }`}
                    >
                      {group.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bar Chart Floating Tooltip */}
            {hoveredBar && (
              <BarTooltipCard hoveredBar={hoveredBar} periodMode={periodMode} />
            )}
          </div>
        ) : (
          /* 十五子维度健康分布: Dual X-Axis + Alternating Group Background Bands */
          <div
            className="w-full overflow-x-auto"
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="relative h-[306px] min-w-[680px] w-full pl-[6px] pr-[6px] pt-[12px] select-none">
              {/* Y-Axis Labels + Horizontal Gridlines */}
              <div className="pointer-events-none absolute left-[6px] right-[6px] top-[18px] z-10 flex flex-col justify-between h-[204px]">
                {["8", "6", "4", "2", "0"].map((tick) => (
                  <div
                    key={tick}
                    className="flex items-center gap-[10px] w-full h-[16px]"
                  >
                    <p className="font-['PingFang_SC:Regular'] leading-[16px] not-italic text-[#7d8ca6] text-[12px] text-right w-[12px] shrink-0">
                      {tick}
                    </p>
                    <div className="bg-[#e8edf5]/90 h-px flex-1" />
                  </div>
                ))}
              </div>

              {/* Grouped Columns with Shaded Background Bands & Dual X-Axis */}
              <div className="relative ml-[28px] mr-[2px] mt-[14px] flex items-stretch h-[278px]">
                {visibleSubDimGroups.map((group, gIdx) => {
                  const isShaded = gIdx % 2 === 0;
                  const prevItemsCount = visibleSubDimGroups
                    .slice(0, gIdx)
                    .reduce((s, g) => s + g.items.length, 0);

                  return (
                    <div
                      key={group.groupName}
                      style={{ flex: group.items.length }}
                      className={`flex flex-col justify-between rounded-[2px] pt-[12px] pb-[6px] transition-colors ${
                        isShaded ? "bg-[#f5f6f8]" : "bg-transparent"
                      }`}
                    >
                      {/* Bars + Sub-dimension X-Axis Row */}
                      <div className="flex items-stretch justify-around w-full flex-1">
                        {group.items.map((sub, sIdx) => {
                          const globalIdx = prevItemsCount + sIdx;
                          const ratio =
                            totalVisibleSubItems <= 1
                              ? 0.5
                              : globalIdx / (totalVisibleSubItems - 1);
                          const anchorPct =
                            ((globalIdx + 0.5) /
                              Math.max(totalVisibleSubItems, 1)) *
                            100;
                          const isHovered = hoveredBar?.title === sub.name;

                          return (
                            <div
                              key={sub.id}
                              onMouseEnter={() =>
                                setHoveredBar({
                                  title: sub.name,
                                  parentGroup: group.groupName,
                                  values: sub.values,
                                  indexRatio: ratio,
                                  anchorXPercent: anchorPct,
                                })
                              }
                              className={`flex-1 flex flex-col items-center cursor-pointer rounded-[6px] px-[2px] transition-colors relative z-20 ${
                                isHovered ? "bg-[#1677ff]/[0.07]" : ""
                              }`}
                            >
                              {/* Bar Plot Zone (bottom aligns to 0 gridline at 188px from top of group) */}
                              <div className="flex gap-[3px] min-[1600px]:gap-[5px] items-end justify-center h-[188px] w-full">
                                {sub.values.map((val, bIdx) => {
                                  // 0..8 gridline span = 188px -> 23.5px per 1 unit (6 = 141px, 2 = 47px, 1 = 23.5px)
                                  const barH =
                                    val === 0
                                      ? 2.5
                                      : Math.round((val / 8) * 188);
                                  return (
                                    <div
                                      key={bIdx}
                                      className="flex flex-col gap-[3px] items-center justify-end"
                                    >
                                      <span className="font-['PingFang_SC:Regular'] leading-[16px] text-[12px] text-[rgba(0,0,0,0.65)] text-center whitespace-nowrap">
                                        {val}
                                      </span>
                                      <div
                                        className={`${BAR_COLORS[bIdx]} rounded-t-[2px] shrink-0 w-[6px] min-[1560px]:w-[9px] transition-all duration-150`}
                                        style={{ height: `${barH}px` }}
                                      />
                                    </div>
                                  );
                                })}
                              </div>

                              {/* X-Axis Level 1: Sub-Dimension Name */}
                              <div
                                className={`mt-[10px] h-[36px] flex flex-col items-center justify-start text-center font-['PingFang_SC:Regular'] text-[12px] leading-[17px] transition-colors ${
                                  isHovered
                                    ? "text-[#1677ff] font-['PingFang_SC:Medium']"
                                    : "text-[rgba(0,0,0,0.65)]"
                                }`}
                              >
                                {sub.lines.map((line, lIdx) => (
                                  <span
                                    key={lIdx}
                                    className="whitespace-nowrap"
                                  >
                                    {line}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* X-Axis Level 2: Parent Dimension Group Label */}
                      <div className="mt-[4px] pt-[2px] text-center">
                        <span className="font-['PingFang_SC:Regular'] text-[12px] min-[1600px]:text-[13px] leading-[18px] text-[rgba(0,0,0,0.85)] whitespace-nowrap">
                          {group.groupName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bar Chart Floating Tooltip */}
              {hoveredBar && (
                <BarTooltipCard
                  hoveredBar={hoveredBar}
                  periodMode={periodMode}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BarTooltipCard({
  hoveredBar,
  periodMode,
}: {
  hoveredBar: BarHoverState;
  periodMode: "month" | "half";
}) {
  const totalRisk =
    hoveredBar.values[0] + hoveredBar.values[1] + hoveredBar.values[2];

  // Position cleanly without overflowing left or right edge
  const clampedPct = Math.min(Math.max(hoveredBar.anchorXPercent, 14), 84);

  return (
    <div
      className="pointer-events-none absolute top-[18px] z-30 min-w-[180px] max-w-[240px] -translate-x-1/2 rounded-[8px] border border-[#dce7f7] bg-white/96 backdrop-blur-[4px] px-[12px] py-[10px] shadow-[0px_8px_20px_rgba(32,50,77,0.12)] transition-all duration-100"
      style={{ left: `${clampedPct}%` }}
    >
      <div className="flex flex-col gap-[3px] border-b border-[#edf1f7] pb-[6px] mb-[6px]">
        <div className="flex items-center justify-between gap-[8px]">
          <span className="font-['PingFang_SC:Semibold'] text-[13px] leading-[18px] text-[#20324d] whitespace-nowrap">
            {hoveredBar.title}
          </span>
          <span
            className={`rounded-[4px] px-[6px] py-[1px] font-['PingFang_SC:Medium'] text-[11px] leading-[16px] whitespace-nowrap ${
              totalRisk > 0
                ? "bg-[#fff1f0] text-[#cf1322]"
                : "bg-[#f6ffed] text-[#389e0d]"
            }`}
          >
            {totalRisk > 0 ? `异常 ${totalRisk} 家` : "全部正常"}
          </span>
        </div>
        {hoveredBar.parentGroup && (
          <span className="font-['PingFang_SC:Regular'] text-[11px] leading-[16px] text-[#1677ff]">
            所属维度：{hoveredBar.parentGroup}（
            {periodMode === "month" ? "月度" : "半年"}）
          </span>
        )}
        {hoveredBar.subtitle && (
          <span className="font-['PingFang_SC:Regular'] text-[11px] leading-[15px] text-[#7d8ca6]">
            子项：{hoveredBar.subtitle}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-[4px]">
        <div className="flex items-center justify-between text-[12px] leading-[18px]">
          <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
            <span className="size-[6px] bg-[#434343]" />
            黑灯供应商
          </span>
          <span className="font-['PingFang_SC:Medium'] text-[#20324d]">
            {hoveredBar.values[0]} 家
          </span>
        </div>
        <div className="flex items-center justify-between text-[12px] leading-[18px]">
          <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
            <span className="size-[6px] bg-[#f5222d]" />
            红灯供应商
          </span>
          <span className="font-['PingFang_SC:Medium'] text-[#f5222d]">
            {hoveredBar.values[1]} 家
          </span>
        </div>
        <div className="flex items-center justify-between text-[12px] leading-[18px]">
          <span className="flex items-center gap-[6px] text-[#65738c] font-['PingFang_SC:Regular']">
            <span className="size-[6px] bg-[#d48806]" />
            黄灯供应商
          </span>
          <span className="font-['PingFang_SC:Medium'] text-[#d48806]">
            {hoveredBar.values[2]} 家
          </span>
        </div>
      </div>
    </div>
  );
}
