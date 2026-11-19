import { imgControlIcon, imgControlIcon1 } from "../assets";

export interface FilterValues {
  category: string;
  supplier: string;
  month: string;
  keyword: string;
}

interface SelectControlProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  ariaLabel: string;
}

export function SelectControl({
  value,
  options,
  onChange,
  ariaLabel,
}: SelectControlProps) {
  return (
    <div className="bg-white border border-[#ececec] border-solid flex gap-[6px] h-[32px] items-center overflow-hidden px-[12px] relative rounded-[4px] w-full hover:border-[#4096ff] transition-colors">
      <p className="[word-break:break-word] flex-1 font-['PingFang_SC:Regular'] leading-[22px] min-w-px not-italic relative text-[#20324d] text-[14px] truncate">
        {value}
      </p>
      <div className="relative shrink-0 size-[16px] pointer-events-none">
        <img alt="" className="block max-w-none" src={imgControlIcon} />
      </div>
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

interface SearchControlProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
}

export function SearchControl({
  value,
  onChange,
  onSubmit,
  placeholder = "输入供应商名称",
}: SearchControlProps) {
  return (
    <div className="bg-white border border-[#ececec] border-solid flex gap-[6px] h-[32px] items-center overflow-hidden px-[12px] relative rounded-[4px] w-full focus-within:border-[#1677ff] hover:border-[#4096ff] transition-colors">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit?.();
          }
        }}
        placeholder={placeholder}
        className="flex-1 min-w-0 bg-transparent outline-none font-['PingFang_SC:Regular'] leading-[22px] not-italic text-[#20324d] text-[14px] placeholder:text-[#7d8ca6]"
      />
      <div className="relative shrink-0 size-[16px] pointer-events-none">
        <img alt="" className="block max-w-none" src={imgControlIcon1} />
      </div>
    </div>
  );
}
