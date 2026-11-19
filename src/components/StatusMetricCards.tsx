import { useState } from "react";
import { imgGroup1321315963, imgImage343 } from "../assets";
import { LampIllustration } from "./LampIllustration";

const YELLOW_SUPPLIERS_PAGES = [
  [
    { name: "辰阳电子", metric: "TCRR", category: "Safety" },
    { name: "飞毛腿", metric: "TCRR", category: "Safety" },
    { name: "和辉光电", metric: "TCRR", category: "Display" },
    { name: "旗声科技", metric: "TCRR", category: "Acoustic" },
  ],
  [
    { name: "三星集团", metric: "TCRR", category: "Imager" },
    { name: "维科", metric: "TCRR", category: "Safety" },
  ],
];

function NewTag({ visible }: { visible: boolean }) {
  return (
    <div
      className={`bg-[#cf1322] flex-col items-center justify-center px-[4px] relative rounded-br-[8px] rounded-tl-[8px] shrink-0 w-[33px] ${
        visible
          ? "flex"
          : "hidden min-[1680px]:flex opacity-0 pointer-events-none select-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-[#f5222d] flex flex-col items-center justify-center px-[4px] relative rounded-br-[8px] rounded-tl-[8px] shrink-0">
        <span className="font-['PingFang_SC:Medium'] leading-[14px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          New
        </span>
      </div>
    </div>
  );
}

export function StatusMetricCards() {
  const [yellowPage, setYellowPage] = useState(0);
  const currentYellowItems = YELLOW_SUPPLIERS_PAGES[yellowPage];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] items-stretch relative shrink-0 w-full"
      data-name="四类灯态 · 核心指标"
    >
      {/* 黑灯评估对象 */}
      <div
        className="bg-gradient-to-b border border-[rgba(0,0,0,0.25)] border-solid flex from-[#f1f5fa] gap-[12px] min-[1680px]:gap-[24px] min-h-[196px] items-start min-w-px overflow-hidden p-[12px] min-[1680px]:p-[16px] relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] to-white"
        data-name="黑灯评估对象"
      >
        <div className="flex flex-col gap-[12px] items-start relative shrink-0">
          <LampIllustration lamp="黑灯" size={48} />
          <div className="flex flex-col items-start justify-center relative shrink-0">
            <div className="flex gap-[4px] items-end not-italic relative shrink-0 w-full">
              <p className="font-['PingFang_SC:Medium'] leading-[44px] relative shrink-0 text-[#1f2f48] text-[36px] whitespace-nowrap">
                1
              </p>
              <p className="font-['PingFang_SC:Regular'] h-[24px] leading-[20px] relative shrink-0 text-[12px] text-[rgba(31,47,72,0.68)] whitespace-nowrap">
                较上月 —
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col h-[32px] items-start justify-center min-w-px relative">
          <div className="flex items-center justify-between gap-[4px] relative shrink-0 w-full">
            <div className="flex gap-[4px] items-center min-w-0 relative">
              <NewTag visible={false} />
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#1f2f48] text-[13px] min-[1560px]:text-[14px] w-[60px] min-[1680px]:w-[84px] whitespace-nowrap">
                捷荣技术
              </p>
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[13px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
                供应链连续性
              </p>
            </div>
            <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[13px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
              ME
            </p>
          </div>
        </div>
      </div>

      {/* 红灯评估对象 */}
      <div
        className="bg-gradient-to-b border border-[#ffa39e] border-solid flex from-[#fff3f5] gap-[8px] xl:gap-[6px] min-[1560px]:gap-[16px] min-[1680px]:gap-[24px] min-h-[196px] items-start min-w-px overflow-hidden p-[12px] xl:px-[10px] min-[1560px]:p-[16px] relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] to-white"
        data-name="红灯评估对象"
      >
        <div className="flex flex-col gap-[12px] items-start relative shrink-0">
          <LampIllustration lamp="红灯" size={48} />
          <div className="flex flex-col items-start justify-center relative shrink-0">
            <div className="flex gap-[4px] items-end not-italic relative shrink-0 text-[#f5222d] w-full">
              <p className="font-['PingFang_SC:Medium'] leading-[44px] relative shrink-0 text-[36px] whitespace-nowrap">
                2
              </p>
              <p className="font-['PingFang_SC:Regular'] h-[26px] leading-[22px] relative shrink-0 text-[13px] whitespace-nowrap">
                较上月 ↑1
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-[2px] items-start justify-center min-w-px relative">
          <div className="flex h-[32px] items-center justify-between gap-[4px] relative shrink-0 w-full">
            <div className="flex gap-[4px] items-center min-w-0 relative">
              <NewTag visible={true} />
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.85)] w-[36px] min-[1560px]:w-[64px] min-[1680px]:w-[84px] whitespace-nowrap">
                丘钛
              </p>
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative truncate text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)]">
                质量异常管理
              </p>
            </div>
            <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
              Imager
            </p>
          </div>

          <div className="flex h-[32px] items-center justify-between gap-[4px] relative shrink-0 w-full">
            <div className="flex gap-[4px] items-center min-w-0 relative">
              <div className="w-[33px] shrink-0" aria-hidden="true" />
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.85)] w-[36px] min-[1560px]:w-[64px] min-[1680px]:w-[84px] whitespace-nowrap">
                欣旺达
              </p>
              <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative truncate text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)]">
                质量异常管理
              </p>
            </div>
            <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
              ME
            </p>
          </div>
        </div>
      </div>

      {/* 黄灯评估对象 */}
      <div
        className="bg-gradient-to-b border border-[#ffd666] border-solid flex from-[#fff9ec] gap-[12px] min-[1680px]:gap-[24px] min-h-[196px] items-start min-w-px overflow-hidden p-[12px] min-[1680px]:p-[16px] relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] to-white"
        data-name="黄灯评估对象"
      >
        <div className="flex flex-col gap-[12px] items-start relative shrink-0">
          <LampIllustration lamp="黄灯" size={48} />
          <div className="flex flex-col items-start justify-center relative shrink-0">
            <div className="flex gap-[4px] items-end not-italic relative shrink-0 w-full">
              <p className="font-['PingFang_SC:Medium'] leading-[44px] relative shrink-0 text-[#d48806] text-[36px] whitespace-nowrap">
                6
              </p>
              <p className="font-['PingFang_SC:Regular'] h-[26px] leading-[22px] relative shrink-0 text-[#389e0d] text-[13px] whitespace-nowrap">
                较上月1
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-[8px] items-center justify-between min-h-[160px] min-w-px relative">
          <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            {currentYellowItems.map((row) => (
              <div
                key={row.name}
                className="flex h-[32px] items-center justify-between gap-[4px] relative shrink-0 w-full"
              >
                <div className="flex gap-[4px] items-center min-w-0 relative">
                  <NewTag visible={false} />
                  <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[#1f2f48] text-[13px] min-[1560px]:text-[14px] w-[60px] min-[1680px]:w-[84px] whitespace-nowrap">
                    {row.name}
                  </p>
                  <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[13px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
                    {row.metric}
                  </p>
                </div>
                <p className="font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[12px] min-[1560px]:text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
                  {row.category}
                </p>
              </div>
            ))}
          </div>

          <div className="h-[12px] relative shrink-0 w-[31.502px]">
            <img
              alt=""
              className="block max-w-none pointer-events-none"
              src={imgGroup1321315963}
            />
            <button
              type="button"
              aria-label="上一页"
              onClick={() => setYellowPage(0)}
              className="absolute left-0 top-0 h-[12px] w-[14px] cursor-pointer"
            />
            <button
              type="button"
              aria-label="下一页"
              onClick={() => setYellowPage(1)}
              className="absolute right-0 top-0 h-[12px] w-[14px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* 绿灯评估对象 */}
      <div
        className="bg-gradient-to-b border border-[#95de64] border-solid flex from-[#edfaf6] min-h-[196px] items-start min-w-px overflow-hidden p-[12px] min-[1680px]:p-[16px] relative rounded-[12px] shadow-[0px_4px_18px_0px_rgba(41,75,131,0.05)] to-white"
        data-name="绿灯评估对象"
      >
        <div className="flex flex-col gap-[12px] items-start relative z-10 shrink-0">
          <LampIllustration lamp="绿灯" size={48} />
          <div className="flex flex-col items-start justify-center relative shrink-0">
            <div className="flex gap-[4px] items-end not-italic relative shrink-0 text-[#389e0d] w-full">
              <p className="font-['PingFang_SC:Medium'] leading-[44px] relative shrink-0 text-[36px] whitespace-nowrap">
                200
              </p>
              <p className="font-['PingFang_SC:Regular'] h-[26px] leading-[22px] relative shrink-0 text-[13px] whitespace-nowrap">
                较上月1
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute h-[150px] right-[6px] min-[1560px]:right-[26px] [filter:drop-shadow(0px_3px_8.9px_rgba(0,0,0,0.25))] top-[-1px] w-[163px] pointer-events-none"
          data-name="image 342"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[108.67%] left-0 max-w-none top-[-8.67%] w-full"
              src={imgImage343}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
