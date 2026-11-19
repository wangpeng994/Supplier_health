import {
  imgImage336,
  imgImage338,
  imgImage342,
  imgVector674,
  imgVector675,
} from "../assets";
import type { LampLevel } from "../data/suppliers";
import { LampIllustration } from "./LampIllustration";

const PRIORITY_ITEMS: { lamp: LampLevel; name: string; desc: string }[] = [
  { lamp: "黑灯", name: "捷荣科技", desc: "已经连续恶化3个月" },
  { lamp: "红灯", name: "丘钛", desc: "本月新增，质量异常管理" },
  { lamp: "黄灯", name: "辰阳电子", desc: "交付质量持续下降" },
];

const WARNING_ITEMS: { lamp: LampLevel; name: string; desc: string }[] = [
  { lamp: "黑灯", name: "Supplier A", desc: "已经连续恶化3个月" },
  { lamp: "红灯", name: "Supplier B", desc: "本月新增，质量异常管理" },
  { lamp: "黄灯", name: "Supplier C", desc: "交付质量持续下降" },
];

export function RiskWarningBanner() {
  return (
    <section
      className="bg-gradient-to-b border border-solid border-white drop-shadow-[0px_4px_9px_rgba(41,75,131,0.05)] from-[#ebf5ff] min-h-[204px] overflow-hidden p-[23px] relative rounded-[12px] shrink-0 to-[#f4faff] w-full"
      data-name="Aides · 风险预警总结"
    >
      <div
        className="absolute h-[204px] right-0 top-[-1px] w-[534px] pointer-events-none"
        data-name="image 336"
      >
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[199.12%] left-[-0.06%] max-w-none top-[-29.02%] w-[100.12%]"
            src={imgImage336}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap xl:flex-nowrap items-start justify-between gap-[24px] w-full">
        <div className="flex flex-col gap-[12px] items-start min-w-0">
          <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] h-[26px] leading-[26px] not-italic relative shrink-0 text-[#237cdc] text-[18px] w-full">
            风险预警
          </p>

          <div className="flex flex-wrap xl:flex-nowrap gap-[24px] xl:gap-[20px] min-[1440px]:gap-[48px] 2xl:gap-[100px] items-start w-full">
            <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full max-w-[500px] xl:w-[410px] min-[1440px]:w-[489px]">
              <div className="flex gap-[12px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[26px] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.85)] whitespace-nowrap">
                  <span>本月供应商质量健康度</span>
                  <span className="text-[#f5222d]">环比下降</span>
                </p>
                <div className="h-[23px] relative shrink-0 w-0">
                  <div className="absolute left-[-5.7735px] top-0">
                    <img
                      alt=""
                      className="block max-w-none"
                      src={imgVector674}
                    />
                  </div>
                </div>
              </div>

              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full max-w-[485px]">
                <span>{`黑红灯供应商由 `}</span>
                <span className="font-['PingFang_SC:Medium'] text-[#f5222d]">
                  16家
                </span>
                <span>{` 增加至 `}</span>
                <span className="font-['PingFang_SC:Medium'] text-[#f5222d]">
                  20家（+25%）
                </span>
                <span>{`，新增1家黑灯供应商。风险主要集中在 `}</span>
                <span className="font-['PingFang_SC:Medium']">量产质量管理</span>
                <span>{` 和 `}</span>
                <span className="font-['PingFang_SC:Medium']">交付质量实绩</span>
                <span>。</span>
              </p>

              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full 2xl:w-[500px]">
                5家 供应商已连续2个月以上恶化，预计未来1个月内黑红灯数量可能继续上升。
              </p>
            </div>

            <div className="hidden xl:block h-[115px] relative shrink-0 w-0">
              <div className="absolute left-[-0.5px] top-0">
                <img alt="" className="block max-w-none" src={imgVector675} />
              </div>
            </div>

            <div className="flex flex-col gap-[12px] items-start justify-center relative shrink-0">
              <div className="flex gap-[8px] items-start relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-[-4.55%] max-w-none size-[109.09%] top-[-4.55%]"
                      src={imgImage338}
                    />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] whitespace-nowrap">
                  建议优先关注
                </p>
              </div>

              <div className="flex flex-col gap-[8px] items-start relative shrink-0">
                {PRIORITY_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-[8px] items-start relative shrink-0"
                  >
                    <LampIllustration lamp={item.lamp} size={22} />
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] w-[72px] min-[1440px]:w-[84px]">
                      {item.name}
                    </p>
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden xl:block h-[115px] relative shrink-0 w-0">
              <div className="absolute left-[-0.5px] top-0">
                <img alt="" className="block max-w-none" src={imgVector675} />
              </div>
            </div>

            <div className="flex flex-col gap-[12px] items-start justify-center relative shrink-0">
              <div className="flex gap-[8px] items-start relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-[-4.55%] max-w-none size-[109.09%] top-[-4.55%]"
                      src={imgImage338}
                    />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] whitespace-nowrap">
                  预警类信息
                </p>
              </div>

              <div className="flex flex-col gap-[8px] items-start relative shrink-0">
                {WARNING_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-[8px] items-start relative shrink-0"
                  >
                    <LampIllustration lamp={item.lamp} size={22} />
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] w-[76px] min-[1440px]:w-[84px]">
                      {item.name}
                    </p>
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex flex-col items-start relative shrink-0 w-[118px] h-[57px] cursor-pointer transition-opacity hover:opacity-95"
          aria-label="AI 助手"
        >
          <div className="h-[57px] relative shrink-0 w-[118px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[207.02%] left-0 max-w-none top-[-45.61%] w-full"
                src={imgImage342}
              />
            </div>
          </div>
          <span className="[word-break:break-word] absolute font-['PingFang_SC:Medium'] leading-[24px] left-[32px] not-italic text-[16px] [text-shadow:0px_1px_1px_rgba(0,0,0,0.5)] text-white top-[10px] whitespace-nowrap">
            AI 助手
          </span>
        </button>
      </div>
    </section>
  );
}
