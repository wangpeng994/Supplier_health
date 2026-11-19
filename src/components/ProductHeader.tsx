import { imgIntelligentCore, imgProtectiveLoop } from "../assets";

export function ProductHeader() {
  return (
    <header
      className="bg-white flex gap-[12px] h-[80px] items-center overflow-hidden px-[24px] relative shrink-0 w-full"
      data-name="Product header"
    >
      <div className="relative h-[25px] w-[22.845px] shrink-0">
        <img
          alt=""
          className="absolute left-0 top-0 block max-w-none"
          src={imgProtectiveLoop}
        />
        <img
          alt=""
          className="absolute left-[6.47px] top-[7.33px] block max-w-none"
          src={imgIntelligentCore}
        />
      </div>
      <h1 className="[word-break:break-word] flex-1 font-['PingFang_SC:Semibold'] leading-[30px] min-w-px not-italic relative text-[#20324d] text-[24px]">
        供应商健康智能体
      </h1>
    </header>
  );
}
